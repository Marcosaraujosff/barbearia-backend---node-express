import { Request, Response } from "express";
import { CreateHaircutService } from "../../Services/haircut/CreateHaircutService";

class CreateHaircutController{
    async handle(request: Request, response: Response){

        const { name, price } = request.body;
        const user_id = request.user_id;

        const createHaircutService = new CreateHaircutService();

        const haircutService = await createHaircutService.execute({user_id, name, price})

        return response.json(haircutService);

    }
}

export { CreateHaircutController }