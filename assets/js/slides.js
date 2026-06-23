document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;

    function getSlideHeaders() {
        return Array.from(document.querySelectorAll('.slide-header'));
    }

    function isElementInViewport (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    function changeSlideIndex(offset) {
        const headers = getSlideHeaders();
        slideIndex = Math.min(Math.max(slideIndex + offset, 0), headers.length - 1);
        headers[slideIndex]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    document.getElementById('slides-back').addEventListener('click', (e) => {
        e.preventDefault();
        changeSlideIndex(-1);
    });

    document.getElementById('slides-forward').addEventListener('click', (e) => {
        e.preventDefault();
        changeSlideIndex(1)
    });

    window.addEventListener('scroll', _.debounce((e) => {
        const slideHeaders = getSlideHeaders();

        for (let i = 0; i < slideHeaders.length; i++) {
            if (isElementInViewport(slideHeaders[i])) {
                slideIndex = i;
                break;
            }
        }

    }, 500));

    window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft') {
            changeSlideIndex(-1);
        } else if (e.code === 'ArrowRight') {
            changeSlideIndex(1);
        }
    });
});
