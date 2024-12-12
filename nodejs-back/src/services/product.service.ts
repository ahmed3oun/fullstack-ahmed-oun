import axios from "axios";
import { Response } from "express";
import ErrorHandler from "../utils/Errors/error-handler";
import { Product } from "../utils/types";

class ProductService {

    async findAll() {
        const response: Response = await axios.get('https://dummyjson.com/products')
        if (response.statusCode === 200) {
            return (response as any).data.products;
        } else {
            throw new ErrorHandler({
                message: 'Something gone wrong',
                statusCode: 500
            });
        }
    }

    async findById({
        product_id
    }: { product_id: number; }) {

        const response: Response = await axios.get(`https://dummyjson.com/products/${product_id}`)
        if (response.statusCode === 200) {
            return (response as any).data.products;
        } else {
            throw new ErrorHandler({
                message: 'Something gone wrong',
                statusCode: 500
            });
        }
    }
}

const productService = new ProductService();

export {
    productService,
    ProductService
}