

// On ajoute à chaque objet une méthode qui retournera l'alerte

const workers = [

    { name: 'Benjamin', age: 25, nbHour: 35, alerte: () => { return `employé: ${this.name}, heures: ${this.nbHour}` } },
  
    { name: 'Luc', age: 45, nbHour: 34, alerte: () => { return `employé: ${this.name}, heures: ${this.nbHour}` } },
  
    { name: 'Marie', age: 23, nbHour: 35, alerte: () => { return `employé: ${this.name}, heures: ${this.nbHour}` } },
  
    { name: 'Jeanne', age: 36, nbHour: 30, alerte: () => { return `employé: ${this.name}, heures: ${this.nbHour}` } },
  
    { name: 'Jean', age: 37, nbHour: 35, alerte: () => { return `employé: ${this.name}, heures: ${this.nbHour}` } }
  
  ]
  
  console.log(workers.length)
  /* Créez un code qui trie les employés qui n'auront pas effectué les 35 heures et qui les stocke dans un nouveau tableau. Utilisez la propriété alert créée précédemment pour ajouter chaque employé qui n'aura pas fait ses 35 h dans une variable alerte. Cette variable sera utilisée dans une alerte lorsque la totalité du code aura été exécuté. L'alerte sera de ce format : */
  const workerHasNotHour = [];
  let alerte = ""
  for (let i = 0; i < workers.length; i++) {
  
    if (workers[i].nbHour !== 35) {
  
      alerte += `${workers[i].alerte()} \n`;
  
      // On ajoute dans le tableau l'employé qui n'a pas fait ses 35h en faisant attention à supprimer la référence
  
      workerHasNotHour.push(JSON.parse(JSON.stringify(workers[i])));
  
      // On met à jour le nombre d'heures dans le tableau général
  
      workers[i].nbHour = 35;
  
    }
  
  }
  
  console.log(workerHasNotHour);
  
  console.log(workers);
  
  alert(alerte);
  
  