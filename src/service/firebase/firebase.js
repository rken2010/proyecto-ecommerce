import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, writeBatch, getDoc, doc } from "firebase/firestore";
import { useToast } from '@chakra-ui/react'



const firebaseConfig = {
  apiKey: "AIzaSyA-DXfvUfLAyZLD7n4Cs9weBf7Itfk5FxE",
  authDomain: "proyectocoder-ee51d.firebaseapp.com",
  projectId: "proyectocoder-ee51d",
  storageBucket: "proyectocoder-ee51d.appspot.com",
  messagingSenderId: "114261995939",
  appId: "1:114261995939:web:8ad9535530cf7b64546a16"
};

// Inicialize Firebase
const app = initializeApp(firebaseConfig);

//Inicialize Firestore
export const db = getFirestore(app);

// Send Order //
export function sendOrder (orderToSend){
  addDoc(collection(db, "orders"), orderToSend)
    .then((response) => {
      console.log(response)
    })
}
//update DB // 
export function reloadStock(orderToSend){
  const batch = writeBatch(db)
  const noStock = []
  orderToSend.items.forEach(item => { 
    getDoc(doc (db, "catalogo", item.id)).then(response => {
      if( response.data().stock >= item.quantity ) { batch.update(doc(db,"catalogo", response.id),
       { stock: response.data().stock - item.quantity })
         } 
         else{ noStock.push({ id:response.id, ...response.data()}) }
        }
      )
    })
    if(noStock.length === 0){
      addDoc(collection(db, "orders"), orderToSend).then(({id}) => {
        batch.commit()
          .then(()=> {
            alert(`compra realizada con exito ${id}`)
          })
      })
    }
  }
  
