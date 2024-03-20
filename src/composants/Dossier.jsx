import './Dossier.scss';

import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Dossier({id, titre, couverture, couleur, dateModif, supprimerDossier}) {
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
          onClick={()=>supprimerDossier(id)}
        >
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className="info" style={objStyle}>
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <IconButton className='btn-dossier modifier' color='tertiary'>
        <EditIcon/>
      </IconButton>
    </article>
  );
}