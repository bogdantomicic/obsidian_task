function changeLabelColor(t){var e=document.getElementById("label1");t.checked?e.style.color="#4D4D4D":e.style.color=""}function changeLabelColor2(t){var e=document.getElementById("label2");t.checked?e.style.color="#4D4D4D":e.style.color=""}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".subtitle-toggle").forEach((function(t){t.addEventListener("click",(function(){var e=t.nextElementSibling;e.classList.contains("hidden")?(e.classList.remove("hidden"),t.querySelector(".togglePlusMinus").textContent="+"):(e.classList.add("hidden"),t.querySelector(".togglePlusMinus").textContent="-")}))}))}));const container=document.querySelector(".carousel-container"),prevButton=document.querySelector(".prev-button"),nextButton=document.querySelector(".next-button");function functionForDesktop(){window.innerWidth>415&&document.addEventListener("DOMContentLoaded",(()=>{let t=0;t=-100,container.style.transform=`translateX(${t}%)`,prevButton.addEventListener("click",(()=>{t+=100,t>-3&&(t=0,prevButton.disabled=!0),container.style.transform=`translateX(${t}%)`,nextButton.disabled=!1})),nextButton.addEventListener("click",(()=>{t-=100;const e=100*-(container.children.length-7);t<e+3&&(t=e,nextButton.disabled=!0),container.style.transform=`translateX(${t}%)`,prevButton.disabled=!1}))}))}function functionForMobile(){window.innerWidth<415&&document.addEventListener("DOMContentLoaded",(()=>{console.log("Ovo je mali ekran.");let t=0;t=-400,container.style.transform=`translateX(${t}%)`,prevButton.addEventListener("click",(()=>{t+=100,t>-3&&(t=0,prevButton.disabled=!0),container.style.transform=`translateX(${t}%)`,nextButton.disabled=!1})),nextButton.addEventListener("click",(()=>{t-=100;const e=100*-(container.children.length-1);t<e+1&&(t=e,nextButton.disabled=!0),container.style.transform=`translateX(${t}%)`,prevButton.disabled=!1}))}))}window.addEventListener("resize",functionForDesktop),functionForDesktop(),window.addEventListener("resize",functionForMobile),functionForMobile();const card=document.querySelector(".card"),addToCartButton=document.querySelector(".add-to-card-button");addToCartButton.addEventListener("click",(()=>{0===window.scrollY?card.classList.toggle("zoomed"):(window.scrollTo({top:0,behavior:"smooth"}),setTimeout((()=>{card.classList.toggle("zoomed")}),500))}));