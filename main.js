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
            try {
                // await transition.show(currentPage, url, onComplete, onProgress);
                // await transition(currentPage)
                await transition()
                await onComplete()
                function onComplete() {
                    const url = e.target.href;
                    navigateTo(url)
                    console.log('Transition complete');
                }
                changeNav()
                // await navigateTo(url)
                // await transition.hide()
            } catch (error) {
                console.error(error)
                navigateTo('/404')
            }

            // original
            // navigateTo(e.target.href)
        })
    })

    // const nav = document.querySelector('.nav-links');
    // const links = nav.querySelectorAll('a');
    // function changeNav() {
    //     const currentLocation = location.href;
    //     const menuLength = links.length;
    //       for (let i = 0; i < menuLength; i ++) {
    //         if(links[i].href === currentLocation) {
    //             links[i].classList.add('active')
    //         //   gsap.set(links[i], {
    //         //     color: '#e74c3c'
    //         //   });
    //         } else {
    //             links[i].classList.remove('active')
    //         //   gsap.set(links[i], {
    //         //     color: 'black'
    //         //   });
    //         }
    //         // for Development
    //         console.log(links, 'Links')
    //         console.log(currentLocation, 'First Nav'); 
    //       }
    //   }

    router()
    // changeNav()
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
            console.log(links, 'Links')
            console.log(currentLocation, 'First Nav'); 
          }
      }
    //   changeNav()

// function onComplete() {
//     navigateTo(url)
//     console.log('Transition complete');
// }
function onProgress() {
    console.log(`Transition progress: ${progress}`);
}