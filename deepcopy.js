const deepCopyFunction = (inObject) => {

  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {

    return inObject // Retourne la valeur si inObject n'est pas un objet

  }

  // Création d'un tableau ou d'un objet qui contiendra notre valeur

  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {

    value = inObject[key]

    // On effectue une deep-copy de tous les objets imbriqués, ainsi que des tableaux

    outObject[key] = deepCopyFunction(value)

  }

  return outObject

}

let users = [{ name: 'Nicolas'}, { name: 'Romain' }, { name: 'Laure' }]

let adminUsers = deepCopyFunction(users)

users[0].name = 'Pirate'

console.log(users) // Affiche [{name: "Pirate"}, {name: "Romain"}, {name: "Laure"}]

console.log(adminUsers) // Affiche [{name: "Nicolas"}, {name: "Romain"}, {name: "Laure"}]
