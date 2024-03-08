import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email : username,
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res)
}
// insertUser('javaria@gmail.com','12345','fatima','irshad')

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email : username},
    data: {
        firstName,
        lastName
     },
    select: {
        email: true,
        firstName: true,
        lastName: true
    }
  })
  console.log(res)
}
// updateUser('fatima@gmail.com',{firstName:'abc',lastName:'xyz'})

async function getUser(username: string) {
  let res = await prisma.user.findFirst({
    where:{email:username}
  }) 
  console.log(res)
}
getUser('fatima@gmail.com')
