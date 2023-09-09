if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const User = require('./models/user')

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
    await User.deleteMany({_id: {$nin: [process.env.ADMIN_ID, process.env.SEED_ID, process.env.MARKELOFF_ID] } }).then( res => {
    console.log(res)
    }).catch(err => {
    console.log(err)
    })
    mongoose.connection.close()
}

func()