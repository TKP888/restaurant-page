const createRestaurantMenuPage = () => {

const content = document.querySelector('#content');
const pageContent = document.createElement('div');
pageContent.classList.add('page-content');

const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    pageContent.appendChild(headline);

    const subHeadline = document.createElement('h2');
    subHeadline.textContent = 'Mains';
    pageContent.appendChild(subHeadline);


    const menuMains = document.createElement('ul')
    const menuMains1 = document.createElement('li')
    menuMains1.textContent = 'COUSCOUS BERBER'

    const menuMains2 = document.createElement('li')
    menuMains2.textContent = 'COUSCOUS AZAYLA (KING PRAWNS)'

    const menuMains3 = document.createElement('li')
    menuMains3.textContent = 'COUSCOUS ROYALE MARRAKECH'

    menuMains.appendChild(menuMains1)
    menuMains.appendChild(menuMains2)
    menuMains.appendChild(menuMains3)
    pageContent.appendChild(headline);
    pageContent.appendChild(subHeadline);
    pageContent.appendChild(menuMains);



    content.appendChild(pageContent);

}

export default createRestaurantMenuPage;