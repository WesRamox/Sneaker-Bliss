import { IArticle } from "../interfaces/IArticle"
import { handlerModal } from "./closeModal"
import { renderProducts } from "./renderProducts"

export const addProduct = async () => {

   const nameProduct = (<HTMLInputElement>document.getElementById("name")).value
   const brandProduct = (<HTMLInputElement>document.getElementById("brand")).value
   const imageUrl = (<HTMLInputElement>document.getElementById("image")).value
   const oldPrice = (<HTMLInputElement>document.getElementById("old-price")).value
   const lastPrice = (<HTMLInputElement>document.getElementById("last-price")).value
   const phone = (<HTMLInputElement>document.getElementById("phone")).value

   const articleData: IArticle = {
      name: nameProduct,
      brand: brandProduct,
      image: imageUrl,
      old_price: Number(oldPrice),
      last_price: Number(lastPrice),
      phoneNumber: phone
   }

   await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleData)
   })

   var resetForm = <HTMLFormElement>document.querySelector(".form-cad");
   resetForm.reset()

   renderProducts()
   handlerModal()
}
