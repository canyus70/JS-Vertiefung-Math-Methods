let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const round = (a) => {
    a.forEach(element => {
        const abgerundet = Math.round(element);
        console.log(abgerundet)
    });
    // a.map(element => Math.round(element));
}
console.log(round(array));