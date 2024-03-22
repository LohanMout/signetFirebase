import Dossier from './Dossier';

import './ListeDossiers.scss';

export default function ListeDossiers({dossiers, setDossiers}) {
  
  function supprimerDossier(id) {
    setDossiers(dossiers.filter(elt => elt.id != id))
  }

  function modifierDossier(id, titre, couverture, couleur) {
    setDossiers(dossiers.map(
      doss => {
        if(doss.id == id) {
          return ({id, titre, couverture, couleur});
        }
        return doss;
      }
    ));
  }

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          dossier =>  <li key={dossier.id}>
                        <Dossier 
                          {...dossier} 
                          supprimer={supprimerDossier} 
                          modifier={modifierDossier}
                        />
                      </li>
        )
      }
    </ul>
  );
}