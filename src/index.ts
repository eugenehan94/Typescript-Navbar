const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const links = document.querySelector<HTMLUListElement>(".links")


navToggle?.addEventListener("click", () => {
  console.log(links?.classList)

  if (links?.classList.contains("show-links")){
    links.classList.remove("show-links")
  }else {
    links?.classList.add("show-links")
  }
 // links?.classList.toggle("show-links");
})

export {}
