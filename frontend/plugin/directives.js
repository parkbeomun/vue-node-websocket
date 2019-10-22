module.exports = (Vue) => {

    Vue.directive('auto-scroll-bottom', {
        update: (el) => {
            el.scrollTop = el.scrollHeight
        }
    })
}