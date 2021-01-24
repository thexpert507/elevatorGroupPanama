const express = require('express');
const app = express();
const path = require('path');

// Configs
app.use( express.urlencoded({ extended: false }));
app.use( express.json() );

// Static
app.use( express.static(path.join(__dirname, '/public'),{ extensions: ['html', 'htm'] }))

// Routes
app.use('/api',require('./routes/send-email'))

// Server
app.listen(3000, ()=>{
    console.log('Server corriendo en port 3000')
})