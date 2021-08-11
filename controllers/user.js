const { response } = require('express')

// Al siguiente código se le llama endPoint:
const usersGet = (req, res = response) => {
    // Desestructuración con valor por defecto:
    const { name = 'No name'} = req.query
    //res.send('Hello World') // Por defecto envia html
    // Con lo siguiente se envía una respuesta json:
    res.json({
        msg: 'get API - controller',
        name
    })
}

const usersPut = (req, res = response) =>{  
    
    const { id } = req.params

    res.json({
        msg: "put API - controller",
        id
    })
}

const usersPost = (req, res = response) =>{  
    const body = req.body;          
    res.json({
        msg: "post API - controller",
        body
    })
}

const usersDelete = (req, res = response) =>{            
    res.json({
        msg: "delete API - controller"
    })
}
module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}