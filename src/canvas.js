export function canvas(canvas) {
    const color = ["black", "rgb(23, 98, 128)", "#690c0c"]

    window.addEventListener("navigation", event => {
        const { page } = event.detail;
        if (page === "/") {
            canvas.style.backgroundColor = color[0];
        } else if ( page === "/about") {
            canvas.style.backgroundColor = color[1];
            canvas2.style.backgroundColor = color[0]
        } else if ( page === "/contact") {
            canvas.style.backgroundColor = color[2];
        }
    });
}
