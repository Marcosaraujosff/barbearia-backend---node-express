import { Request, Response } from "express";
import { DetailUserService } from "../../Services/users/DetailUserService";

class DetailUserController{
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;

        const detailUserService = new DetailUserService();

        const detail = await detailUserService.execute({user_id});

        return response.json(detail)
    }
}

export { DetailUserController }