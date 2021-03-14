// server/index.js

//thank you free code camp

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//i was considering trying to put an array of calculations in the json
// messages, to be added to/also displayed using the data object i
// created in App.js. I really ran out of time though. 

let calculations = ["example calculation from server"];

app.use(express.static(path.resolve(__dirname, '../calc-app/build')));


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../calc-app/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});