import mongoose from 'mongoose';

const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@shopster.t8cwhvk.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Successfully connected to the database`);
    })
    .catch((error) => console.log(`mongoose connection failed:`, error));