const fadeContent = document.querySelector('slot[name="main"]')
// const fadeContent = parentElement.innerHTML
// const fadeContent = document.getElementsByName('main')
console.log(fadeContent, "SLOT??")
export const fadePage = () => {
    const fadeKeyframes = new KeyframeEffect(
        fadeContent,
    [
        { opacity: 1 }, 
        { opacity: 0 }
    ],
    {
        duration: 2000,
        easing: 'ease-out',
        fill: 'forwards'
    }
    )

    const animateOut = new Animation(
        fadeKeyframes,
        // show(),
        // hide(),
        // wiperIn,
        // wiperOut,
        document.timeline
    );

    console.log(animateOut, "AnimOUT wtf")
    animateOut.play()
}

export const unfadePage = () => {
    const unfadeKeyframes = new KeyframeEffect(
        fadeContent,
    [
        { opacity: 0 }, 
        { opacity: 1 }
    ],
    {
        duration: 10000,
        easing: 'ease-out',
        fill: 'forwards',
        delay: 500
    }
    )

    const animateIn = new Animation(
        unfadeKeyframes,
        // show(),
        // hide(),
        // wiperIn,
        // wiperOut,
        document.timeline
    );

    console.log(animateIn, "AnimOUT wtf")
    animateIn.play()
}