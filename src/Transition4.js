import GSAP from 'gsap'

export default class {
  constructor () {
    this.element = document.createElement('div')
    this.element.className = 'transition'
    this.element.style.position = 'fixed'
    this.element.style.top = 0
    this.element.style.width = '100%'
    this.element.style.height = '100%'
    this.element.style.backgroundColor = 'white'
    this.element.innerHTML = '<span class="rock">Rock On</span>'
    this.element.style.zIndex = 2
    document.body.appendChild(this.element)
    
    this.progress = 0
  }

  show() {
    const wiperIn = new KeyframeEffect(
      wiper,
      [
        { transform: 'translateX(-100%)', easing: 'ease-in' }, // keyframe
        { transform: 'translateX(0%)' },
      ],
      { duration: 900, fill: 'forwards' }
    )
  }

  hide () {
    const wiperOut = new KeyframeEffect(
      wiper,
      [
        { transform: 'translateX(0%)', easing: 'ease-out'},
        { transform: 'translateX(100%)'},
      ],
      { duration: 900, fill: 'forwards' }
    )
  }

  
}