import { IArticle } from "../interfaces/IArticle"
import { renderElements, renderProducts } from "./renderProducts"

let products: IArticle[] = []

export const allProducts = async() => {
  const navTrends = <HTMLElement>document.querySelector(".all-products")
  const titlePage = <HTMLElement>document.querySelector("#title-page")
  const boxElements = <HTMLElement>document.querySelector(".box")

  if(products.length === 0) {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()

    boxElements.innerHTML = ""
    
    data.map((product: IArticle) => products.push(product))
    products.map((product: IArticle) => renderElements(product))

    titlePage.textContent = `Todos os Produtos ✨ (${products.length})`
    navTrends.textContent = "Produtos Destaque"
    navTrends.addEventListener("click", renderProducts)
  } else {
    boxElements.innerHTML = "" 
    titlePage.textContent = "Produtos em Destaque 🔥"
    navTrends.textContent = "Todos os Produtos"
    navTrends.addEventListener("click", renderProducts)
  }
}
  
