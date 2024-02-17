document.addEventListener("DOMContentLoaded", () => {

    const divs = document.querySelectorAll(".space");

    for (const div of divs) {

        const size = Number(div.innerHTML);

        const space = document.createElement("div");

        space.style.height = String(50 * size) + "px";
        space.style.width = "100%";

        const divParent = div.parentElement;
        divParent.insertBefore(space, div);
    }
});