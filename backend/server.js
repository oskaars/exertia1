require('dotenv').config()

const express = require('express');

const app = express();

//routing 
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})


// require dotenv config oraz proceess.env.port sluzy do robienia zmiennych globalnych w pliku .env którego potem wrzucamy do gitignore
app.listen(process.env.PORT, () => {
    console.log('server is running on port:4000');
});

