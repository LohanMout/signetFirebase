import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleProvider, bd, collUtilisateurs } from "./init";
import { setDoc, doc } from "firebase/firestore";
/**
 * Permet à un utilisateur de se connecter en utilisant l'authentification
 * fédérée Google.
 */
export function connexion() {
  signInWithPopup(firebaseAuth, googleProvider).then(
    (u) => console.log("Utilisateur", u)
  )
}

export function deconnexion() {
  signOut(firebaseAuth);
}

export function observerEtatConnexion(mutateurUtilisateur){
  onAuthStateChanged(firebaseAuth, u=> {
      if(u){
        //enregistrer les donnees de l'utilisateur dans firebase
        setDoc(doc(bd, collUtilisateurs, u.uid),
        {
          nomComplet: u.displayName,
          avatar: u.photoURL,
          dcc: new Date().getTime(),
          courriel: u.email
        },
        {merge: true}
      )
      }
      mutateurUtilisateur(u)
  }
);
}