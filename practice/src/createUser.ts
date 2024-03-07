import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createTodos(title:string,description:string,user_id:number) {
    const res = await prisma.todo.create({
        data:{
            title,
            description,
            user_id
        },
        select: {
            id: true,
            title: true,
            description: true
        }
    })
    console.log(res)
}
createTodos('abc','abcde',1)