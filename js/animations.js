document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in")
  
    //animation au chargement de la page
    fadeElements.forEach((el) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, 500)
    })
  
  //animation image au survol
    const images = document.querySelectorAll("#carnets img")
    
    images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1)"
    img.style.transition = "transform 0.3s ease"
  })
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(0.9)"
  })
})
})