import { Router,  } from "express"
import { CategoryRepository } from "../modules/cars/repositories/implementations/CategoryRepository"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategory"

const categoriesRoutes = Router()
const categoryRepository = CategoryRepository.getInstance()


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response)
})

export { categoriesRoutes }