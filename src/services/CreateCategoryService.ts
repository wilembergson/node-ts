import { CategoryRepository } from "../repositories/CategoryRepository"
import { ICategoryRepository } from "../repositories/ICategoryRepository"

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoryRepository: ICategoryRepository){}

    execute({description, name}: IRequest): void{

        const categoryAlreadyExists = this.categoryRepository.findByName(name)

        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }

        this.categoryRepository.create({name, description})
        }
}

export { CreateCategoryService }