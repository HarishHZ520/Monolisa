import 'dotenv/config';
import mongoose from 'mongoose'
import app from './app';

const db = process.env.DATABASE_LOCAL || ''
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then((res) => console.log('DB Connected'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})