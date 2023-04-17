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

    
    const view = await fetch(match.route.view)
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const app = document.querySelector('slot[name="main"]');
            app.innerHTML = doc.querySelector('slot[name="main"]').innerHTML;

            const title = doc.querySelector('title').textContent;
            document.title = title;
        })
        .then(() => {
            const event = new CustomEvent('navigation', { detail: { page: location.pathname } });
            window.dispatchEvent(event);
        })
        .catch(error => console.log(error));
}