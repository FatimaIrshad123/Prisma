import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getTodos(userId : number){
    const res = await prisma.todo.findMany({
        where: {
            user_id : userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: {
                select: {
                    id: true,
                    firstName: true,
                    username: true
                }
            }
        }
    })
    console.log(res)
}
getTodos(1)