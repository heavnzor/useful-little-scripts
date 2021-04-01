/*

Pour les besoins d'un test d'aptitude, vous devez créer un formulaire de saisie. Ce formulaire se décline en plusieurs étapes, sachant que l'utilisateur ne peut passer à l'étape suivante tant qu'il n'a pas répondu à la question précédente. Ce test comporte 2 questions :

    Combien font 3 x 8 ?

    Combien font 15 / 3 ?

Afin de réaliser cet exercice, vous devrez :

    Utiliser le code HTML fourni comme base de travail. Il n'y a pas besoin de modifier le code HTML.

    Au début du test, l'utilisateur n'a accès qu'à la première question.

    Lorsque l'utilisateur valide la première réponse, il ne doit plus pouvoir la modifier. L’événement lié au bouton 1 doit être supprimé.

    Le deuxième input et le bouton de validation apparaissent.

    La réponse de la première question devra être passée en paramètre de l'objet CustomEvent() et récupérée dans la fonction au click du bouton 2.

    Lorsque l'utilisateur appuie sur le deuxième bouton, une alerte s'affiche indiquant les résultats du test.

    Une fois le test terminé , l'événement lié au bouton 2 doit être supprimé.

L'utilisation de l'objet CustomEvent() est requise. En effet, ce n'est pas parce que le bouton et la question 1 sont cachés qu'il est impossible d'y accéder. Pour cela, il suffit d'ouvrir la console du navigateur et de modifier les propriétés CSS ou attributs des éléments concernés. La meilleure solution pour être sûr que l'utilisateur réponde dans l'ordre est de ne créer l’événement du bouton 2 qu’après avoir validé la question 1.

 */


const firstResult = 24;
const secondResult = 5;
const firstAnswer = document.getElementById('question1');
const submit1 = document.getElementById('valid1')
const secondAnswer = document.getElementById('question2');
const formulaire2 = document.getElementById('formulaire2')
let submit;

const showQuestion2 = () => {
  formulaire2.style.display = "block"
  submit = new CustomEvent('submit', { detail: { answerOne: firstAnswer.value } })
  firstAnswer.disabled = true;
  console.log(submit.detail.answerOne);
  submit1.removeEventListener('click', showQuestion2);
}

submit1.addEventListener('click', showQuestion2)

