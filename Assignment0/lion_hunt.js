const lionsAndZebras = "L   ZZ  L";
let lions;
let zebras;
let distance = 0;
let closestDistance = lionsAndZebras.length;
for (let position = 0; position < lionsAndZebras.length; position++) {
    if (lionsAndZebras[position] === "L") {
        lions = position;
    }
    if (lionsAndZebras[position] === "Z") {
        zebras = position;
    }
    distance = (lions > zebras) ? (lions - zebras - 1) : (zebras - lions - 1);
    closestDistance = distance < closestDistance ? distance : closestDistance;

}
if (lions === undefined || zebras === undefined) {
    closestDistance = -1;
}
console.log("Distance between lion and zebra in", lionsAndZebras, "is", closestDistance);
