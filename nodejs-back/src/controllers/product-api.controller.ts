import ErrorHandler from "../utils/Errors/error-handler";
import BaseApiController from "./base-api.controller";
import { productService } from "../services/product.service";
import { Product } from "../utils/types";
import { Response, Request } from "express";

class ProductApiController extends BaseApiController {

    constructor({ req, res }: { req: Request; res: Response; }) {
        super({ req, res })
    }

    async getProducts() {
        try {
            const products: Product[] = await productService.findAll();
            this.response.status(200).send({
                success: true,
                products: []
            });
        } catch (error: any) {
            return this.sendResponseError({
                error: new ErrorHandler({
                    message: error.message,
                    statusCode: error.statusCode
                })
            })
        }
    }

    async getProductById() {
        try {
            const product_id = this.getParams().product_id;
            productService.findAll();
            this.response.status(200).send({
                success: true,
                products: []
            });
        } catch (error: any) {
            return this.sendResponseError({
                error: new ErrorHandler({
                    message: error.message,
                    statusCode: error.statusCode
                })
            })
        }
    }



}

export default ProductApiController;