const miniPictures = [...document.getElementsByClassName("mini")];
const  showscreen = document.getElementsByClassName("large")[0];
const  showleft = document.getElementsByClassName("toleft")[0];
const  showright = document.getElementsByClassName("toright")[0];
let i = 0;  



miniPictures.forEach(function (item){
item.addEventListener("click", function(){
 i = miniPictures.indexOf(item) ;   
showscreen.src = item.getAttribute("src");
 const inactive = [...document.getElementsByClassName("active")];
 inactive.forEach(function(item){
item.classList.remove("active");
 })
 item.classList.add("active");
})
});

showright.onclick = function(){
const select = miniPictures[i].nextElementSibling;
if (miniPictures[i].nextElementSibling !== null){
showscreen.src = select.getAttribute("src");
const inactive = [...document.getElementsByClassName("active")];
inactive.forEach(function(item){
item.classList.remove("active");
i ++;
})
select.classList.add("active");
}
else {
i = 0 ;
}
};

showleft.onclick = function(){
let select = miniPictures[i].previousElementSibling;
if (miniPictures[i].previousElementSibling !== null){
 showscreen.src = select.getAttribute("src");
const inactive = [...document.getElementsByClassName("active")];
inactive.forEach(function(item){
item.classList.remove("active");
i--;
})
select.classList.add("active");
}
else {
i =  miniPictures.length-1;
    }
};