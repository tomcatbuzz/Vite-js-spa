// import gsap from 'gsap'
export function transition() {
  // return new Promise((resolve, reject) => {
      const div = document.createElement('div')
      div.className = 'transition'
      div.style.position = 'fixed'
      div.style.top = 0
      div.style.width = '100%'
      div.style.height = '100%'
      div.style.backgroundColor = 'white'
      div.innerHTML = '<span class="rock">Rock On</span>'
      div.style.zIndex = 2
      document.body.appendChild(div)
      // const tl = gsap.timeline({
      //     onComplete: () => document.body.removeChild(div)
      // })
      
      // tl.fromTo(div, { 
      //   duration: 1.8,
      //   ease: 'power1.inOut',
      //   x: '-100%',
      // },
      // {
      //   x: 0
      // });
      // tl.fromTo(div, {
      //   x: 0
      // },
      // {
      //   x: '100%'
      // });

      const wiper = div;

      const wiperKeyframes = new KeyframeEffect(
        wiper, // element to animate
        [
          { transform: 'translateX(-100%)', easing: 'ease-in' }, // keyframe
          { transform: 'translateX(0%)' },
          { transform: 'translateX(0%)', easing: 'ease-out'},
          { transform: 'translateX(100%)'} // keyframe
        ],
        { duration: 1800, fill: 'forwards' }, // keyframe options
        
      );

      const wiperAnimation = new Animation(
        wiperKeyframes,
        document.timeline
      );

      wiperAnimation.play();

      wiperAnimation.addEventListener('finish', () => {
        document.body.removeChild(div)
      })
  // });
}