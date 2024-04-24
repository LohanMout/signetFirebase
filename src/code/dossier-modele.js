import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
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
 * @param {string} idUtil Identifiant de l'utilisateur
 * 
 * @returns {Promise<Array>} tableau contenant tout les dossiers de cet utilisateur
 */
export async function lireTout(idUtil){
    const lesDossiers = await getDocs(query(collection(bd, collUtilisateurs, idUtil, collDossiers)));
    return lesDossiers.docs;
}

export async function un(idDossier){

}

/**
 * @param {*} idUtil
 * @param {*} idDossier
 * 
 * @returns 
 */
export async function supprimer(idUtil, idDossier){
    const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
    return await deleteDoc(refDossier);
}

/**
 * 
 * @param {*} idUtil 
 * @param {*} idDossier 
 * @param {*} infoDossier 
 */
export async function modifier(idUtil, idDossier, infoDossier){
    const refDossier = doc(bd, collUtilisateurs, idUtil, collDossiers, idDossier);
    await updateDoc(refDossier, infoDossier);
}

