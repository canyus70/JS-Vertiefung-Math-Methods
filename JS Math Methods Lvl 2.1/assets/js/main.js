

const roundTo = (Zahl, Genauigkeit) => {
    const round = Math.round(Zahl)
    const nachKomma= Zahl.toFixed(Genauigkeit)
    console.log(nachKomma)

}







// console.log(roundTo(3.1415926535, 5)); // 3.14159
roundTo(3.1415926535, 5)