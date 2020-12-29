//Extend Cards Clone Way

/*const button = document.querySelectorAll('.more-btn');
const cards = document.querySelectorAll('.card')

const toggleExpension = (element, to, duration = 350) => {
    return new Promise(res => {
        requestAnimationFrame(() => {
            element.style.transition = `
            width ${duration}ms easy-in-out,
            height ${duration}ms easy-in-out,
            top ${duration}ms easy-in-out,
            left ${duration}ms easy-in-out
            `;
            element.style.top = to.top
            element.style.left = to.left
            element.style.width = to.width
            element.style.height = to.height
            element.style.animation = `cardDidGrouwn 0.1s ease`;
        });
        setTimeout(res, duration);
    });
};

const fadeContent = (element, opacity, duration = 350) => {
    return new Promise(res => {
        [...element.children].forEach((child) => {
            requestAnimationFrame(() => {
                child.style.transition = `opacity ${duration}ms linear`
                child.style.opacity = opacity
            });
        })
        setTimeout(res, duration);
    })
}

const onCardClick = (async (e) => {
    const card = e.currentTarget;

    const cardClone = card.cloneNode(true)
    const {top, left, width, height} = card.getBoundingClientRect();

    cardClone.style.position = 'fixed';
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';

    card.parentNode.appendChild(cardClone);

    const closeButton = document.createElement('button');

    closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 35px;
    right: 35px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #222;
    `;

    closeButton.addEventListener('click', async () => {

        closeButton.remove();
        fadeContent(cardClone, '0')

        await toggleExpension(cardClone, {
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`
        }, 300)
        cardClone.remove();
    });

    fadeContent(cardClone, '1')
    await toggleExpension(cardClone, {top: 0, left: 0, width:'100vw', height: '100vh'});
    cardClone.appendChild(closeButton);
});

cards.forEach(cards => cards.addEventListener('click', onCardClick));
*/
