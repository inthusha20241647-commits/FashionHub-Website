var menu = document.getElementById("menu")
var closemenu = document.getElementById("closemenu")
var sidebar = document.getElementById("sidebar")

menu.addEventListener("click", function(){
    sidebar.style.display = "block";
})

closemenu.addEventListener("click", function(){
    sidebar.style.display = "none";
})


var search = document.getElementById("search");
var div = document.querySelectorAll(".section2-card-image");

search.addEventListener("keyup", function(event){

    var enteredValue = event.target.value.toUpperCase();

    for(count = 0; count < div.length; count++){

        var h2List = div[count].querySelector(".h2List")

        if(h2List.textContent.toUpperCase().indexOf(enteredValue) < 0){

            div[count].style.display = "none";

        }else{

            div[count].style.display = "block";
        }
    }
})