
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = "../image/tagine.png";
    image.height = '200';
    pageContent.appendChild(image);


    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Little Marrakech';
    pageContent.appendChild(headline);

    const subHeadline = document.createElement('h2');
    subHeadline.textContent = 'Exotic taste of Morocco in the heart of St Albans';
    pageContent.appendChild(subHeadline);


    const copy = document.createElement('p')
    copy.textContent = 'Located in the heart of St Albans town, Little Marrakech provides the adventurous palette and oasis of exotic flavour. Though our city is not lacking in ethnic variety, Little Marrakech is in a league of its own by providing not just a feast for the mouth, but for all five of the senses.';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);


}


export default createRestaurantHomePage;