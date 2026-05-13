const button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio!");
});

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigating...");
    });
});
