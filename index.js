//Config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()


const Person = require('./models/Person')

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json())


//as rotas da API
app.post('/person', async (req, res) => {

    const {name, salary, approved} = req.body

    const person = {
        name, 
        salary,
        approved
    }

    try {
        await Person.create(person) 
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso.'})
    } catch (error) {
        res.status(500).json({ error: error})
    }

})

//rota inicial
app.get('/', (req, res) => {
    //mostrar requisicao

    res.json({message:'Oi Express!'})
})

//const DB_USER = 'diegoalbuquerque03'
//const DB_PASSWORD = encodeURIComponent('F79SXhIicRjGfxrD')

mongoose
.connect(
    'mongodb+srv://diegoalbuquerque03:F79SXhIicRjGfxrD@cluster0.ie7iyhq.mongodb.net/?retryWrites=true&w=majority'
    )
.then(() =>{
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))

//entregar porta 

//F79SXhIicRjGfxrD
//mongodb+srv://diegoalbuquerque03:F79SXhIicRjGfxrD@cluster0.ie7iyhq.mongodb.net/?retryWrites=true&w=majority