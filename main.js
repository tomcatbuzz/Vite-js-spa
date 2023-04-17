import { router, navigateTo } from './src/router.js'
// import { router, navTo } from './src/router.js'
import { canvas } from './src/canvas.js'
// import Transition from './src/transition.js'
// import { transition } from './src/transition2.js'
import { transition } from './src/transition3.js'
import { fadePage, unfadePage } from './src/animation.js';


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
                        fadePage()
                        const url = e.target.href;
                        navigateTo(url);
                        // navTo(url)
                        // transition()
                        console.log('Async task complete');
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
                    unfadePage()
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
        navigation.addEventListener('navigate', event => {
            console.log(event, 'Nav Event')
            // const url = event.destination.url
            console.log(event.destination.url, "TO: NEXT URL")
            // if (event.destination.url) {
            //     alert("Destiny")
            // } 
            console.log(event.target, "TARGET")
            console.log(event.currentTarget.currentEntry, "FROM: CURRENT URL")
            console.log(navigation.currentEntry.url, "ALSO-FROM CURRENT URL")
            // console.log(navigation.onnavigatesuccess, "NAV SUCCESS")
            let isTransitioning
            new Promise(function (resolve) {
                // const isTransitioning = true
                if(event.currentTarget.currentEntry) {
                isTransitioning = true
                console.log(isTransitioning, "transitoning")
                }
                resolve()
            }).then(() => {
                if(event.destination.url) {
                    isTransitioning = false
                    console.log(isTransitioning, "finished transition")
                }
                
            })
            

            const newDiv = document.createElement('div')
            newDiv.width
            newDiv.style.position = 'fixed'
            newDiv.style.top = 0
            newDiv.style.right = 0
            newDiv.style.width = '25%'
            newDiv.style.height = '25%'
            newDiv.style.backgroundColor = 'green'
            newDiv.innerHTML = '<span class="rock">Rock On</span>'
            newDiv.style.zIndex = 4
            document.body.appendChild(newDiv)
            
            
        })

        // navigation.addEventListener("navigatesuccess", () => {
        //     console.log("navigatesuccess");
        //    
        // });

       
        // navigation.addEventListener('navigate', (event) => {
        //     event.transitionWhile(
        //       createPageTransition({
        //         from: navigation.currentEntry.url,
        //         to: event.destination.url,
        //       })
        //     );
        //   });
        
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