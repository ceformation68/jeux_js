<?php 
	$arrGames = array(
					'plus_moins'	=> "Deviner un nombre entre 1 et 100",
					'shifumi' 		=> "Jeu effectué avec les mains et opposant deux joueurs",
					'mastermind' 	=> "Jeu dont le but est de trouver un code en un certain nombre d'essais",
					'yams' 			=> "Le Yam's, est un jeu dont le but est d'enchaîner les combinaisons à l'aide de cinq dés pour remporter un maximum de points.",
					'pendu' 		=> "Jeu qui consiste à deviner les lettres d'un mot avant d'être pendu",
				);
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Jeux javascript</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="css/styles.css" media="all"/>
	</head>
	<body>
		<header>
			<h1>Jeux javascript</h1>
		</header>
		<main class="container">
			<div class="row">
				<?php
					foreach ($arrGames as $strGame=>$strDescGame) {
				?>
				<div class="col-md-6">
					<div class="card mb-3">
						<div class="row g-0">
							<div class="col-md-4 text-center">
								<a href="<?php echo $strGame.'/'.$strGame; ?>.html" alt="jeu du <?php echo ucfirst($strGame); ?>">
									<img src="images/<?php echo $strGame; ?>.png" class="img-fluid rounded-start" alt="Image du <?php echo ucfirst($strGame); ?>">
								</a>
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h2 class="card-title"><?php echo ucfirst($strGame); ?></h2>
									<div class="card-text">
										<p><?php echo $strDescGame; ?></p>
										<a class="btn btn-outline-secondary" download href="<?php echo $strGame; ?>.zip" alt="jeu du <?php echo ucfirst($strGame); ?>"><i class="fa fa-download"></i></a>
										<a class="btn btn-outline-secondary" href="<?php echo $strGame.'/'.$strGame; ?>.html" alt="jeu du <?php echo ucfirst($strGame); ?>"><i class="fa fa-eye"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php } ?>
			</div>
		</main>
	</body>
</html>
