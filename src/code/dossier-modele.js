import { addDoc, collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { bd, collDossiers, collUtilisateurs } from "./init";

/**
 * Ajoute un dossier pour l'utilisateur connecter dans firestore
 * @param {string} idUtil 
 * @param {object} infoDossier 
 * 
 * @returns {Promise<string>} 
 */



export async function creer(idUtil, infoDossier){
    const refDossier = doc(collection(bd, collUtilisateurs, idUtil, collDossiers));
    await setDoc(refDossier, infoDossier);
    return refDossier.id;
}

/**
 * Lire *TOUTE* l'info des dossiers de l'utilisateur connecter
 * 
 * @param [string] idUtil Identifiant de l'utilisateur
 * 
 * @returns {Array} tableau contenant tout les dossiers de cet utilisateur
 */
export async function lireTout(idUtil){
    const lesDossiers = await getDocs(query(collection(bd, collUtilisateurs, idUtil, collDossiers)));
    return lesDossiers.docs;
}

