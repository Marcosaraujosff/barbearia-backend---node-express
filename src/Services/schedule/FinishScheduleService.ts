import prismaClient from "../../prismaClient";

interface FinishRequest{
    schedule_id: string,
    user_id: string
}

class FinishScheduleService {
    async execute({ schedule_id, user_id }: FinishRequest) {

        if(schedule_id === '' || user_id === ''){
            throw new Error("Erro ao desmarcar horario, tente novemente.")
        }

        try {

            const belongsToUser = await prismaClient.service.findFirst({
                where: {
                    id: schedule_id,
                    user_id: user_id
                }
            })

            if(!belongsToUser){
                throw new Error("Não autorizado.")
            }

            await prismaClient.service.delete({
                where: {
                    id: schedule_id
                }
            })

            return { message: "Horario finalizado/desmarcado com sucesso." }
            
        } catch (error) {

            console.log(error);

            throw new Error(error);
            
        }

    }
}

export { FinishScheduleService }