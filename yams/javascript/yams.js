// ici votre javascript
const tabLance = new Array(5);
let nbLance=1;
let boolFind;

function init(){ // fonction d'initialisation
	if (nbLance==1){ // Test si on est dans le cas du premier lancé
		for(i=1;i<6;i++){ // Remise à zéro des dés et des checkbox
			document.getElementById("photo"+i).src="images/unknown.png";
			document.getElementById("chk"+i).checked=false;
		}
		document.getElementById("lanceDe").disabled=false; // Activation du bouton du lancé
	}
}

function lancer(){ // fonction de lancé des dés
	for(i=1;i<6;i++){ // Boucle de 1 à 5 (5 dés)
		document.getElementById("chk"+i).disabled = false;
		// Vérification si la case sous le dé en cours est cochée
		if (document.getElementById("chk"+i).checked==false){ // case non cochée
			tabLance[i-1]=Math.floor((Math.random())*6)+1; // Fonction aléatoire du lancé
			document.getElementById("photo"+i).src="images/de"+tabLance[i-1]+".gif"; // Affichage du décorrespondant au résultat aléatoire
		}else{
			document.getElementById("photo"+i).src="images/de"+tabLance[i-1]+"G.gif"; // Case cochée donc affichage du dé correspondant en grisé
		}
	}
	if (nbLance==3){ // Test si les 3 lancés ont été effectués
		document.getElementById("lanceDe").disabled=true; // Désactivation du bouton
		nbLance=1; // Remise à 1 des lancés
	}else {
		nbLance++; // Incrémentation du numéro du lancé si < 3
	}
	
	
}
function affecteResult(value){ // Fonction d'affectation du résultat des lancés
	nbLance = 1; // Remise à zéro des lancés
	nbValue = 0;
	total	= 0;
	switch (value){
		case '1' : 
		case '2' :
		case '3' :
		case '4' :
		case '5' :
		case '6' :
			for(i=1;i<6;i++){
				if (Number(tabLance[i-1]) == Number(value)){
					nbValue++;
				}
			}
			total = nbValue*value;				
			break;			
		case 'plus' :
			total = calcultotal();
			moins = document.getElementById("affmoins").value;
			if ((moins != " ") && (total < moins)){
				total=0;
			}
			break;			
		case 'moins' :
			total = calcultotal();
			plus = document.getElementById("affplus").value;
			if ((plus != " ") && (total > plus)){
				total=0;
			}
			break;			
		case 'brelan' :
			boolFind = false;
			tabNb = calculnb();
			for(i=1;i<7;i++){
				if (tabNb[i-1] >= 3){
					boolFind = true;
				}
			}
			if (boolFind){
				total = calcultotal();				
			}
			break;			
		case 'suite' :
			tabNb = calculnb();
			
			if ( ( (tabNb[0] == 1) && (tabNb[1] == 1) && (tabNb[2] == 1) && (tabNb[3] == 1) && (tabNb[4] == 1) )
			||   ( (tabNb[1] == 1) && (tabNb[2] == 1) && (tabNb[3] == 1) && (tabNb[4] == 1) && (tabNb[5] == 1) ) )
			{
				total = 40;					
			}
			break;			
		case 'full' :
			let boolThree = boolTwo = false;
			tabNb = calculnb();
			for(i=1;i<7;i++){
				if (tabNb[i-1] == 3){
					boolThree = true;
				}
				if (tabNb[i-1] == 2){
					boolTwo = true;
				}
			}
			if (boolTwo && boolThree){
				total = 25;					
			}
			break;			
		case 'carre' :
			boolFind = false;
			tabNb = calculnb();
			for(i=1;i<7;i++){
				if (tabNb[i-1] >= 4){
					boolFind = true;
				}
			}
			if (boolFind){
				total = calcultotal();					
			}
			break;			
		case 'yams' :
			boolFind = false;
			tabNb = calculnb();
			for(i=1;i<7;i++){
				if (tabNb[i-1] == 5){
					boolFind = true;
				}
			}
			if (boolFind){
				total = 50;					
			}
			break;			
	}
	init();
	document.getElementById("btnaff"+value).disabled=true;
	document.getElementById("aff"+value).value=total;//compte(value,d1,d2,d3,d4,d5)*value;
	calculAll();
}
function calcultotal(){
	total = 0;
	for(i=1;i<6;i++){
		total += Number(tabLance[i-1]);
	}
	return total;
}
function calculnb(){
	tabNb = [0,0,0,0,0,0];
	for(i=1;i<7;i++){
		tabNb[Number(tabLance[i-1])-1]++;
	}
	return tabNb;
}
function calculAll(){
	totalAll = 0;
	totalHaut = 0;
	for(i=1;i<7;i++){
		totalHaut += Number(document.getElementById("aff"+i).value);
	}
	if (totalHaut > 62){
		document.getElementById("bonus").value=35;
		totalHaut += 35;
	}
	document.getElementById("tot").value=totalHaut;
	totalAll  = totalHaut;
	totalAll += Number(document.getElementById("affplus").value);
	totalAll += Number(document.getElementById("affmoins").value);
	totalAll += Number(document.getElementById("affbrelan").value);
	totalAll += Number(document.getElementById("affsuite").value);
	totalAll += Number(document.getElementById("afffull").value);
	totalAll += Number(document.getElementById("affcarre").value);
	totalAll += Number(document.getElementById("affyams").value);
	document.getElementById("totbis").value=totalAll;
}