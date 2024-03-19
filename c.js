const carousol = document.querySelector(".carousol-wrapper");

const dragging = (e) => {
    console.log(e.pageX);
}

carousol.addEventListener("mousemove", dragging);
