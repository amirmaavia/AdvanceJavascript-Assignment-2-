let userDetail = {
    name: 'Ameer Muavia',
    age: "21",
    education: "underGraduate"
}

//Practice 1
function closure(x) {
    let Number = 5
    Number = 5 + x
    return Number
}
console.log(closure(10))

//Practice 2 
let Array1 = ["Maavia", "Mudassir", "Hamza", "Najaf", "Irtiza"]

function findArray(Array1, value) {
    if (Array1.length === 0) {
        return false
    }

    const firstIndex = Array1[0]
    if (firstIndex === value) {
        return true;
    }

    // recursive case: first element doesn't match, search the rest of the array
    const rest = Array1.slice(1);
    return findArray(rest, value);
}

console.log(findArray(Array1, "Maavia"))
console.log(findArray(Array1, "dawar"))

//Practice 3 
function addParagraph(Text) {
    const paragraph = document.createElement("p")
    paragraph.innerText = Text
    // paragraph.innerText = "Hey! This is Ameer Muavia"
    document.body.append(paragraph)
}
addParagraph("Hey! This is Ameer Muavia")

//Practice 4 

function addItem(Item) {
    // const body = document.querySelector('body')
    const listItem = document.createElement("li")
    listItem.textContent = Item
    const ul = document.createElement("ul")
    ul.appendChild(listItem)
    document.body.append(ul)
}
addItem("Sun")


//Again Practice 4
// function addItem(Item) {
//     const listItem = document.createElement("li")
//     listItem.textContent = Item
//     const ul = document.querySelector("ul")
//     ul.appendChild(listItem)
// }
// addItem("Moon")

//Practice 5 
function changeColor(element, color) {
    element.style.backgroundColor = color
}
let element = document.querySelector("body")
changeColor(element, "#bf8770")

//Practice 6 
function saveLocalStorage(user, data) {
    let object = JSON.stringify(data)
    localStorage.setItem(user, object)
}

saveLocalStorage("user", userDetail)

//Practice 7 
function getObject(key) {
    let obj = localStorage.getItem(key)
    obj = JSON.parse(obj)
    console.log(obj)
    return obj
}
getObject("user")

//Practice 8
function checkObject(obj) {
    for (const properties in obj) {
        localStorage.setItem(properties, obj[properties])
    }
    const newObj = {}
    for (const properties in obj) {
        newObj[prop] = localStorage.getItem(properties);
        console.log(newObj)
    }
    return newObj
}
checkObject(userDetail)






