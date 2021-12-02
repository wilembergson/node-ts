import { getRepository, Repository } from "typeorm"
import { Category } from "../../entities/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository"


class CategoryRepository implements ICategoryRepository{
    private repository: Repository<Category>

    constructor(){
        this.repository = getRepository(Category) 
    }

    /*public static getInstance(): CategoryRepository {
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository()
        }

        return CategoryRepository.INSTANCE
    }*/

    async create({ description, name }: ICreateCategoryDTO):Promise<void> {
        const category = this.repository.create({
            description,
            name
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]>{
        const category = await this.repository.find()
        return category
    }

    async findByName(name: string): Promise<Category>{
        const category = await this.repository.findOne({ name })
        return category
    }

}

export { CategoryRepository }