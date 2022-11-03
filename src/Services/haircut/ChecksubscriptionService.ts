import prismaClient from "../../prismaClient";

interface CheckSubscription{
    user_id: string
}

class ChecksubscriptionService{
    async execute({ user_id }: CheckSubscription){

        const status = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                subscriptions: {
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        })

        return status;

    }
}

export { ChecksubscriptionService }