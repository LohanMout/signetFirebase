import './Dossier.scss';

import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FrmDossier from './FrmDossier';
import { useState } from 'react';

export default function Dossier({
                          id, 
                          titre, 
                          couverture, 
                          couleur, 
                          dateModif, 
                          supprimer,
                          modifier
                      }) {

  // État du formulaire de modification
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  // Style dynamique de la couleur du dossier.
  let objStyle = {
    backgroundColor: couleur
  }
  return (
    <article className="Dossier">
      <div className="couverture">
        <IconButton className='btn-dossier tourner' color='primary'>
          <ThreeSixtyIcon/>
        </IconButton>
        <img src={couverture} alt={titre}/>
        <IconButton 
          className='btn-dossier supprimer' 
          color='secondary'
          onClick={()=>supprimer(id)}
        >
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className="info" style={objStyle}>
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
        <FrmDossier
          ouvert={frmDossierOuvert}
          setOuvert={setFrmDossierOuvert}
          actionDossier={modifier}
          dossierPrec={{id, titre, couverture, couleur}}
        />
        <IconButton onClick={()=>setFrmDossierOuvert(true)} className='btn-dossier modifier' color='tertiary'>
          <EditIcon/>
        </IconButton>
      </div>
    </article>
  );
}