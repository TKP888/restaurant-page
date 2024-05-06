
import createRestaurantMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";
import createRestaurantContactPage from "./contact";



const createTabs = () => {
  
const content = document.querySelector("#content");
   
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

//IDs for divs
btn1.setAttribute('id', 'home-btn');
btn2.setAttribute('id', 'menu-btn');
btn3.setAttribute('id', 'contact-btn');


btn1.classList.add('tab');
btn2.classList.add('tab');
btn3.classList.add('tab');

// btn1.textContent('Home');
// btn2.textContent('Menu');
// btn3.textContent('Contact');

content.appendChild(btn1);
content.appendChild(btn2);
content.appendChild(btn3);

btn1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
})
btn2.addEventListener('click', () => {
    clearContent();
    createRestaurantMenuPage();
})
btn3.addEventListener('click', () => {
    clearContent();
    createRestaurantContactPage();
})




}





function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;