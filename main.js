// factory functions
// function createCircle(radius) {
//     const circle = {
//         radius: radius,
//         draw() {
//             console.log("draw")
//         }
//     }
//     return circle
// }
// const circle1 = createCircle(2)
// //console.log(circle1.draw())
// function Createcircle(radius) {
//     this.radius = radius,
//     this.draw = function() {
//         console.log("draw")
//     }
   
// }
// const circle2 = new Createcircle(2)
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

//console.log(anotherCircle)
// const address = {
//     street: 239,
//     city: "toronto",
//     zipCode: "M9w7b6"
// }
// function showingKeys(address) {
//     for (let key in address) {
//         console.log(`${key} = ${address[key]}`)
//     }
// }
// showingKeys(address)
// function createAddress(street, city, zipCode) {
//     let address = {
//         street,
//         city,
//         zipCode
//     }
//     return address
// }
// function Address(street, city, zipCode) {
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode

// }


//const address1 = createAddress(32, "Brampton", "L6T2E5")
// const address2 = new Address(21, "Missisauga", "L6R")
// console.log(address1)
// console.log(address2)
// const circle3 = {...circle1}
// function areEqual(address1, address2) {
//     if (Object.keys(address1) === Object.keys(address2) && Object.values(address1) === Object.values(address2)) {
//         console.log("The objects are equal")
//     } else {
//         console.log("They are not equal")
//     }
// }
// console.log(circle1)
// console.log(circle2)
// console.log(areEqual(circle1, circle3))
// console.log(Object.values(circle3))
// const numbers = [];
// numbers.push(3,4)
// numbers.unshift(1,2)
// numbers.splice(2, 0, 3)
// // console.log(numbers.includes(2,3))
// const courses = [{id: 1, name: "course1"}, {id: 2, name: "course2"}]
//console.log(courses.find(john => john.name === "course2"))
// const courses2 = [{id: 10, name: "course6"}, {id: 5, name: "course5"}]
// const allCourses = [...courses, ...courses2]
//console.log(allCourses.find(course => console.log(`The count is ${course.id * 8}`)))
//console.log(allCourses)
// let sum = ""
// for (let course of allCourses) {
//     sum = `${course.name}`
// }
// console.log(sum)
//const numbers = [1,2,3,4];
// function arrayFromRange(min, max) {
//     let numbers = []
//    for (let i = 0; i < max; i++) {
//     numbers.push(i)
//    }
//     return numbers
// }
// const numbers = [1,2,3,4]
// console.log(numbers)
// function includes(array, number1) {
//     for (let number of array) 
//         if (number === number1)
//           return true
//         return false
//  }
// console.log(includes(numbers, 5))