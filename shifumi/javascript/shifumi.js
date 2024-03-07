		// ici votre javascript
		const tabChoix = new Array("pierre", "feuille", "ciseaux");

		function joue(choixUtilisateur){
			let boolWin = false;
			
			let choixOrdi = Math.floor((Math.random()*3)+1);
			
			let resultat = "Choix ordi : " + tabChoix[choixOrdi-1] + " - Votre choix : " + tabChoix[choixUtilisateur-1] + "<br />";
			resultat += "<img src='images/shifumi-" + tabChoix[choixOrdi-1] + ".png' />";
			resultat += "<img src='images/shifumi-" + tabChoix[choixUtilisateur-1] + ".png' />";

			if (choixUtilisateur == choixOrdi){
				resultat += " => Egalité";
			}else{
				switch (choixUtilisateur){
					case 1 :
							if (choixOrdi == 2){
								resultat += " => ordi gagne : La feuille recouvre la pierre ";
							}
							if (choixOrdi == 3){
								resultat += " => joueur gagne : La pierre écrase les ciseaux ";
								boolWin = true;
							}
						break;
					case 2 :
							if (choixOrdi == 1){
								resultat += " => joueur gagne : La feuille recouvre la pierre ";
								boolWin = true;
							}
							if (choixOrdi == 3){
								resultat += " => ordi gagne : Les ciseaux coupent la feuille ";
							}
						break;
					case 3 :
							if (choixOrdi == 1){
								resultat += " => ordi gagne :  La pierre écrase les ciseaux ";
							}
							if (choixOrdi == 2){
								resultat += " => joueur gagne : Les ciseaux coupent la feuille ";
								boolWin = true;
							}
						break;
				}

			}
			
			document.getElementById("resultat").innerHTML = resultat;    
		}