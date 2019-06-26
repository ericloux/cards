let myPeople = [ {
    title: "a",
    name: "Aaron",
    bio: "ay",
    image: "",
    lifespan: {
        birth: "12/29/1992",
        death: "5/29/2080"
    }
},
{
    title: "b",
    name: "Bill",
    bio: "ayy",
    image: "",
    lifespan: {
        birth: "4/7/1936",
        death: "6/14/1974"
    }
},
{
    title: "c",
    name: "Charlie",
    bio: "ayyy",
    image: "",
    lifespan: {
        birth: "3/2/1794",
        death: "10/31/1800"
    }
},
{
    title: "d",
    name: "Dave",
    bio: "ayyyy",
    image: "",
    lifespan: {
        birth: "8/31/7843",
        death: "8/3/8140"
    }
},
{
    title: "e",
    name: "Eric",
    bio: "ayyyyy",
    image: "",
    lifespan: {
        birth: "11/07/1988",
        death: "indefinite"
    }
}];

let peopleContainer = document.getElementById("cardContainer");
let personString = "";

for (let i = 0; i < myPeople.length; i++) {
    personString += `
        <div id="cardID-${i}">
            <header class="nameTitle">
                <h2>${myPeople[i].title} </h2> 
                <h4>${myPeople[i].name}</h4>
            </header>
            <section class="bio">
                <div>
                    <p>${myPeople[i].bio} </p>
                    <img src = "${myPeople[i].image}" /"
                </div>
            </section>
            <footer class="footnote">
                <p>Lived from ${myPeople[i].lifespan.birth} to ${myPeople[i].lifespan.death} </p>
            </footer>
        
        </div>`;
    peopleContainer.innerHTML += personString;
}
