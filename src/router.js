export const navigateTo = (url) => {
    history.pushState(null, null, url)
    // commented to test
    router()
};

export const router = async () => {
    const routes = [
        { path: '/', view: './index.html' },
        { path: '/about', view: './pages/about.html' },
        { path: '/contact', view: './pages/contact.html' },
        { path: '/404', view: './pages/404.html' },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: routes[routes.length - 1],
            isMatch: true
        }
    }
    // COMMENTED TO TEST <---working
    // function addPageTransitions(app) {
    //     app.classList.add('hidden')
    // }
    const view = await fetch(match.route.view)
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            console.log(doc, "WHATS up DOC")
            const app = document.querySelector('slot[name="main"]');
            app.innerHTML = doc.querySelector('slot[name="main"]').innerHTML;
            // NEW CODE from gpt
            app.style.fontStyle = 'italic'
            // addPageTransitions(app)
            let content = document.getElementById('slot')
            console.log(content.children, "Children")
            console.log(app, "APP from router")

            const title = doc.querySelector('title').textContent;
            document.title = title;
        })
        // .then(() => {
        //     const event = new CustomEvent('navigation', { detail: { page: location.pathname } });
        //     window.dispatchEvent(event);
        // })
        .catch(error => console.log(error));
    // function addPageTransitions(app) {
    //     app.classList.add('fade-in')
    // }
}