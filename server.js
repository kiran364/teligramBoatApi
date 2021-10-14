const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 

// App Config...
const app = express();  

//routes
const surveyRoute = require('./routes/survey.route');
app.use('/survey', surveyRoute)


// telegraf connection

const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.botId)

bot.use((ctx) => {
    ctx.reply('hiiii human!!!')
})

bot.launch()

               
                      
const Port = process.env.Port;

// Middleware
app.use(express.json());

// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));

//Default Route
app.get("/", (req, res) => {
    res.send("Hello From Teligram Boot API Server");
});


//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port -- ${Port}`);
})