var employer = {
    non: "Aarabaji Karim",
    chiffre :"150000",
    poste:"Stagiaire",
    voiture :"NERGY01",
    prime :"",
    PV : "Pas de PV",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy01",

}

var employer2 = {
    non: "Belluci Antonio",
    chiffre :"1",
    poste:"Chauffeur privé",
    voiture :"NERGY11",
    prime :"0",
    PV : "Aucun PV",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy11",

}
var employer3 = {
    non: "Blacke Jason",
    chiffre :"0",
    poste:"Stagiaire",
    voiture :"NERGY04",
    prime :"",
    PV : "Aucun PV",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy04",

}
var employer4 = {
    non: "Da Silva",
    chiffre :"",
    poste:"Chauffeur",
    voiture :"NERGY02",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy02",

}
var employer5 = {
    non: "Gutierrez Bryan",
    chiffre :"3993",
    poste:"Stagiaire",
    voiture :"NERGY03",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy03",

}
var employer6 = {
    non: "Heck John",
    chiffre :"",
    poste:"Chauffeur exemplaire",
    voiture :"NERGY14",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy14",

}
var employer7 = {
    non: "Hiwuchong Shaokyo",
    chiffre :"",
    poste:"Stagiaire",
    voiture :"NERGY05",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy05",

}
var employer8 = {
    non: "Maloki Francky",
    chiffre :"",
    poste:"Stagiaire",
    voiture :"NERGY06",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy06",

}

var employer9 = {
    non: "Monteiro Conor",
    chiffre :"",
    poste:"Stagiaire",
    voiture :"NERGY07",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy07",

}
var employer10 = {
    non: "Riterz Brake",
    chiffre :"",
    poste:"Stagiaire",
    voiture :"NERGY08",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy08",

}

var employer11 = {
    non: "scaletti vito",
    chiffre :"",
    poste:"Manager",
    voiture :"NERGY12",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy12",

}

var employer12 = {
    non: "Wesley Billy",
    chiffre :"",
    poste:"Chauffeur privée",
    voiture :"Aucune !",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"staff",

}

var employer13 = {
    non: "White Michael",
    chiffre :"",
    poste:"Chauffeur privée",
    voiture :"NERGY13",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy13",

}

var employer14 = {
    non: "Wick Dallas",
    chiffre :"30681",
    poste:"Stagiaire",
    voiture :"NERGY10",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"nergy10",

}

var employer15 = {
    non: "Slimane Hassani",
    chiffre :"",
    poste:"BOOSE    ",
    voiture :"SLIMANE",
    prime :"",
    PV : "",
    PVUn : "",
    PVDeux : "" ,
    mdp :"Slimane",

}



// ====================== Attention  Ne Rien changer en dessous  de la ligne ===========================


user = ""
userMdp = ""


function pageperso () {

    maj = "19/06/2018 a 20h00"

    user= document.getElementById("user").value
    userMdp= document.getElementById("userMdp").value




    formLogin = document.getElementById("login")
    carteperso = document.getElementById("Cartperso")
    affichenom = document.getElementById("nomEmployé")
    affichePoste = document.getElementById("poste")
    affichevoiture = document.getElementById("plaque")
    afficheChiffre = document.getElementById("chiffre20")
    afficheflashUn= document.getElementById("pvUn")
    afficheDateMaj = document.getElementById("maj")
    afficheprime = document.getElementById("totalUn")


   //  barre de progresstion


   bad =  document.getElementById("bad")
    bofUn =document.getElementById("bof")
    bofDeux = document.getElementById("bofUn")
    GG = document.getElementById("ggcard")


    if (user === employer["non"] && userMdp === employer["mdp"]){

        carteperso.style.display="block"
        formLogin.style.display="none"
        affichenom.innerHTML=employer["non"]
        affichePoste.innerHTML=employer["poste"]
        affichevoiture.innerHTML=employer["voiture"]
        afficheChiffre.innerHTML=employer["chiffre"]
        afficheDateMaj.innerHTML=maj


        if (employer["chiffre"]< 35000){
            afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

        }
       else if (employer["chiffre"] > 35000 && employer["chiffre"]<99000 ){

            primegg = employer["chiffre"]/2
            afficheprime.innerHTML=primegg

        }
       else if (employer["chiffre"] > 100000 && employer["chiffre"]<299998 ){

            primegg = employer["chiffre"]*60/100
            afficheprime.innerHTML=primegg


        }
        else if (employer["chiffre"]> 299999){
            primegg = employer["chiffre"]*70/100
            afficheprime.innerHTML=primegg


        }





    }

 // Employer 2




else  if (user === employer2["non"] && userMdp === employer2["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer2["non"]
    affichePoste.innerHTML=employer2["poste"]
    affichevoiture.innerHTML=employer2["voiture"]
    afficheChiffre.innerHTML=employer2["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer2["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer2["chiffre"] > 35000 && employer2["chiffre"]<99000 ){

        primegg = employer2["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer2["chiffre"] > 100000 && employer2["chiffre"]<299998 ){

        primegg = employer2["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer2["chiffre"]> 299999){
        primegg = employer2["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}



if (user === employer3["non"] && userMdp === employer3["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer3["non"]
    affichePoste.innerHTML=employer3["poste"]
    affichevoiture.innerHTML=employer3["voiture"]
    afficheChiffre.innerHTML=employer3["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer3["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer3["chiffre"] > 35000 && employer3["chiffre"]<99000 ){

        primegg = employer3["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer3["chiffre"] > 100000 && employer3["chiffre"]<299998 ){

        primegg = employer3["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer3["chiffre"]> 299999){
        primegg = employer3["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer4["non"] && userMdp === employer4["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer4["non"]
    affichePoste.innerHTML=employer4["poste"]
    affichevoiture.innerHTML=employer4["voiture"]
    afficheChiffre.innerHTML=employer4["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer4["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer4["chiffre"] > 35000 && employer4["chiffre"]<99000 ){

        primegg = employer4["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer4["chiffre"] > 100000 && employer4["chiffre"]<299998 ){

        primegg = employer4["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer4["chiffre"]> 299999){
        primegg = employer4["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer5["non"] && userMdp === employer5["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer5["non"]
    affichePoste.innerHTML=employer5["poste"]
    affichevoiture.innerHTML=employer5["voiture"]
    afficheChiffre.innerHTML=employer5["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer5["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer5["chiffre"] > 35000 && employer5["chiffre"]<99000 ){

        primegg = employer5["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer5["chiffre"] > 100000 && employer5["chiffre"]<299998 ){

        primegg = employer5["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer5["chiffre"]> 299999){
        primegg = employer5["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}




if (user === employer6["non"] && userMdp === employer6["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer6["non"]
    affichePoste.innerHTML=employer6["poste"]
    affichevoiture.innerHTML=employer6["voiture"]
    afficheChiffre.innerHTML=employer6["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer6["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer6["chiffre"] > 35000 && employer6["chiffre"]<99000 ){

        primegg = employer6["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer6["chiffre"] > 100000 && employer6["chiffre"]<299998 ){

        primegg = employer6["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer6["chiffre"]> 299999){
        primegg = employer6["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}
if (user === employer7["non"] && userMdp === employer7["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer7["non"]
    affichePoste.innerHTML=employer7["poste"]
    affichevoiture.innerHTML=employer7["voiture"]
    afficheChiffre.innerHTML=employer7["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer7["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer7["chiffre"] > 35000 && employer7["chiffre"]<99000 ){

        primegg = employer7["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer7["chiffre"] > 100000 && employer7["chiffre"]<299998 ){

        primegg = employer7["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer7["chiffre"]> 299999){
        primegg = employer7["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer8["non"] && userMdp === employer8["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer8["non"]
    affichePoste.innerHTML=employer8["poste"]
    affichevoiture.innerHTML=employer8["voiture"]
    afficheChiffre.innerHTML=employer8["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer8["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer8["chiffre"] > 35000 && employer8["chiffre"]<99000 ){

        primegg = employer8["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer8["chiffre"] > 100000 && employer8["chiffre"]<299998 ){

        primegg = employer8["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer8["chiffre"]> 299999){
        primegg = employer8["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer9["non"] && userMdp === employer9["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer9["non"]
    affichePoste.innerHTML=employer9["poste"]
    affichevoiture.innerHTML=employer9["voiture"]
    afficheChiffre.innerHTML=employer9["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer9["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer9["chiffre"] > 35000 && employer9["chiffre"]<99000 ){

        primegg = employer9["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer9["chiffre"] > 100000 && employer9["chiffre"]<299998 ){

        primegg = employer9["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer9["chiffre"]> 299999){
        primegg = employer9["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}



if (user === employer10["non"] && userMdp === employer10["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer10["non"]
    affichePoste.innerHTML=employer10["poste"]
    affichevoiture.innerHTML=employer10["voiture"]
    afficheChiffre.innerHTML=employer10["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer10["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer10["chiffre"] > 35000 && employer10["chiffre"]<99000 ){

        primegg = employer10["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer10["chiffre"] > 100000 && employer10["chiffre"]<299998 ){

        primegg = employer10["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer10["chiffre"]> 299999){
        primegg = employer10["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}


if (user === employer11["non"] && userMdp === employer11["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer11["non"]
    affichePoste.innerHTML=employer11["poste"]
    affichevoiture.innerHTML=employer11["voiture"]
    afficheChiffre.innerHTML=employer11["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer11["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer11["chiffre"] > 35000 && employer11["chiffre"]<99000 ){

        primegg = employer11["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer11["chiffre"] > 100000 && employer11["chiffre"]<299998 ){

        primegg = employer11["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer11["chiffre"]> 299999){
        primegg = employer11["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer11["non"] && userMdp === employer11["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer11["non"]
    affichePoste.innerHTML=employer11["poste"]
    affichevoiture.innerHTML=employer11["voiture"]
    afficheChiffre.innerHTML=employer11["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer11["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer11["chiffre"] > 35000 && employer11["chiffre"]<99000 ){

        primegg = employer11["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer11["chiffre"] > 100000 && employer11["chiffre"]<299998 ){

        primegg = employer11["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer11["chiffre"]> 299999){
        primegg = employer11["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}



if (user === employer12["non"] && userMdp === employer12["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer12["non"]
    affichePoste.innerHTML=employer12["poste"]
    affichevoiture.innerHTML=employer12["voiture"]
    afficheChiffre.innerHTML=employer12["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer12["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer12["chiffre"] > 35000 && employer12["chiffre"]<99000 ){

        primegg = employer12["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer12["chiffre"] > 100000 && employer12["chiffre"]<299998 ){

        primegg = employer12["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer12["chiffre"]> 299999){
        primegg = employer12["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer13["non"] && userMdp === employer13["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer13["non"]
    affichePoste.innerHTML=employer13["poste"]
    affichevoiture.innerHTML=employer13["voiture"]
    afficheChiffre.innerHTML=employer13["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer13["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer13["chiffre"] > 35000 && employer13["chiffre"]<99000 ){

        primegg = employer13["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer13["chiffre"] > 100000 && employer13["chiffre"]<299998 ){

        primegg = employer13["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer13["chiffre"]> 299999){
        primegg = employer13["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

if (user === employer14["non"] && userMdp === employer14["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer14["non"]
    affichePoste.innerHTML=employer14["poste"]
    affichevoiture.innerHTML=employer14["voiture"]
    afficheChiffre.innerHTML=employer14["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employer14["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer14["chiffre"] > 35000 && employer14["chiffre"]<99000 ){

        primegg = employer14["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer14["chiffre"] > 100000 && employer14["chiffre"]<299998 ){

        primegg = employer14["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer14["chiffre"]> 299999){
        primegg = employer6["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}
if (user === employer15["non"] && userMdp === employer15["mdp"]){

    carteperso.style.display="block"
    formLogin.style.display="none"
    affichenom.innerHTML=employer15["non"]
    affichePoste.innerHTML=employer15["poste"]
    affichevoiture.innerHTML=employer15["voiture"]
    afficheChiffre.innerHTML=employer15["chiffre"]
    afficheDateMaj.innerHTML=maj


    if (employe15["chiffre"]< 35000){
        afficheprime.innerHTML="Attention vous n'avais pas 35 000 de chiffre "

    }
   else if (employer15["chiffre"] > 35000 && employer15["chiffre"]<99000 ){

        primegg = employer15["chiffre"]/2
        afficheprime.innerHTML=primegg

    }
   else if (employer15["chiffre"] > 100000 && employer15["chiffre"]<299998 ){

        primegg = employer15["chiffre"]*60/100
        afficheprime.innerHTML=primegg


    }
    else if (employer15["chiffre"]> 299999){
        primegg = employer15["chiffre"]*70/100
        afficheprime.innerHTML=primegg


    }





}

}
