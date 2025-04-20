var sidenav = document.getElementById("sidenav")
var menuicon =document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function (){
    sidenav.style.right=0
})

closenav.addEventListener("click",function (){
    sidenav.style.right = "-50%"
})



// Get DOM elements
const searchInput = document.getElementById("search");
const productContainer = document.getElementById("productcontainer");
const productItems = productContainer.querySelectorAll("div"); // More specific selector

// Add event listener for search functionality
searchInput.addEventListener("input", function(event) {
    const searchTerm = event.target.value.trim().toUpperCase();
    
    productItems.forEach(item => {
        // Using optional chaining in case h1 doesn't exist
        const productName = item.querySelector("h1")?.textContent?.toUpperCase() || "";
        
        // Toggle visibility based on search match
        item.style.display = productName.includes(searchTerm) ? "block" : "none";
    });
});