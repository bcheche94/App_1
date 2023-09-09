if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Review = require('./models/review')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('database connected')
})

const func = async () => {
    await Review.deleteMany({}).then( res => {
    console.log(res)
    }).catch(err => {
    console.log(err)
    })
    mongoose.connection.close()
}

func()