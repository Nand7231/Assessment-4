const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const MotivationBtn = document.getElementById("motivationButton")
const createBtn = document.getElementById("createButton")
const kaiText = document.getElementById("Kai")
const deleteButton = document.getElementById("deleteSomething")
const doomText = document.getElementById("doom")
const changeButton = document.getElementById("changeSomething")
const changeText = document.getElementById("change")
const idText = document.getElementById("inde")


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);

        });
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            
    });
};
const getMotivation = () => {
    axios.get("http://localhost:4000/api/Motivation/")
        .then(res => {
            const data = JSON.stringify(res.data);
            alert(data);
            console.log(res.data)
        });
};
const motiveCreate = () => {
    
    axios.post("http://localhost:4000/api/motivation", {
        info: kaiText.value

    })
};
const elDeletor = () => {
    axios.delete("http://localhost:4000/api/motivation/" + doomText.value)



};
const changer = () => {
    axios.put("http://localhost:4000/api/motivation/" + idText.value, {
        info: changeText.value
    })

}


MotivationBtn.addEventListener("click", getMotivation)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click", getFortune)
createBtn.addEventListener("click", motiveCreate)
deleteButton.addEventListener("click", elDeletor)
changeButton.addEventListener("click", changer)