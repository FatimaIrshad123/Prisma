import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// async function createUser(username:string,firstName:string,password: string) {
//     const res = await prisma.user.create({
//         data:{
//             username,
//             firstName,
//             password
//         },
//         select: {
//             id: true,
//             username: true,
//             firstName: true,
//             password: true
//         }
//     })
//     console.log(res)
// }
// createUser('Fatima@gmail.com','fatima','1234')

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