var button1 = document.querySelector("#question01");
var button2 = document.querySelector("#question02");
var button3 = document.querySelector("#question03");
var button4 = document.querySelector("#question04");

var text1 = document.querySelector("#question-text01");
var text2 = document.querySelector("#question-text02");
var text3 = document.querySelector("#question-text03");
var text4 = document.querySelector("#question-text04");

var img1 = document.querySelector("#img-text01");
var img2 = document.querySelector("#img-text02");
var img3 = document.querySelector("#img-text03");
var img4 = document.querySelector("#img-text04");

var isActive1 = false;
var isActive2 = false;
var isActive3 = false;
var isActive4 = false;

button1.addEventListener("click", () => {
    isActive1 = showText(text1, img1,isActive1);
})
button2.addEventListener("click", () => {
    isActive2 = showText(text2, img2,isActive2);
})
button3.addEventListener("click", () => {
    isActive3 = showText(text3, img3,isActive3);
})
button4.addEventListener("click", () => {
    isActive4 = showText(text4, img4, isActive4);
})


function showText(text, img, isActive){
    if(isActive == false){
        text.classList.add("question-pt02-vis");
        img.src="assets/images/icon-minus.svg";
        console.log("Funcionou false");
        return true;
    }
    else{
        console.log("Funcionou true");
        text.classList.remove("question-pt02-vis");
        img.src="assets/images/icon-plus.svg";
        return false;
    }
}