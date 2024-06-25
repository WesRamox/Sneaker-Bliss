import { IArticle } from "../interfaces/IArticle"
import { allProducts } from "./allProducts"

const trendProducts: IArticle[] = []

export const renderProducts = async() => {
  const navTrends = <HTMLElement>document.querySelector(".all-products")
  const titlePage = <HTMLElement>document.querySelector("#title-page")
  const boxElements = <HTMLElement>document.querySelector(".box")

  if(trendProducts.length === 0) {
    const response = await fetch("http://localhost:3000/products?_start=0&_limit=5")
    const data = await response.json()

    boxElements.innerHTML = ""
    data.map((product: IArticle) => trendProducts.push(product))
    trendProducts.map((product: IArticle) => renderElements(product))
  } else {
    boxElements.innerHTML = "" 
    titlePage.textContent = "Produtos em Destaque 🔥"
    navTrends.textContent = "Todos os Produtos"
    trendProducts.map((product: IArticle) => renderElements(product))
    navTrends.addEventListener("click", allProducts)
  }
}

export const renderElements = (data: IArticle) => {
  const boxElements = <HTMLElement>document.querySelector(".box")

  const linkMain = document.createElement("a")
  linkMain.classList.add("link-product")
  linkMain.href = `${data.id}`

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

  mainProduct.append(linkMain)
  linkMain.append(productImage, productDesc) 
  productDesc.append(productBrand, productName, priceBox)
  priceBox.append(oldPrice, lastPrice)
  boxElements?.append(mainProduct)
}