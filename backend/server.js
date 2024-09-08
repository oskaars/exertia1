require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./router/workouts.js')

//init
const app = express();

//middleware - smieszna nazwa na to co sie dzieje na serwerze miedzy zapytaniem a odpowiedzią 
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//routing 
app.use('/api/workouts', workoutRoutes)


// require dotenv config oraz proceess.env.port sluzy do robienia zmiennych globalnych w pliku .env którego potem wrzucamy do gitignore
app.listen(process.env.PORT, () => {
    console.log('server is running on port: ', process.env.PORT);
});

