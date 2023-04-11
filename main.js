import { router, navigateTo } from './src/router.js'
import { canvas } from './src/canvas.js'
// import Transition from './src/transition.js'
// import { transition } from './src/transition2.js'
import { transition } from './src/transition3.js'


canvas(document.querySelector('#webgl'));

window.addEventListener('popstate', () => {
    router()
})


const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    // loaderContainer.classList.add('loader-container-hidden');
    loaderContainer.parentElement.removeChild(loaderContainer);

})

document.addEventListener('DOMContentLoaded', () => {
    // const transition = new Transition();
    const navLinks = document.querySelectorAll('[data-navigation]');
    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault()
            // new code
            // const url = e.target.href;
            // const currentPage = window.location.pathname;
            // try {
                new Promise(function (resolve, reject) {
                    // Do an async task
                    
                        const url = e.target.href;
                        navigateTo(url);
                        console.log('Async task complete');
                        resolve();
                    
                }).then(function () {
                    transition();
                    console.log('Promise consumed');
                }).then(function() {
                    transition()
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
        navigation.addEventListener('navigate', event => {
            console.log(event, 'Nav Event')
        })
    })
    
    router()
})

    const nav = document.querySelector('.nav-links');
    const links = nav.querySelectorAll('a');
    function changeNav() {
        const currentLocation = location.href;
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

// function onComplete() {
//     navigateTo(url)
//     console.log('Transition complete');
// }
// function onProgress() {
//     console.log(`Transition progress: ${progress}`);
// }