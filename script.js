function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("menuIcon").querySelector("i");

  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    icon.style.color = "white";
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    icon.style.color = "white";
  }
}


function slideToPage(event, page) {
  event.preventDefault();


  const oldTransition = document.querySelector(".page-transition");
  if (oldTransition) oldTransition.remove();

 
  const transition = document.createElement("div");
  transition.classList.add("page-transition");
  document.body.appendChild(transition);

 
  requestAnimationFrame(() => {
    transition.style.left = "0";
  });


  setTimeout(() => {
    window.location.href = page;
  }, 400);
}
