//créer un tableau global qui contient les 3 couleurs 
//choisies aléatoirement : 1 = rouge    2 = vert    3 = bleu
const t_couleur = new Array('rouge', 'vert', 'bleu');
//déclare un tableau global valable pour tout le script
const t_ordi = new Array(); 

//on attribue les valeurs aléatoires 
t_ordi[0] = Math.floor((Math.random() * 3) + 1);
t_ordi[1] = Math.floor((Math.random() * 3) + 1);
t_ordi[2] = Math.floor((Math.random() * 3) + 1);

let compteur = 1 ;
let temoin = false ; //témoin pour dire qu'on n'a pas trouvé la solution
let phrase;

function compare()
{       
	if(temoin == false)	//tant qu'on n'a pas trouvé la solution
	{
		//pour créer un tableau qui contient les 3 couleurs choisies du joueur
		const t_joueur = new Array(); 
		t_joueur[0] = document.jeu.couleur1.value ;
		t_joueur[1] = document.jeu.couleur2.value ;
		t_joueur[2] = document.jeu.couleur3.value ;

		let i ;
		const t_resultats = new Array() ;
		for(i = 0 ; i < 3 ; i ++ )		
		{
			if(t_joueur[i] == t_ordi[i])
			{	
				t_resultats[i] = "vrai" ;
			}
			else 
			{	
				t_resultats[i] = "faux" ;
			}
		}

		phrase = "Resultat : " + t_resultats[0] + " / " + t_resultats[1] + " / " + t_resultats[2]  ;

		if(t_resultats[0] == "vrai" && t_resultats[1] == "vrai" && t_resultats[2] == "vrai" )
		{
			phrase += "<p>Vous avez gagne !!! </p>" ;
			temoin == true ;
			document.getElementById("propose").disabled = true;
		}
		compteur ++ ;
   }
	if(temoin== false && compteur >10)
	{
		phrase += "<br />Vous avez perdu" ;
		phrase += "<br />Les couleurs étaient : " + t_couleur[t_ordi[0]-1] + " / " + t_couleur[t_ordi[1]-1] + " / " + t_couleur[t_ordi[2]-1]  ;
	}

	//afficher le résultat dans la DIV
	document.getElementById("ligne" + compteur).innerHTML = phrase;
}

