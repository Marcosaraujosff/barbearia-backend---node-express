import { Request, Response } from "express";
import { UpdateUserService } from "../../Services/users/UpdateUserService";

class UpdateUserController{
    async handle(request: Request, response: Response){

        const { name, endereco } = request.body;
        const user_id = request.user_id;

        const updateUserService = new UpdateUserService();

        const updateUser = await updateUserService.execute({user_id, name, endereco});

        return response.json(updateUser)

    }
}

export { UpdateUserController }