import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())
app.post('/',async(req,res)=> {
    let newuser = await prisma.user.create({
        data:{
            username: req.body.username,
            firstName: req.body.firstName,
            password: req.body.password
        }
    })
    let newTodo = await prisma.todo.create({
        data:{
            title: req.body.title,
            description: req.body.description,
            userId: newuser.id
        }
    })
    res.json(newuser)
})
app.get ('/user',async(req,res) => {
    let user = await prisma.user.findMany({
        select:{
            id:true,
            username:true,
            firstName:true,
            password:true
        }
    })
    res.json(user)
})
app.get('/todo',async(req,res)=> {
    let todos = await prisma.todo.findMany({
        select:{
            id:true,
            title:true,
            description:true,
            userId:true,
            user: {
                select:{
                    id:true,
                    username:true,
                    firstName:true,
                    password:true
                }
            }
        }
    })
    res.json(todos)
})
app.post('/updateTodo',async(req,res) => {
    let todo = await prisma.todo.update({
        where:{
            id:req.body.id
        },
        data:{
            title:req.body.title,
            description:req.body.description
        }
    })
    res.json(todo)
})
app.post('/updateUser',async(req,res)=> {
    let user = await prisma.user.update({
        where:{
            id:req.body.id
        },
        data:{
            username:req.body.username,
            firstName:req.body.firstName
        }
    })
    res.json(user)
})


app.listen(port,() => console.log('App running on port 3000'))