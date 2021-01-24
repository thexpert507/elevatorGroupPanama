const { Router } = require('express');
const router = Router();

const transporter = require('../utils/nodemailer');

// bvtthkdjveivetoa

router.post('/send-email', async (req, res)=>{
    const { nombre, correo, telefono, mensaje } = req.body;

    await transporter.sendMail({
        from: correo, // sender address
        to: process.env.EMAIL , // list of receivers
        subject: `Contacto : ${ correo }`, // Subject line
        html: `
        <h1>✉️ Nuevo mensaje de parte de ${ nombre }</h1>
        <h3>📞 Numero: ${ telefono }</h3>
        <b>Mensaje: </b>
        <p>${ mensaje }</p>
        `,
    });

    
    res.redirect('/gracias')
})

module.exports = router;