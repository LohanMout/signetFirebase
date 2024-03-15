// CSS
import './Appli.scss';

import Entete from './Entete';
import ListeDossiers from './ListeDossiers';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          <Fab color='primary' className='btn-ajout-dossier' size='large'><AddIcon /></Fab>
        </section>
    </div>
  );
}
