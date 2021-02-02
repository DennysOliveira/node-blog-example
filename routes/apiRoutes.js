const express = require('express');

const router = express.Router();

router.get('/:id', ( req, res ) => {
    const id = req.params.id;
    const token = 'J91jd9jxjAjdIdnjai918nasofd8130nr08FNx'
    const d = new Date();
    const string = d.toJSON();

    if( id === token ) {
        res.write('<title>Time Request</title>')
        res.write(string);
        res.send();
    } else {
        res.write('Unauthorized.')  
        res.send();
    }
})