import ErrorHandler from "../utils/Errors/error-handler";
import { Request, Response } from "express";

class BaseApiController {
    request: Request
    response: Response

    constructor({ req, res }: { req: Request; res: Response; }) {
        this.request = req
        this.response = res
    }

    setRequest(req: Request) {
        this.request = req;
    }

    setResponse(res: Response) {
        this.response = res;
    }

    getParams() {
        return this.request.params || {};
    }

    getQueries() {
        return this.request.query || {};
    }

    getPaginationParams() {
        const { limit = 20, page = 1 } = this.getQueries();
        const offset = (limit as number) * ((page as number) - 1);

        return {
            limit,
            page,
            offset,
        }
    }

    getBody() {
        return this.request.body || {};
    }

    getBodyField(paramName: string | number) {
        return this.getBody()[paramName] || null
    }


    throwNotAuthorized(message = 'You are not autorized') {
        throw new ErrorHandler({
            message,
            statusCode: 403,
        });
    }

    sendFatalError({ error }: { error: Error; }) {

        const message = (error && error?.message) ? (error?.message) : 'Fatal error'

        this.response.status(500).send({
            success: false,
            error: message,
        });
    }

    sendResponseError({ error }: { error: ErrorHandler; }) {

        const message = (error && error?.message) ? (error?.message) : 'Fatal error'

        this.response.status(error?.statusCode || 500).send({
            success: false,
            error: message,
        });
    }
}

export default BaseApiController;

