import firebase from "../Config/firebase";

export async function getAll (){
  const querySnapshot =  await firebase.firestore().collection("products").get();
  return  querySnapshot.docs; 
}

export async function getById(id){
  return await (await firebase.firestore().doc(`products/${id}`).get()).data();
}

export function getDescription(id){
  return fetch(`https://api.mercadolibre.com/items/${id}/description`)
  .then((res) => res.json())
}

export async function updateProduct (id, producto){
  return (await firebase.firestore().doc(`products/${id}`).set(producto, {merge: true}));
}

