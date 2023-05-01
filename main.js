import { router, navigateTo } from './src/router.js'
// import { router, navTo } from './src/router.js'
import { canvas } from './src/canvas.js'
// import Transition from './src/transition.js'
// import { transition } from './src/transition2.js'
import { transition } from './src/transition3.js'
import { fadePage, unfadePage } from './src/animation.js';
// import './style.scss'


canvas(document.querySelector('#webgl'));

window.addEventListener('popstate', () => {
    changeNav()
    router()
})


const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    loaderContainer.parentElement.removeChild(loaderContainer);
})

const app = document.querySelector('slot[name="main"]');
function addPageTransitions(app) {
    app.classList.add('hidden')
}

document.addEventListener('DOMContentLoaded', () => {
    // const transition = new Transition();
    const navLinks = document.querySelectorAll('[data-navigation]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            // new code
            // const url = e.target.href;
            // const currentPage = window.location.pathname;
            // try {
                new Promise(function (resolve, reject) {
                    // Do an async task
                        // fadePage()
                        // console.log(fadePage, 'FADE NOT working')
                        
                        const url = e.target.href;
                        navigateTo(url);
                        console.log(e.target, 'EVENT')
                        transition()
                        addPageTransitions(app)
                        // const url = event.destination.url
                        
                        // navTo(url)
                        // transition()
                        // console.log('Async task complete');
                        resolve();
                    
                // }).then(function () {
                //     // const url = e.target.href;
                //     // navigateTo(url);
                //     setTimeout(() => {
                //         transition()
                //     }, 800) 
                //     console.log(setTimeout, "timeout")
                //     // transition()
                //     console.log('Promise consumed');
                }).then(function() {
                    // unfadePage()
                    // transition.wiperOut
                    changeNav();
                }).catch (function(error) {
                    console.error(error)
                    navigateTo('/404');
                })
                // await transition.show(currentPage, url, onComplete, onProgress);
                // await transition(currentPage)
                // await transition()
                // await onComplete()
                // function onComplete() {
                //     return new Promise(resolve => {
                //         const url = e.target.href;
                //         navigateTo(url);
                //         // transition();
                //         resolve()
                //  })
                    
                // }
                
            // } catch (error) {
            //     console.error(error)
            //     navigateTo('/404')
            // } 

            // original
            // navigateTo(e.target.href)
        })
    })  
    const nav = document.querySelector('.nav-links');
    const links = nav.querySelectorAll('li a');
    function changeNav() {
        const currentLocation = window.location.href;
        const menuLength = links.length;
            for (let i = 0; i < menuLength; i ++) {
                if(links[i].href === currentLocation) {
                    links[i].classList.add('active')
            //   gsap.set(links[i], {
            //     color: '#e74c3c'
            //   });
                } else {
                    links[i].classList.remove('active')
            //   gsap.set(links[i], {
            //     color: 'black'
            //   });
                }
            // for Development
            // console.log(links, 'Links')
            // console.log(currentLocation, 'First Nav'); 
            }
    } 
})

    // const nav = document.querySelector('.nav-links');
    // const links = nav.querySelectorAll('li a');
    // function changeNav() {
    //     const currentLocation = window.location.href;
    //     const menuLength = links.length;
    //         for (let i = 0; i < menuLength; i ++) {
    //             if(links[i].href === currentLocation) {
    //                 links[i].classList.add('active')
    //         //   gsap.set(links[i], {
    //         //     color: '#e74c3c'
    //         //   });
    //             } else {
    //                 links[i].classList.remove('active')
    //         //   gsap.set(links[i], {
    //         //     color: 'black'
    //         //   });
    //             }
    //         // for Development
    //         // console.log(links, 'Links')
    //         // console.log(currentLocation, 'First Nav'); 
    //         }
    // }

    
// function onComplete() {
//     navigateTo(url)
//     console.log('Transition complete');
// }
// function onProgress() {
//     console.log(`Transition progress: ${progress}`);
// }