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
// // console.log(includes(numbers, 5))
// const numbers = [1,2,3,4]
// function move(array, index, offset) {
//     const newValue = array[index]
//     console.log(newValue)
//    const newArray = array.splice(0, offset, newValue)
//    return newArray
// }
// console.log(move(numbers, 0, 1))
// const numbers = [1,2,3,4,1,1,1,1]
// function countOccurences(array, searchElement) {
//    let count = 0
//    for (let element of array)
//      if (element === searchElement) {
//       count++
//      }
//     return count
// }
// console.log(countOccurences(numbers, 1))
// const numbers = [1,2,3,4,5]
// function max(array) {
//  if (array.length === 0)
//    return undefined
//   let max = array[0]
//   for (let i = 0; i < array.length; i++)
//     if (array[i] > max)
//       max = array[i]
//     return max
// }
// console.log(max(numbers))
// function getMax(array) {
//   return array.reduce((accumlator, currentValue) => {
//     if (accumlator < currentValue) return currentValue
//     else return accumlator
//   } )
// }
// console.log(getMax(numbers))
// const movies = [
//   {title: "a", year: 2018, rating: 4.5},
//   {title: "b", year: 2018, rating: 4.7},
//   {title: "c", year: 2018, rating: 3},
//   {title: "d", year: 2017, rating: 4.5},
// ];
// function sortingMovies(movies) {
//   const titles = movies.filter(movie => {
//     if (movie.year === 2018 && movie.rating > 4)
//       return movie
//   }).map(movie => movie.title)
//   return titles
// }
// console.log(sortingMovies(movies))
// function sum(...args) {
//   return args.reduce((a,b) => a * b)
// }
// console.log(sum(1,2,3,4))
// function totalPrice(principal, rate, year = 2) {
//   return principal * rate * year
// }
// console.log(totalPrice(2,2,4))
// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`
//   },
//   set fullName(value) {
//     const parts = value.split(' ')
//     this.firstName = parts[0]
//     this.lastName = parts[1]
//   }
// }
// person.fullName = "Gaganjot singh"
// console.log(person.fullName)
//this keyword
// function factoryFunction() {
//   console.log(this)
// }
// factoryFunction()
// function Newvalue(value) {
//   this.value = value,
//   this.draw = function () {
//     console.log(value)
//   }
// }
// const newvalue = new Newvalue("a")
// console.log(newvalue.draw())

// const newObject = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   newArray: [1,2,3,4,5,6,67,7],
//   getNewArray() {
//     this.newArray.forEach(array => console.log(array))

//   }
// }
// newObject.getNewArray()
// function sum(...numbers) {
//   let total = 0
//   for (let number of numbers)
//     total += number
//   return total
// }
// console.log(sum(1,2,3,4,5))
// function sumArray(...numbers) {
//   if (numbers.isArray === true) {
//     numbers.reduce((a,b) => a + b)
//   } else {
//     let total = 0
//     for (let number of numbers)
//       total += number
//     return total
//   }
// }
// console.log(sumArray([1,2,3,4,5]))
// const circle = {
//   radius: 6,
//   get area() {
//     console.log(Math.PI*this.radius * this.radius)
//   },
  
// } 
// circle.radius = 4
// console.log(circle.area)
function Stopwatch() {
  let duration, running, startTime, endTime = 0;
  this.start = function() {
    if (running) {
      console.log("please stop the watch")
    }
   running = true;
   startTime = new Date()
  };
  this.stop = function() {
    if (!running) {
      console.log("please start the watch")
    }
    running = false;
    endTime = new Date()
  };
  this.reset = function() {
    duration = 0;
  
    totalTime = endTime - startTime / 1000
    console.log(`Your total time is ${totalTime}`)
  }
}
const s1 = new Stopwatch()
s1.start()
s1.stop()
console.log(s1.reset)