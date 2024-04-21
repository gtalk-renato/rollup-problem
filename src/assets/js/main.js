$(function ($) {
  'use strict'

  jQuery(document).ready(function () {
    // Scroll Top
    var ScrollTop = $('.scrollToTop')
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass('active')
      } else {
        ScrollTop.addClass('active')
      }
    })
    $('.scrollToTop').on('click', function () {
      $('html, body').animate(
        {
          scrollTop: 0
        },
        500
      )
      return false
    })

    // Autocomplete off
    $('input[type=text]').attr('autocomplete', 'off')

    // Input Increase
    var minVal = 1,
      maxVal = 20
    $('.increaseQty').on('click', function () {
      var $parentElm = $(this).parents('.qtySelector')
      $(this).addClass('clicked')
      setTimeout(function () {
        $('.clicked').removeClass('clicked')
      }, 100)
      var value = $parentElm.find('.qtyValue').val()
      if (value < maxVal) {
        value++
      }
      $parentElm.find('.qtyValue').val(value)
    })
    $('.decreaseQty').on('click', function () {
      var $parentElm = $(this).parents('.qtySelector')
      $(this).addClass('clicked')
      setTimeout(function () {
        $('.clicked').removeClass('clicked')
      }, 100)
      var value = $parentElm.find('.qtyValue').val()
      if (value > 1) {
        value--
      }
      $parentElm.find('.qtyValue').val(value)
    })

    // Header Active
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active')
      $(this).parents('.single-item').siblings().removeClass('active')
    })

    // Dropdown Active Remove
    $('section').click(function () {
      $('.single-item').removeClass('active')
    })

    // Chat Bar scroll
    $('.single-item .chat-btn').on('click', function () {
      $('.chat-main').scrollTop($('.chat-main')[0].scrollHeight)
    })

    // Number Active
    var qvalue = $('.quick-value h5')
    $(qvalue).on('click', function (e) {
      $(qvalue).removeClass('active')
      $(this).addClass('active')
      let cval = $(this).html()
      $('#dAmount, #amount').val('$' + cval + '.00')
    })

    // Sticky Header
    var fixed_top = $('.header-section')
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass('animated fadeInDown header-fixed')
      } else {
        fixed_top.removeClass('animated fadeInDown header-fixed')
      }
    })

    // Header Dropdown
    const mobileSize = window.matchMedia('(max-width: 991px)')
    function handleMediaScreeen(e) {
      if (e.matches) {
        $('.navbar-nav .sub').addClass('dropdown-menu')
        $('.navbar-nav .dropdown').removeClass('show-dropdown')
        $('.navbar-nav .sub').removeClass('sub-menu')

        $('.navbar-nav .dropdown-menu')
          .parent('li')
          .click(function (e) {
            if (e.target.className !== 'dropdown-item') {
              $(this).find('>.dropdown-menu').toggle(300)
              e.preventDefault()
              e.stopPropagation()
            }
          })
      } else {
        $('.navbar-nav .dropdown-menu').parent('li').off('click')
        $('sub-dropdown').off('click')

        $('.navbar-nav .dropdown-menu').hide()
        $('.navbar-nav .dropdown').addClass('show-dropdown')
        $('.navbar-nav .sub').addClass('sub-menu')
        $('.navbar-nav .sub').removeClass('dropdown-menu')
      }
    }
    handleMediaScreeen(mobileSize)
    mobileSize.addEventListener('change', handleMediaScreeen)

    // Navbar Active Class Only for HTML
    var curUrl = $(location).attr('href')
    var terSegments = curUrl.split('/')
    var desired_segment = terSegments[terSegments.length - 1]
    var removeGarbage = desired_segment.split('.html')[0] + '.html'
    var checkLink = $('.navbar-nav a[href="' + removeGarbage + '"]')
    var targetClass = checkLink.addClass('active')
    targetClass.parents('.sub-dropdown').find('a').first().addClass('active')
  })
})

// preloader
$(window).on('load', function () {
  $('.preloader')
    .delay(300)
    .animate(
      {
        opacity: '0'
      },
      500,
      function () {
        $('.preloader').css('display', 'none')
      }
    )
})
