import { Router, Request, Response } from "express";
import ProductApiController from "../controllers/product-api.controller";

const apiRouter: Router = Router()


apiRouter.get('/product/find/:product_id',
    async (req: Request, res: Response) => await new ProductApiController({ req, res }).getProductById())

apiRouter.get('/product/find/all',
    async (req: Request, res: Response) => await new ProductApiController({ req, res }).getProducts())

export default apiRouter;