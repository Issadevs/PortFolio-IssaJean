function afficherMessage(){
    
    console.log("hello");
    var nom = document.forms.monformulaire.elements.field1.value;
    var prenom = document.forms.monformulaire.elements.field2.value;
    var mail = document.forms.monformulaire.elements.field3.value;
    var message = document.forms.monformulaire.elements.field5.value;
    
    var monmessage = "Bonjour " + prenom + " " + nom + ", "+ "voici votre message : " + message + ". Merci.";
    alert("Votre message a bien été envoyé ! \n Vous receverez une réponse sur : " + mail);
    var newElement = document.createElement('p');
    newElement.textContent = monmessage;
    newElement.style.color = "red" ;
    document.getElementById('reponse').appendChild(newElement);

}