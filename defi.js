
function askUsername() {
    return promise1 = new Promise((resolve, reject) => {
        let username = prompt('Username ?');
        username !== "admin" ? reject(console.log("Vous n'avez rien à faire ici")) : resolve(console.log("premiere promesse tenue."));
    })
}

function askMathCalcul() {

    return promise2 = new Promise((resolve, reject) => {
        let result = '42';
        let answer = prompt("Combien font 6 x 7 ?");
        answer === result ? resolve(console.log("deuxième promesse tenue")) : reject("Savez-vous au moins compter?")

    })
}


function resolveAll() {
    Promise.all([askUsername(), askMathCalcul()])
        .then((succeed) => {
            console.log("champioonnn du monnnde!!!");
            return searchAddress(q);

        })
        .catch((error) => {
            console.error(error)

        })
        .finally(() => {
            console.info("On n'est pas bien ? paisibles, à la fraiche, décontractés du gland. ... et on bandera quand on aura envie de bander")
        })
}


function fillResults(data) {

    let list = document.getElementById('results')

    list.innerHTML = ''

    if (undefined !== data.features) {

        data.features.forEach(function (element) {

            let li = document.createElement('li')

            li.appendChild(document.createTextNode(element.properties.label))

            list.appendChild(li)

        });

    }

}


function manageResearch() {
    resolveAll();
    var q = document.getElementById('address').value;
    let data;

    function searchAddress(q) {

        const url = new URL('https://api-adresse.data.gouv.fr/search/?q=' + q);
        console.log(url.href)
        return url.href;

    }


    fetch(searchAddress(q))
        .then((response) => {
            console.log(response.ok))

}}