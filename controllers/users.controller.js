

const { response } = require('express');

const usersGet = ( req, res = response ) => {
    res.json({ msg: 'get API - Controller' })
}

const usersPut =  ( req, res ) => {
    res.json({ msg: 'put API - Controller' })
}

const usersPost = ( req, res ) => {
    res.json({ msg: 'post API - Controller' })
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