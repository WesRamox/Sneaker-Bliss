import { IArticle } from "../interfaces/IArticle"

export const renderProducts = async() => {
  const response = await fetch("http://localhost:3000/products")
  const data = await response.json()

  const boxElements = <HTMLElement>document.querySelector(".box")
  boxElements.innerHTML = ""
  data.map((product: IArticle) => renderElements(product))

}

const renderElements = (data: IArticle) => {
  const boxElements = <HTMLElement>document.querySelector(".box")

  const mainProduct = document.createElement("div")
  mainProduct.classList.add("product")

  const productImage = document.createElement("img")
  productImage.src = data.image

  const productDesc = document.createElement("div")
  productDesc.classList.add("desc")

  const productBrand = document.createElement("p")
  productBrand.textContent = data.brand

  const productName = document.createElement("p")
  productName.textContent = data.name

  const priceBox = document.createElement("div")
  priceBox.classList.add("price-box")

  const oldPrice = document.createElement("p")
  oldPrice.classList.add("old-price")
  oldPrice.textContent = data.old_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  
  const lastPrice = document.createElement("p")
  lastPrice.textContent = data.last_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  lastPrice.classList.add("last-price")


  mainProduct.append(productImage, productDesc) 
  productDesc.append(productBrand, productName, priceBox)
  priceBox.append(oldPrice, lastPrice)
  boxElements?.append(mainProduct)
}