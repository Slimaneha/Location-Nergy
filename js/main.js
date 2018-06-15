
var selectElmt = document.getElementById("form");
var selectElmtDeux =document.getElementById("formDeux")
var voiture1 = "BF-400"

var voiture2 = "Issy"




var v1 = {
    non: "BF-400",
    p1 :"8 000$",
    p2 :"15 000$",
    disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",

}



var v2 = {
    non: "Issy",
    p1 :"3 000$",
    p2 :"6 000$",

    disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}
var v3 = {
    non: "TAILGATER",
    p1 :"8 000$",
    p2 :"15 000$",
    disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}



var v4 = {

        non: "Shafter-V12",
        p1 :"13 000$",
        p2 :"22 000$",
        disponibilité:"Disponible",
        description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}

    var v5 = {
    non: "VACCA",
    p1 :"17 000",
    p2 :"25 000$",
    disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}

   var v6 = {
    non: "DUBSTA 6x6",
    p1 :"12 000$",
    p2 :"22 000$",
     disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}

    var v7 = {
    non: "FELON-GT",
    p1 :"3 000$",
    p2 :"5 000$",
    disponibilité:"Disponible",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas ",


}

v8 = {
        non: "RUMPO",
        p1 : "13 000 $",
        p2: "22 000" ,
        description : ""
}


    //Heur


    time3 = "3 Heure"
    time6 = "6 Heure"


    //affiche heur



    document.getElementById("time3").innerHTML=time3
    document.getElementById("time6").innerHTML=time6

choixHeur = ""
choix = ""





document.getElementById("voiture1").innerHTML=v1["non"]
document.getElementById("voiture2").innerHTML=v2["non"]
document.getElementById("voiture3").innerHTML=v3["non"]
document.getElementById("voiture4").innerHTML=v4["non"]
document.getElementById("voiture5").innerHTML=v5["non"]
document.getElementById("voiture6").innerHTML=v6["non"]
document.getElementById("voiture7").innerHTML=v7["non"]
document.getElementById("voiture8").innerHTML=v8["non"]




function retour () {

            document.getElementById("devis").style.display="none"
            document.getElementById("recherche").style.display="block"


}


var tour = 0
var depot = '0' ;


function choixheur (){
    var     choixHeur = textselectionneDeux = selectElmtDeux.options[selectElmtDeux.selectedIndex].text
    var   choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text;

    if (choixHeur === "3 Heure" && choix === v4["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v4["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v4["p1"]
        document.getElementById("v4").style.display="block"


        document.getElementById("total").innerHTML= "6000$" ;
        tour ++


    }





    else if (choixHeur === "6 Heure" && choix === v4["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v4["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v4["p6"]
        document.getElementById("v4").style.display="block"

        document.getElementById("total").innerHTML= "21 000$" ;

        tour ++

    }

    // Fin de là permier voiture !

    // Debut de là seconde




    else if (choixHeur === "3 Heure" && choix === v1["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v1["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v1["p1"]
        document.getElementById("v1").style.display="block"
        document.getElementById("total").innerHTML= "9 000$" ;
        tour ++


    }



    else if (choixHeur === "6 Heure" && choix === v1["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v1["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v1["p2"]
        document.getElementById("v1").style.display="block"

        document.getElementById("total").innerHTML= "16 000$" ;

        tour ++

    }



    // fin voiture 2

    // Debut voiture 3




    else if (choixHeur === "3 Heure" && choix === v2["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v2["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v2["p1"]
        document.getElementById("v2").style.display="block"

        document.getElementById("total").innerHTML= "9 000$" ;
        tour ++


    }



    else if (choixHeur === "6 Heure" && choix === v2["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v2["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v2["p2"]
        document.getElementById("v2").style.display="block"

        document.getElementById("total").innerHTML= "16 000$" ;

        tour ++

    }



    // fin de là 3 éme voiture
    // Début de là 4





    else if (choixHeur === "3 Heure" && choix === v3["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v3["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v3["p1"]
        document.getElementById("v3").style.display="block"

        document.getElementById("total").innerHTML= "9 000$" ;
        tour ++


    }


    else if (choixHeur === "6 Heure" && choix === v3["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v3["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v3["p2"]
        document.getElementById("v3").style.display="block"

        document.getElementById("total").innerHTML= "16 000$" ;

        tour ++

    }








    else if (choixHeur === "3 Heure" && choix === v5["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v5["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v5["p1"]
        document.getElementById("v5").style.display="block"

        document.getElementById("total").innerHTML= "17 000$" ;
        tour ++


    }



    else if (choixHeur === "6 Heure" && choix === v5["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v5["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v5["p2"]
        document.getElementById("v5").style.display="block"

        document.getElementById("total").innerHTML= "26 000$" ;

        tour ++

    }






    else if (choixHeur === "3 Heure" && choix === v6["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v6["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v6["p1"]
        document.getElementById("v6").style.display="block"

        document.getElementById("total").innerHTML= "16 000$" ;
        tour ++


    }



    else if (choixHeur === "6 Heure" && choix === v6["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v6["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v6["p2"]
        document.getElementById("v6").style.display="block"

        document.getElementById("total").innerHTML= "23 000$" ;

        tour ++

    }


    else if (choixHeur === "3 Heure" && choix === v7["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v7["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v7["p1"]
        document.getElementById("v7").style.display="block"
        document.getElementById("total").innerHTML= "4 000$" ;
        tour ++

    }

    else if (choixHeur === "6 Heure" && choix === v7["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v7["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v7["p2"]
        document.getElementById("v7").style.display="block"
        document.getElementById("total").innerHTML= "4 000$" ;
        tour ++

    }


    else if (choixHeur === "3 Heure" && choix === v8["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v8["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v8["p1"]
        document.getElementById("v8").style.display="block"

        document.getElementById("total").innerHTML= "21 000$" ;

        tour ++

    }
    else if (choixHeur === "6 Heure" && choix === v8["non"]){

        document.getElementById("buttonDeux").style.display="none"
        document.getElementById("rechercheDeux").style.display="none"
        document.getElementById("devis").style.display="block"
        document.getElementById("voitureName").innerHTML=v8["non"]
        document.getElementById("temps").innerHTML=choixHeur;
        document.getElementById("prix").innerHTML=v4["p2"]
        document.getElementById("v8").style.display="block"

        document.getElementById("total").innerHTML= "21 000$" ;

        tour ++

    }













  }

function chois (){
    var   choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text;

    document.getElementById("recherche").style.display="none"
    document.getElementById("rechercheDeux").style.display="block"

    if(tour => 1 ){

        document.getElementById("rechercheDeux")
        document.getElementById("formDeux").style.display="block";
        document.getElementById("buttonDeux").style.display="block";
        document.getElementById("v1").style.display="none";
        document.getElementById("v2").style.display="none";
        document.getElementById("v3").style.display="none";
        document.getElementById("v4").style.display="none";
        document.getElementById("v5").style.display="none";
        document.getElementById("v6").style.display="none";
        document.getElementById("v7").style.display="none";
        document.getElementById("v8").style.display="none"


    }





}








function prixUn ()
{

    document.getElementById("prixUn").style.display="block"

}


function back1   ()
{
    document.getElementById("prixUn").style.display="none"

}




function prix2 () {
    document.getElementById("prix2").style.display="block"

}

function back2 (){
    document.getElementById("prix2").style.display="none"
}



function prix3 () {
    document.getElementById("prix3").style.display="block"

}

function back3 (){
    document.getElementById("prix3").style.display="none"

}


function prix4 () {
    document.getElementById("prix4").style.display="block"

}

function back4 (){
    document.getElementById("prix4").style.display="none"

}

function prix5 () {
    document.getElementById("prix5").style.display="block"

}

function back5 (){
    document.getElementById("prix5").style.display="none"

}

function prix6 () {
    document.getElementById("prix6").style.display="block"

}

function back6 (){
    document.getElementById("prix6").style.display="none"

}

function prix7 () {
    document.getElementById("prix7").style.display="block"

}

function back7 (){
    document.getElementById("prix7").style.display="none"

}

function prix8 () {
    document.getElementById("prix8").style.display="block"

}

function back8 (){
    document.getElementById("prix8").style.display="none"

}

function taxi(){
    document.getElementById("location").style.opacity="0.5"
    document.getElementById("headButton").style.display="block"


 }

 function taxiBack(){
    document.getElementById("location").style.opacity="1"
    document.getElementById("headButton").style.display="none"



 }


 function locationUn (){
     document.getElementById("taxi").style.opacity="0.5"
     document.getElementById("headButton2").style.display="block"

 }

 function location2  () {
     document.getElementById("taxi").style.opacity="1"
     document.getElementById("headButton2").style.display="none"

 }



//Fuction post pages Wl


carousel = document.getElementById("carouselExampleIndicators")
  page1 = document.getElementById("bienvenue")
  p1p2 = document.getElementById('partieDeux')
  pagelocation = document.getElementById("wlDeux")
  pagetaxi = document.getElementById("TaxiUn")

function TaxiUn () {

    pagetaxi.style.display="block"
    pagelocation.style.display="none"
    page1.style.display="none"
    p1p2.style.display="none"


}

function LocationUn () {

   pagelocation.style.display="block"
    document.getElementById("rebotDeux").style.display="flex"
  //  pagetaxi.style.display="none"



    page1.style.display="none"
    p1p2.style.display="none"

}



var selectElmtTaxiUn = document.getElementById("formTaxiUn");
var selectElmtTaxi5= document.getElementById("formTaxi5")

//Variable Choix

var choixTaxiDépart = "Ville"
var choixTaxiDépartDeux =  "Hors Ville"
départ = 0 ;
klm = 0;
place = 0 ;

tourTaxi = 0 ;




function CalculeUnTaxi (){

    choixTaxiVille = textselectionne = selectElmtTaxiUn.options[selectElmtTaxiUn.selectedIndex].text;
    passager= textselectionne = selectElmtTaxi5.options[selectElmtTaxi5.selectedIndex].value;
    klm = document.getElementById("FormTaxiDeux").value
    formTaxi =document.getElementById("informationUn")
    facture = document.getElementById("affiTaxi")
    klmCheck = klm.length





    if (choixTaxiVille ===  "Ville"  && klm > 0  && passager === "1" ) {

        départ = 800
        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
         document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







 }



    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "1"  ) {
        départ = 1200

        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }

    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "2" ) {
        départ = 1400

        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }



    else if (choixTaxiVille ===  "Ville" && klm > 0 && passager === "2" ) {
        départ = 1000

        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }


    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "3" ) {
        départ = 1600

        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }


    else if (choixTaxiVille ===  "Ville" && klm > 0 && passager === "3" ) {
        départ = 1200

        total = klm * 300 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;






    }




}



function backTaxi () {

    facture.style.display="none"
    formTaxi.style.display="block"
    klm =0;
    document.getElementById("retourDeux").style.display="none"
         document.getElementById("formTaxi4").style.display="block"

}







formchiffre = document.getElementById("cardDrh")



function drh() {
    testDrh= document.getElementById("formDrh").value

    if (testDrh < 3500) {

        document.getElementById("palierUn").style.display="block"
        document.getElementById("chiffre1").innerHTML=testDrh+"$"
        formchiffre.style.display="none"
        document.getElementById("totale")
    }

    else if (testDrh >3500 && testDrh <99000) {
        document.getElementById("palierDeux").style.display="block"
        document.getElementById("chiffre2").innerHTML=testDrh+"$"
        formchiffre.style.display="none"
        document.getElementById("totale")
        totalDrh=testDrh/2
        document.getElementById("primeDeux").innerHTML=totalDrh+"$"




    }

    else if (testDrh >100000 && testDrh <299998) {
        document.getElementById("palier3").style.display="block"
        document.getElementById("chiffre3").innerHTML=testDrh+"$"
        formchiffre.style.display="none"
        document.getElementById("totale")
        totalDrh=testDrh*60/100 ;
        document.getElementById('prime3').innerHTML=totalDrh+"$"






    }
    else if (testDrh >299999 ) {
        document.getElementById("palier4").style.display="block"
        document.getElementById("chiffre4").innerHTML=testDrh+"$"
        formchiffre.style.display="none"
        document.getElementById("totale")
        totalDrh=testDrh*70/100 ;
        document.getElementById('prime4').innerHTML=totalDrh+"$"



    }


}

function drhRetour () {
    document.getElementById("palierUn").style.display="none"
    document.getElementById("palierDeux").style.display="none"
    document.getElementById("palier3").style.display="none"
    document.getElementById("palier4").style.display="none"
    testDrh = 0 ;
    document.getElementById("cardDrh").style.display="block"


}









 // Var nom nav barre





