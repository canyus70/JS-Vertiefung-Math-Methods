
const fenster = Number(prompt("Schätzen Sie eine Zahl zwishcen 1 und 10"))


const spiel = () => {
    const randomNum = Math.ceil(Math.random()*10)
    console.log(randomNum)
    if(fenster === randomNum) {
        console.log("Du hast gewonnen");
    } else {
        console.log("Du loser");
    }
}
spiel()