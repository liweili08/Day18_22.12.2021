async function fetchPeople(){
    const response = await fetch ('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    return (data && data.results) || []
}
/*
function hasState(status){
function isAlive(data){
return data.status==status;
}
}
*/
const hasState = status => data => data.status==status

/*
function mapToName(human){
return human.name;
}
*/
const mapToName = human =>human.name

/*
function createObjects(human){
return name: human.name, origin: human.origin;
}
*/
const createObjects = human =>({name: human.name, origin: human.origin})

async function mapPeople(func){
    return (await fetchPeople()).filter(hasState("Alive")).map(func)
}

function main(){
    mapPeople(mapToName).then(console.log)
    mapPeople(createObjects).then(console.log)
}
