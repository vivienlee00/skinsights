jQuery(function ($) {
    $('.skinConcern').click(function () {
        $(this).toggleClass('highlight')
    })
})

jQuery(function ($) {
    $('.skinType').click(function () {
        $('.skinType').removeClass('highlight')
        $(this).toggleClass('highlight')
    })
})

jQuery(function ($) {
    $('.skinProduct').click(function () {
        $(this).toggleClass('highlight')
    })
})