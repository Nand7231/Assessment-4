const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune } = require("./controller")
app.get("/api/fortune", getFortune);

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const {
    deleteMotivation, 
    createMotivation, 
    updateMotivation,
    getMotivation
} = require('./controller')

app.post("/api/motivation", createMotivation);
app.put("/api/motivation/:id", updateMotivation);
app.delete("/api/motivation/:id", deleteMotivation);
app.get("/api/Motivation", getMotivation);





app.listen(4000, () => console.log("Server running on 4000"));
