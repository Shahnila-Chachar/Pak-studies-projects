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

  // Remove any existing transition divs
  const oldTransition = document.querySelector(".page-transition");
  if (oldTransition) oldTransition.remove();

  // Create the transition layer
  const transition = document.createElement("div");
  transition.classList.add("page-transition");
  document.body.appendChild(transition);

  // Start animation (slide in from right)
  requestAnimationFrame(() => {
    transition.style.left = "0";
  });

  // After animation completes, redirect
  setTimeout(() => {
    window.location.href = page;
  }, 700);
}
