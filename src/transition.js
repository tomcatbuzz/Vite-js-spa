import GSAP from 'gsap'

export default class {
  constructor () {
    this.element = document.createElement('canvas')
    this.element.className = 'transition'
    this.element.height = window.innerHeight * window.devicePixelRatio
    this.element.width = window.innerWidth * window.devicePixelRatio
    console.log(this.element.width, 'width')
    console.log(this.element.height, 'height')
    // this.element.style.height = '100%'
    // this.element.style.width = '100%'
    // this.element.position = 'fixed'
    this.element.zIndex = 1000
    // this.element.top = 0
    // this.element.left = 0

    this.color = ["black", "rgb(23, 98, 128)", "#690c0c"]
    
    this.context = this.element.getContext('2d')

    this.progress = 0

    const transition = document.querySelector('transition')
    transition.appendChild(this.element)
    // document.body.appendChild(this.element)
    // document.body.insertAdjacentElement('afterend', this.element)
    console.log(this.element.zIndex, 'wtf')
    
  }

  show ({ color }) {
    this.color = color

    return new Promise(resolve => {
      GSAP.set(this.element, { rotation: 0 })

      GSAP.to(this, {
        duration: 1.5,
        ease: 'expo.inOut',
        onComplete: resolve,
        onUpdate: this.onUpdate.bind(this),
        progress: 1
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      GSAP.set(this.element, { rotation: 180 })

      GSAP.to(this, {
        duration: 1.5,
        ease: 'expo.inOut',
        onComplete: resolve,
        onUpdate: this.onUpdate.bind(this),
        progress: 0
      })
    })
  }

  onUpdate () {
    this.context.clearRect(0, 0, this.element.width, this.element.height)
    this.context.save()
    this.context.beginPath()

    this.widthSegments = Math.ceil(this.element.width / 40)
    this.context.moveTo(this.element.width, this.element.height)
    this.context.lineTo(0, this.element.height)

    const t = (1 - this.progress) * this.element.height
    const amplitude = 250 * Math.sin(this.progress * Math.PI)

    this.context.lineTo(0, t)

    for (let index = 0; index <= this.widthSegments; index++) {
      const n = 40 * index
      const r = t - Math.sin((n / this.element.width) * Math.PI) * amplitude

      this.context.lineTo(n, r)
    }

    this.context.fillStyle = this.color
    this.context.fill()
    this.context.restore()
  }
}
