+++
title= "Boutons"
date= 2023-01-01
+++

Les boutons avait été concevoir à amical et utilisable en les plupart situations.

<section class="sandbox">
	<a href="#"><button>Bouton par défaut</button></a>
	<a href="#"><button class="submit">Bouton de soumission</button></a>
	<a href="#"><button class="cancel">Bouton de annulation</button></a>
</section>

[Comme liens, les boutons devrais avoir assez texte](/meta/design/links) afin que les personnes pouvez lire ou ecouter ce que le bouton est étiqueter et comprendre ce que fait le bouton. Cette devrais plus de "En savoir plus", mais devrais excéder 30 caractères.

## Mise en œuvre les boutons
Les boutons doivent répondre aux critère suivantes:
  - une rembourrage de 6px sur la haut et pied de texte intérieur
  - une rembourrage de 10px sur la gauche et droite de texte intérieur
  - un lisière de 2px ce qui est `rgba(0, 0, 0, 0.2)`
  - un poids de police de 600
  - un rayon de lisière de 8px

Lors du survolant, changez pour avoir:
  - un lisière à pied 2px (née 4px)
  - un marge haute à 2px (née 0px)

Lors du cliquer (en `:active`), changez pour avoir:
  - un couleur de fond de `rgba(0, 0, 0, 0.1)`
