var navItems = document.querySelectorAll("#navBar");

// Add click event listener to each list item
navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Remove active class from all list items
        navItems.forEach(function(item) {
            item.classList.remove("active");
        });
        // Add active class to the clicked item
        this.classList.add("active");
        
        // Your onactive function goes here
        // For example, you can console log the text of the clicked item
        console.log("Clicked on: " + this.textContent);
    });
});
$(document).ready(function(){
    $('.nav-link').click(function(){
      $('.nav-link').removeClass("active");
      $(this).addClass("active");
  });
  });

  var hide_icon = document.querySelector(".bx-align-right")
  var show_icon = document.querySelector(".bx-x")
  var Hide_nav = document.querySelector(".Hide_nav")
  
  show_icon.addEventListener("click",()=>{
    hide_icon.style.display = "block"
    show_icon.style.display = "none"
    Hide_nav.style.display = "none"
  

  })

  hide_icon.addEventListener("click",()=>{
    hide_icon.style.display = "none"
    show_icon.style.display = "block"
    Hide_nav.style.display = "block"
  
  })
