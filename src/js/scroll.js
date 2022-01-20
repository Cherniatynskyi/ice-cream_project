class Pagescroll {
    constructor(id) {
        this.page = $(id)
        this.upLink = this.page.find('.upLink')
        $(window).scroll(this.showHideUpLink.bind(this))
        this.upLink.click(this.slowScroll.bind(this))
    }

    showHideUpLink() {
        if ($(window).scrollTop() > 300) {
            this.upLink.fadeIn(1000)
        } else {
            this.upLink.fadeOut(1000)
        }
    }
    slowScroll(event) {
        event.preventDefault()
        $('html, body').stop().animate({ scrollTop: 0 }, 500)
    }
}
const scroll = new Pagescroll('#page1')
