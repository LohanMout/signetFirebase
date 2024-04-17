import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { bd, collDossiers, collUtilisateurs } from "./init";

/**
 * Ajoute un dossier pour l'utilisateur connecter dans firestore
 * @param {string} idUtil 
 * @param {object} infoDossier 
 * 
 * @returns {string} 
 */



export async function creer(idUtil, infoDossier){
    const refDossier = doc(collection(bd, collUtilisateurs, idUtil, collDossiers));
    await setDoc(refDossier, infoDossier);
    return refDossier.id;
}