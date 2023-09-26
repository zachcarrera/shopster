import mongoose from "mongoose";

const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const connectionString = process.env.CONNECTIONSTRING;
const uri = `mongodb+srv://${username}:${pw}@${connectionString}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose
    .connect(uri)
    .then(() => {
        console.log(`Successfully connected to the database`);
    })
    .catch((error) => console.log(`mongoose connection failed:`, error));
