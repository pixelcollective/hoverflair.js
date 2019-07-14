const hoverFlair = {
  init: function(properties) {
    this.setColors(properties.colors)
    this.setTransitionClass(properties.transitionClass)
    return this;
  },

  setColors: function (colors) {
    this.colors = colors.slice()
    return this
  },

  setTransitionClass: function (transitionClass) {
    this.transitionClass = transitionClass
    return this
  },

  addFlair: function (hoverThings, property) {
    hoverThings.forEach(hoverThing => {
      this.transitionClass &&
        hoverThing.classList.toggle(this.transitionClass)

      hoverThing.addEventListener('mouseover', () => {
        const flairColors = this.colors.slice()
        const flairIndex = [Math.floor(Math.random() * flairColors.length), 1]
        const flair = flairColors.splice(...flairIndex)

        hoverThing.inherentQuality = hoverThing.style[
          `${property}`
        ]

        hoverThing.style[`${property}`] = flair
      })

      hoverThing.addEventListener('mouseleave', () => {
        hoverThing.style[`${property}`] = hoverThing.inherentQuality
      })
    })

    return this
  }
}

export default hoverFlair
