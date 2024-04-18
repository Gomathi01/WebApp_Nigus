 /* Navbar Selected line(Navbar 1)*/ 
 const menuItems = document.querySelectorAll('.nav-item');
// Loop through each menu item and add click event listener
 menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
       // Prevent default link behavior
       event.preventDefault();

       // Remove 'selected' class from all menu items
        menuItems.forEach(item => {
           item.classList.remove('selected'); });

      // Add 'selected' class to the clicked menu item
     this.classList.add('selected');
  });
});

 /* Navbar Selected line (Navbar 2)*/
 const menuItems1 = document.querySelectorAll('.nav-item2');
 // Loop menu item and add click event listener
  menuItems1.forEach(menuItem => {
   menuItem.addEventListener('click', function(event) {
            event.preventDefault();

        // Remove 'selected' class from all menu items
        menuItems1.forEach(item => {
            item.classList.remove('selected');
        });

         // Add 'selected' class to the clicked menu item
       this.classList.add('selected');
    });
});
/*Navbar underline*/
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar.navbar-fixed');
    var scrollPosition = window.scrollY;

     if (scrollPosition > 20) { 
        navbar.classList.add();
     } else {
         navbar.classList.remove('hidden');
    }
});

// /*Scroll Button*/
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scrollUpBtn").style.display = "block";
//   } else {
//     document.getElementById("scrollUpBtn").style.display = "none";
//   }
// }

// document.getElementById("scrollUpBtn").addEventListener("click", function() {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0; 
// });
