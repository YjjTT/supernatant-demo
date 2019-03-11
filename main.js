var show = false
$(clickMe).on('click', function (e) {
    console.log(show)
    if (show) {
        $(popover).hide()
        show = false
    } else {
        show = true
        $(popover).show()
        setTimeout(function () {
            $(document).one('click', function () {
                show = false
                $(popover).hide()
            })
        }, 0)
    }
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})