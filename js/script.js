/*function bienvenue(){
    alert("Hello world !");
    /*setTimeout(bienvenue,2000)
    setInterval(bienvenue,5000)
}
setInterval(bienvenue,5000)*/

var minuscule = "abcdefghijklmnopqrstuvwxyz";
var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chiffre = "0123456789";
var carspecial = "%!&*^()#$:";

function hasCharacter(string1, string2) {
    for (var i = 0; i < string2.length; i++) {if (string1.includes(string2[i])) {return true;}}
    return false;
}

function verify(password, monformulaire) {
    var tab = [0, 0, 0, 0];
    if (monformulaire.elements["minuscule"].checked) {tab[0] = 1;}
    if (monformulaire.elements["majuscule"].checked) {tab[1] = 1;}
    if (monformulaire.elements["chiffre"].checked) {tab[2] = 1;}
    if (monformulaire.elements["symbole"].checked) {tab[3] = 1;}

    for (var i = 0; i < 4; i++) {
        switch (i) {
            case 0: if (tab[i] === 1) {if (hasCharacter(password, minuscule) === false) return false}
                break;
            case 1: if (tab[i] === 1) {if (hasCharacter(password, majuscule) === false) return false}
                break;
            case 2: if (tab[i] === 1) {if (hasCharacter(password, chiffre) === false) return false}
                break;
            case 3: if (tab[i] === 1) {if (hasCharacter(password, carspecial) === false) return false}
                break;
        }
    }
    return true;
}

function assertRequiredField(monformulaire){
    return (monformulaire.elements["minuscule"].checked || monformulaire.elements["majuscule"].checked || monformulaire.elements["chiffre"].checked || monformulaire.elements["symbole"].checked) && (monformulaire.elements["nombrecar"].value !== "" && monformulaire.elements["date"].value !== "dd/mm/yyyy" && monformulaire.elements["categorie"].value !== "" && monformulaire.elements["categorie"].value !== "" && monformulaire.elements["siteapp"].value !== "");
}

function generer(){
    var monformulaire = document.forms.ajoutPWD;

    if (assertRequiredField(monformulaire)) {
        var password = "";
        var listecar= "";

        if (monformulaire.elements["minuscule"].checked){
            listecar+=minuscule;
        }
        if (monformulaire.elements["majuscule"].checked){
            listecar+=majuscule;
        }
        if (monformulaire.elements["chiffre"].checked){
            listecar+=chiffre;
        }
        if (monformulaire.elements["symbole"].checked){
            listecar+=carspecial;
        }

        while(verify(password,monformulaire)===false){
            password="";
            console.log(password,verify(password,monformulaire));
            for (var i=1; i <= monformulaire.elements["nombrecar"].value;i++){
                var randomNumber = Math.floor(Math.random()*listecar.length);
                password+=listecar.substring(randomNumber,randomNumber+1);

            }
        }

        /*console.log(monformulaire.nombrecar.value);*/

        var newLine = document.createElement("tr");

        /*var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");
        //var col5 = document.createElement("td");

        col1.textContent="8";
        col2.textContent="08/01/2003";
        col3.textContent="site";
        col4.textContent="netflix";
        //col5.textContent="5(_ofsd)fgv";*/

        var nbcar = document.createElement("td");
        var date = document.createElement("td");
        var catego = document.createElement("td");
        var siteappli = document.createElement("td");
        var finalpassword = document.createElement("td");

        nbcar.textContent = monformulaire.elements["nombrecar"].value;
        date.textContent = monformulaire.elements["date"].value;
        catego.textContent = monformulaire.elements["categorie"].value;
        siteappli.textContent = monformulaire.elements["siteapp"].value;
        finalpassword.textContent = password;

        nbcar.classList.add("c1");
        date.classList.add("c2");
        catego.classList.add("c3");
        siteappli.classList.add("c4");
        finalpassword.classList.add("c5");

        newLine.append(nbcar, date, catego, siteappli, finalpassword);

        var pwdTab = document.getElementById("montab");

        pwdTab.appendChild(newLine);
    }
    else {alert("Champs incomplets. Veuillez remplir les champs et cocher l'une des cases.");}
}