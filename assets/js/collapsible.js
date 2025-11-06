const updateHeights = () => {
    const collapsible = Array.from(document.querySelectorAll('.collapsible'));
    collapsible.forEach((el) => {
        const inner = el.querySelector('.collapsible-inner');
        if (!inner) {
            console.error('No inner element found for collapsible', el);
            return;
        }

        const height = inner.scrollHeight;
        inner.dataset.height = height;
    });
};

const init = () => {
    updateHeights();
    const collapsible = Array.from(document.querySelectorAll('.collapsible'));

    collapsible.forEach((el) => {
        const h = el.querySelector('h1, h2, h3, h4');
        const inner = el.querySelector('.collapsible-inner');

        if (!inner) {
            console.error('No inner element found for collapsible', el);
            return;
        }

        if (!h) {
            console.error('No header found for collapsible', el);
            return;
        }

        el.classList.add('hide');

        h.addEventListener('click', () => {
            if (el.classList.contains('hide')) {
                inner.style.height = `${inner.dataset.height}px`;
                el.classList.remove('hide');
            } else {
                inner.style.height = '';
                el.classList.add('hide', 'from-open');
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', _.debounce(updateHeights));
