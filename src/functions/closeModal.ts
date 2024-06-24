export const handlerModal = () => {
  let modal = document.querySelector(".sell-modal")
  if(modal?.classList.contains("hidden")) {
    modal.classList.remove("hidden")
  } else {
    modal?.classList.add("hidden")
  }
}