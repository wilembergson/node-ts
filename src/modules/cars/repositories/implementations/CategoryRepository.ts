import { Category } from "../../model/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository"


class CategoryRepository implements ICategoryRepository{
    private categories: Category[]

    private static INSTANCE: CategoryRepository

    private constructor(){
        this.categories = []
    }

    public static getInstance(): CategoryRepository {
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository()
        }

        return CategoryRepository.INSTANCE
    }

    create({ description, name }: ICreateCategoryDTO):void {
        const category: Category = new Category()

        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Category[]{
        return this.categories
    }

    findByName(name: string): Category{
        const category = this.categories.find((category) => category.name === name)
        return category
    }

}

export { CategoryRepository }