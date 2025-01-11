const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const uri = "mongodb+srv://ashwinmongo:ashwinmongo911@ashwincluster.ujjhi.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=ashwincluster"
mongoose.connect(uri).then(() => console.log("Connected to database!"))
const schema = new mongoose.Schema({
    id:String,
    msg: String
})
const Model = mongoose.model('messages', schema)

app.get('/get', async (req, res) => {
    try {
        const message = await Model.find();
        res.status(200).json(message)
    } catch (error) {
        console.error(error)
        throw error;
    }
})

app.listen(8080, () => {
    console.log("Server running at 8080!")
})
