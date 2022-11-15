const Motive = require("./Motive.json")
let MotiveId = 5


const Motivation = [
    "1 step at a time!",
    "You will get through this",
     "Just keep swimming",
     "After every rainfall look for the rainbow",
];


module.exports = {
    deleteMotivation: (req, res) => {

        const lol = (element) => {
            return element.id == req.params.id;
            
        }
        let coolIndex = Motive.findIndex(lol);
        Motive.splice(coolIndex, 1);
    
        res.status(200).send(req.params.id)

    },

    updateMotivation: (req, res) => {
        const pop = (element) => {
            return element.id == req.params.id;
        }
        let poppy = Motive.find(pop);
        let { info } = req.body
        poppy.info = info
        res.status(200).send()


    },


    getMotivation: (req, res) => {
        res.status(200).send(JSON.stringify(Motive))


    },
    createMotivation: (req, res) => {
        let { info } = req.body
        let newMotive = {
            id: MotiveId,
            info,
        }
        Motive.push(newMotive)
        res.status(200).send(Motive)
        MotiveId++
        

        

    },
    

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "T1 will win worlds",
            "DWG will win worlds",
            "G2 will win worlds",
            "Yes this is a crappy fortune but oh well",
            "If you get this fortune you are cool!"
        ];
        let randomFI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFI];

        res.status(200).send(randomFortune);
    },


}