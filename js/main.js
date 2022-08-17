var elOpenBtn = document.querySelector(".site-header__btn")

elOpenBtn.addEventListener("click", function(){
    elOpenBtn.closest(".site-header").classList.toggle("navigation-show")
})