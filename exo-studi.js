/*
À présent que nous avons créé le bouton de connexion de notre site e-commerce, nous allons créer une nouvelle page en gardant le menu de navigation HTML de l’exercice 1. Cette page contiendra deux boutons permettant d'ajouter ou d'enlever un article.

    Ajoutez un bouton Ajouter un article et un bouton Supprimer un article.

    Le bouton Ajouter aura un fond vert et le bouton Supprimer, un fond rouge.

    S'il y a 0 article ajouté, le panier ne sera pas visible. S'il y a au moins 1 article ajouté, le panier sera visible. Le nombre d'articles sera toujours visible.

    Au clic sur le panier, on supprimera les événements d'ajout et de suppression.
 */


const addArticle = document.getElementById('addArticle');
const remArticle = document.getElementById('remArticle');
let i = document.getElementById('i')
let basket = document.getElementById('basket')

console.log(i)
console.log(basket)

i.textContent = 0
basket.style.display = "none"



const moreArticle = (m) => {
i.textContent = Number(i.textContent) + 1
if(i.textContent <= 0){
  i.textContent = 0
  basket.style.display = "none"
}else{
  basket.style.display = "block"
}
}
const lessArticle = (l) => {
 i.textContent = Number(i.textContent) - 1
 if(i.textContent <= 0){
  i.textContent = 0
  basket.style.display = "none"
}else{
  basket.style.display = "block"
}
}

const removeListeners = () => {
  addArticle.removeEventListener('click', moreArticle)
  remArticle.removeEventListener('click', lessArticle)
  console.log('removed')
  }


basket.addEventListener('click',removeListeners)

addArticle.addEventListener('click', moreArticle)
remArticle.addEventListener('click', lessArticle)



