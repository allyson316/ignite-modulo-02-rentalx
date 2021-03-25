import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    // função do javascript que atribui propiedades para um objejo/classe sem setar um a um
    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
