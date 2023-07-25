const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect('mongodb+srv://sunra:twXqeLFW97JUCwh@cluster0.usuo4ph.mongodb.net/?retryWrites=true&w=majority', {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000 
        });
        console.log("MongoDB successfully connected~");

    } catch (err) {
        console.log("Mongoose: ", err);
    }
}