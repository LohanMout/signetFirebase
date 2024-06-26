import './PageUtilisateur.scss';

import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { creer, lireTout } from '../code/dossier-modele.js';

export default function PageUtilisateur({util}) {
  // État pour gérer les dossiers
  const [dossiers, setDossiers] = useState([]);

  // Sauvegarder cet état dans localStorage
  // useEffect(
  //   () => window.localStorage.setItem('signets', JSON.stringify(dossiers))
  //   ,
  //   [dossiers]
  // );

  // État d'affichage du formulaire d'ajout de dossier 
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  //Appeler la fonction lireDossier de facon controller
  useEffect(() => {lireDossiers()}, [])

  //lire les dossiers dans Firestore
  async function lireDossiers(){
    const lesDossiersFS = await lireTout(util.uid);
    setDossiers(lesDossiersFS.map(
      dossierFS => ({id: dossierFS.id, ...dossierFS.data()})
    ));
  }

  

  /**
   * Ajoute un dossier
   */
  async function ajouterDossier(titre, couverture, couleur, dateModif) {
    let nouveauDossier = {titre,couverture,couleur,dateModif};
    const idDossier = await creer(util.uid, nouveauDossier)
    nouveauDossier.id = idDossier;
    setDossiers([...dossiers, nouveauDossier]);
  }

  return (
    <div className="PageUtilisateur">
        <Entete util={util} />
        <section className="contenu-principal">
          <ListeDossiers 
            dossiers={dossiers} 
            setDossiers={setDossiers} 
            idUtil={util.uid}
          />
          <FrmDossier 
            ouvert={frmDossierOuvert} 
            setOuvert={setFrmDossierOuvert}
            actionDossier={ajouterDossier}
          />
          <Fab onClick={() => setFrmDossierOuvert(true)} color='primary' className='btn-ajout-dossier' size='large'><AddIcon /></Fab>
        </section>
    </div>
  );
}
