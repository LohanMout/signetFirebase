import './Appli.scss';

import Accueil from './Accueil.jsx';
import PageUtilisateur from './PageUtilisateur.jsx';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../code/init.js';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => onAuthStateChanged(firebaseAuth, u=>setUtilisateur(u))
    ,
    []
  );

  return (
    utilisateur ? <PageUtilisateur util={utilisateur} /> : <Accueil />
  )
}
