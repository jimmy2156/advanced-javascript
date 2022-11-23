// factory functions
function createCircle(radius) {
    const circle = {
        radius: radius,
        draw() {
            console.log("draw")
        }
    }
    return circle
}
const circle1 = createCircle(2)
//console.log(circle1.draw())
function Createcircle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log("draw")
    }
   
}
const circle2 = new Createcircle(2)
// for (let key in circle2) {
//     console.log(circle2[key] + 2)
// }
// for (let key of Object.keys(circle2)) {
//     console.log(`object is ${circle2[key]}`)
// }
// const anotherCircle = {}
// for (let key in circle2) {
//     anotherCircle[key] = circle2[key]
// }
// console.log(anotherCircle)
//const anotherCircle = Object.assign({}, circle2)
//const anotherCircle = {...circle2}

console.log(anotherCircle)