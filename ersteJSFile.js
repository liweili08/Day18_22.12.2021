console.log("aaa");


let myValue=1;
console.log(typeof myValue);
console.log("aaa");

function addFkt(x,y){
    return x+y;
}
let addValue=addFkt(2,5);
document.getElementById("add").innerHTML=addValue;
/*
let addValue = (x,y) =>x+y
 */

function multiplyFkt(x,y){
    return x*y;
}
let multiplyValue=multiplyFkt(2,5);
document.getElementById("multiply").innerHTML=multiplyValue;
/*
let multiplyValue = (x,y) => x*y
 */


function factorialFkt(x){
    if (x===0){
        return 1;
    }else {
        let fac=1;
        for (let i=1;i<=x ;i++){
            fac = fac * i;
        }
        return fac;
    }
}
let factorialValue=factorialFkt(5);
document.getElementById("factorial").innerHTML=factorialValue;

/*
let factorialValue = (a,b) =>{
if(b==0) return 1
a*(factorialValue (a,b-1)|| 1)
}
 */

//************  Aufgabe 2 ************

function Student(name, id) {
    this.name = name;
    this.id = id;
}
const studi1 = new Student("Anna", "001");
document.getElementById("studentObject").innerHTML=studi1.name;

const studi2 = new Student("Robert","002");
const studi3 = new Student("Hans","003");
//var studentArray = new Array(studi3, studi1, studi2);
const students = [studi3, studi1, studi2];
document.getElementById("studiArray").innerHTML=students[0].id;

console.log(students);
console.log(students[1].name);
console.log(typeof(students));


//Aufgabe 2.3
function reName(Array,oldName, newName) {
    for (let i=0; i< Array.length;i++) {
        if (Array[i].name === oldName) {
            Array[i].name = newName;
            //   console.log(Array[i].name);
        }
    }
    return Array;
}
//var newArray = reName("Anna","Anne");
console.log(typeof(reName(students,"Anna","Anne")));
console.log(reName(students,"Anna","Anne"));

//Aufgabe 2.4
function reName2(Array,oldName, newName){
    const studi4 = new Student(newName,"004");
    for (let i=0; i< Array.length;i++) {
        if (Array[i].name === oldName) {
            Array.splice(i,1,studi4);
            //   console.log(Array[i].name);
        }
    }
    return Array;
}
console.log(reName2(students,"Anna","Anne"));

//*************** Aufgabe 3 ***************
const Doopidoo = {
    "id": 433,
    "name": "Doopidoo",
    "status": "Alive",
    "species": "Animal",
    "type": "Doopidoo",
    "gender": "unknown",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "unknown",
        "url": ""
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/433.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/10"],
    "url": "https://rickandmortyapi.com/api/character/433",
    "created": "2018-04-16T22:05:05.745Z"
};

const Rick_Sanchez = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/50", "https://rickandmortyapi.com/api/episode/51"],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}

const Morty_Smith = {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31", "https://rickandmortyapi.com/api/episode/32", "https://rickandmortyapi.com/api/episode/33", "https://rickandmortyapi.com/api/episode/34", "https://rickandmortyapi.com/api/episode/35", "https://rickandmortyapi.com/api/episode/36", "https://rickandmortyapi.com/api/episode/37", "https://rickandmortyapi.com/api/episode/38", "https://rickandmortyapi.com/api/episode/39", "https://rickandmortyapi.com/api/episode/40", "https://rickandmortyapi.com/api/episode/41", "https://rickandmortyapi.com/api/episode/42", "https://rickandmortyapi.com/api/episode/43", "https://rickandmortyapi.com/api/episode/44", "https://rickandmortyapi.com/api/episode/45", "https://rickandmortyapi.com/api/episode/46", "https://rickandmortyapi.com/api/episode/47", "https://rickandmortyapi.com/api/episode/48", "https://rickandmortyapi.com/api/episode/49", "https://rickandmortyapi.com/api/episode/50", "https://rickandmortyapi.com/api/episode/51"],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
}

const array1 = [Doopidoo, Rick_Sanchez, Morty_Smith];

//console.log(array1);
function aliveHumanList(Array) {
    var aliveHumanList = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].status === "Alive" && Array[i].species === "Human") {
            aliveHumanList.push(Array[i]);
            // console.log( Array[i].name);
        }
    }
    return aliveHumanList;
}
console.log(aliveHumanList(array1));

console.log("hahahahah");

function aliveHumanName(Array) {
    var nameAliveHuman = [];
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].status === "Alive" && Array[i].species === "Human") {
            nameAliveHuman.push(Array[i].name);
            // console.log( Array[i].name);
        }
    }
    return nameAliveHuman;
}
console.log(aliveHumanName(array1));

console.log("lalalala");

function objectList(array) {
    var formList =[];
    for (let i = 0; i < array.length; i++) {
        let mumber = {
            "name": array[i].name,
            "origin": array[i].origin
        }
        formList.push(mumber);
    }
    return formList;
}
console.log(objectList(array1));


