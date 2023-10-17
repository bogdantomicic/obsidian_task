function changeLabelColor(e) {
    var t = document.getElementById("label1");
    e.checked ? t.style.color = "#4D4D4D" : t.style.color = "";
}
function changeLabelColor2(e) {
    var t = document.getElementById("label2");
    e.checked ? t.style.color = "#4D4D4D" : t.style.color = "";
}
function functionForDesktop() {
    const e = document.querySelector(".carousel-container"), t = document.querySelector(".prev-button"), n = document.querySelector(".next-button");
    window.innerWidth > 415 && document.addEventListener("DOMContentLoaded", ()=>{
        let o = 0;
        o = -100, e.style.transform = `translateX(${o}%)`, t.addEventListener("click", ()=>{
            o += 100, o > -3 && (o = 0, t.disabled = !0), e.style.transform = `translateX(${o}%)`, n.disabled = !1;
        }), n.addEventListener("click", ()=>{
            o -= 100;
            const r = 100 * -(e.children.length - 7);
            o < r + 3 && (o = r, n.disabled = !0), e.style.transform = `translateX(${o}%)`, t.disabled = !1;
        });
    });
}
function functionForMobile() {
    const e = document.querySelector(".carousel-container"), t = document.querySelector(".prev-button"), n = document.querySelector(".next-button");
    window.innerWidth < 415 && document.addEventListener("DOMContentLoaded", ()=>{
        console.log("Ovo je mali ekran.");
        let o = 0;
        o = -400, e.style.transform = `translateX(${o}%)`, t.addEventListener("click", ()=>{
            o += 100, o > -3 && (o = 0, t.disabled = !0), e.style.transform = `translateX(${o}%)`, n.disabled = !1;
        }), n.addEventListener("click", ()=>{
            o -= 100;
            const r = 100 * -(e.children.length - 1);
            o < r + 1 && (o = r, n.disabled = !0), e.style.transform = `translateX(${o}%)`, t.disabled = !1;
        });
    });
}
window.addEventListener("resize", functionForDesktop), functionForDesktop(), window.addEventListener("resize", functionForMobile), functionForMobile();
const card = document.querySelector(".card"), addToCartButton = document.querySelector(".add-to-card-button");
addToCartButton.addEventListener("click", ()=>{
    card.classList.toggle("zoomed"), window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//# sourceMappingURL=index.1f9f4ade.js.map
