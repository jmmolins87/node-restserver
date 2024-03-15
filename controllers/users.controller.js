

const { response } = require('express');

const usersGet = ( req, res = response ) => {
    res.json({ msg: 'get API - Controller' })
}

const usersPut =  ( req, res ) => {

    const id = req.params.id;

    res.json({ 
        msg: 'put API - Controller',
        id
    })
}

const usersPost = ( req, res ) => {

    const { name, age } = req.body;

    res.json({
        msg: 'post API - Controller', 
        name, 
        age
    })
}

const usersDelete = ( req, res ) => {
    res.json({ msg: 'delete API - Controller' })
}

const usersPatch = ( req, res ) => {
    res.json({ msg: 'patch API - Controller' })
}


module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}