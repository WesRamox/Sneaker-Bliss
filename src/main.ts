import { handlerModal } from "./functions/closeModal"
import { addProduct } from "./functions/addProduct"
import { renderProducts } from "./functions/renderProducts"
import './style.css'

const formSubmit = document.querySelector(".form-cad")

formSubmit?.addEventListener("submit", (ev) => {
  ev.preventDefault()
  addProduct()
})

const openModal = document.querySelector(".sell-button")
const closeModal = document.querySelector(".close-modal")

openModal?.addEventListener("click", handlerModal)
closeModal?.addEventListener("click", (ev) => {
  ev.preventDefault()
  handlerModal()
})

renderProducts()

