import prismaClient from "../../prismaClient";

interface NewScheduleRequest{
    user_id: string,
    haircut_id: string,
    customer: string
}

class NewScheduleService{
    async execute({ user_id, haircut_id, customer }: NewScheduleRequest){

        if(customer === '' || customer === ''){
            throw new Error("Erro ao tentar agendar.")
        }

        const schedule = await prismaClient.service.create({
            data: {
                customer,
                haircut_id,
                user_id
            }
        })

        return schedule;

    }
}

export { NewScheduleService }