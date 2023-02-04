const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {

    try {
        mongoose.set("strictQuery", true);
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@reactgram.zsi6k2l.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectou ao banco !");
        return dbConn

    } catch (error) {
        console.log(error);
    }
};

conn();

module.exports = conn;