class Hero {
  constructor () {
    this.$title = $('.c-hero__title')
    this.$subTitle = $('.c-hero__desc')

    this.contentManager()
  }

  showContent (target) {
    $(target).addClass('isShow')
  }

  contentManager () {
    setTimeout(() => {
      this.showContent(this.$title)

      setTimeout(() => {
        this.showContent(this.$subTitle)
      }, 220)
    }, 200)
  }
}

export default Hero
