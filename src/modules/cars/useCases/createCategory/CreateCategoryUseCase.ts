import { ICategoryRepository } from "../../repositories/ICategoryRepository"

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase{
    constructor(private categoryRepository: ICategoryRepository){}

    async execute({description, name}: IRequest): Promise<void>{

        const categoryAlreadyExists = await this.categoryRepository.findByName(name)

        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }

        this.categoryRepository.create({name, description})
        }
}

export { CreateCategoryUseCase }