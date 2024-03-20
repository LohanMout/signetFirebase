import Dossier from './Dossier';

import './ListeDossiers.scss';

export default function ListeDossiers({dossiers, setDossiers}) {
  [
    {
      id: "2342-rte3454-tertert4534-gdfgdf455",
      titre: "Architecture"
    },
    {
      id: "334555444-gdfg-tertert4534-gdfgdf455",
      titre: "Philosophie"
    },
    {
      id: "354534-rte3454-tertert4534-gdfgdf455",
      titre: "JavaScript"
    }
  ]

  function supprimerDossier(id) {
    setDossiers(dossiers.filter(elt => elt.id != id))
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
                          supprimerDossier={supprimerDossier} 
                        />
                      </li>
        )
      }
    </ul>
  );
}