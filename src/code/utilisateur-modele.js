import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleProvider, bd } from "./init";
import { setDoc } from "firebase/firestore";
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
        //setDoc()
      }
      mutateurUtilisateur(u)
  }
);
}