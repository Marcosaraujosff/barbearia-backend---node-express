import { Request, Response } from "express";
import { ChecksubscriptionService } from "../../Services/haircut/ChecksubscriptionService";

class CheckSubscriptionController{
    async handle(request: Request, response: Response){

        const user_id = request.user_id;

        const checkSubscription = new ChecksubscriptionService();

        const status = await checkSubscription.execute({ user_id });

        return response.json(status);

    }
}

export { CheckSubscriptionController }