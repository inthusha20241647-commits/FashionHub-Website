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
var products = document.querySelectorAll(".section2-card-image");
var occasionFilters = document.querySelectorAll(
    ".section1-cart1 input[type='checkbox']"
);
var colorFilters = document.querySelectorAll(
    ".section1-cart2 input[type='checkbox']"
);
var arrivalFilters = document.querySelectorAll(
    ".section1-cart3 input[type='checkbox']"
);

function matchesFilterGroup(filters, productOptions) {
    var hasSelectedFilter = false;

    for (var i = 0; i < filters.length; i++) {
        if (filters[i].checked) {
            hasSelectedFilter = true;

            if (productOptions.indexOf(filters[i].value.toLowerCase()) !== -1) {
                return true;
            }
        }
    }

    return !hasSelectedFilter;
}

function filterProducts() {
    var searchText = search ? search.value.toLowerCase() : "";

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.querySelector(".h2List").textContent.toLowerCase();
        var matchesSearch = productName.indexOf(searchText) !== -1;
        var matchesOccasion = matchesFilterGroup(
            occasionFilters,
            product.dataset.occasion.split(" ")
        );
        var matchesColor = matchesFilterGroup(
            colorFilters,
            product.dataset.colors.split(" ")
        );
        var matchesArrival = matchesFilterGroup(
            arrivalFilters,
            product.dataset.arrival.split(" ")
        );

        product.style.display =
            matchesSearch && matchesOccasion && matchesColor && matchesArrival
                ? ""
                : "none";
    }
}

if (search) {
    search.addEventListener("input", filterProducts);
}

var allFilters = document.querySelectorAll(
    ".section1 input[type='checkbox']"
);

for (var i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("change", filterProducts);
}