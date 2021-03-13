const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successfully done.");
}).catch((e) => {
    console.log("No connection")
})