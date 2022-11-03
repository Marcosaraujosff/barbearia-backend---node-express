import { prisma } from "@prisma/client";
import prismaClient from "../../prismaClient";

interface HaircutRequest{
    user_id: string,
    haircut_id: string,
    name: string,
    price: number,
    status: string | boolean
}

class UpdateHaircutService{
    async execute({ user_id, haircut_id, name, price, status = true }: HaircutRequest){

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            include: {
                subscriptions: true
            }
        })

        if(user?.subscriptions?.status !== 'active'){
            throw new Error("Não autorizado.")
        }

        const haircut = await prismaClient.haircut.update({
            where: {
                id: haircut_id,     
            },
            data: {
                name: name,
                price: price,
                status: status === true ? true : false
            }
        })

        return haircut;

    }
}

export { UpdateHaircutService }