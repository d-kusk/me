const scroll = function () {
  $("a[href^='#']").on({
    'click': function () {
      const href = $(this).attr('href')
      const target = $(href === '#' || href === '' ? 'html' : href)
      const position = target.offset().top

      $('body, html').animate({
        scrollTop: position
      },
      100,
      'swing')

      return false
    }
  })
}

export default scroll
