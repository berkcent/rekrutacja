import { Category } from './mockedApi';

export interface CategoryListElement {
  name: string;
  id: number;
  image: string;
  order: number;
  children: CategoryListElement[];
  showOnHome: boolean;
}

const extractOrder = (category: Category): number => {
  let order = category.Title;

  if (category.Title && category.Title.includes('#')) {
    order = category.Title.split('#')[0];
  }

  let orderL = parseInt(order);

  if (isNaN(orderL)) {
    orderL = category.id;
  }

  return orderL;
};

const mapCategory = (category: Category): CategoryListElement => ({
  id: category.id,
  image: category.MetaTagDescription,
  name: category.name,
  order: extractOrder(category),
  children: mapCategories(category.children),
  showOnHome: false,
});

const sortCategories = (
  categories: CategoryListElement[]
): CategoryListElement[] => categories.sort((a, b) => a.order - b.order);

const mapCategories = (categories: Category[]): CategoryListElement[] =>
  sortCategories(categories.map(mapCategory));

export const updateToShowOnHomeValue = (
  list: CategoryListElement[],
  toShowOnHome: number[]
): CategoryListElement[] => {
  if (list.length <= 5) {
    return list.map((a) => ({
      ...a,
      showOnHome: true,
    }));
  }

  if (toShowOnHome.length > 0) {
    return list.map((a) => ({
      ...a,
      showOnHome: toShowOnHome.includes(a.id),
    }));
  }

  return list.map((x, index) => ({
    ...x,
    showOnHome: index < 3,
  }));
};

type GetCategoriesFn = () => Promise<{ data: Category[] }>;

export const categoryTree = async (
  getCategories: GetCategoriesFn,
  toShowOnHome: number[] = []
): Promise<CategoryListElement[]> => {
  const { data: categories } = await getCategories();

  return updateToShowOnHomeValue(mapCategories(categories), toShowOnHome);
};
