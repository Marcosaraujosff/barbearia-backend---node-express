import { Request, Response } from "express";
import { ListHaircutService } from "../../Services/haircut/ListHaircutServices";

class ListHaircutController{
    async handle(request: Request, response: Response){

        const user_id = request.user_id;
        const status = request.query.status as string;

        const ListHaircut = new ListHaircutService();

        const haircut = await ListHaircut.execute({user_id, status});

        return response.json(haircut);

    }
}

export { ListHaircutController }