

const createRestaurantContactPage = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    pageContent.appendChild(headline);
    
    const subHeadline = document.createElement('h2');
    subHeadline.textContent = 'Please fill in the contact form below and we can get back to you';
    pageContent.appendChild(subHeadline);
    
    
    const form = document.createElement('form');
    form.classList.add('contact-form');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Enter Full Name';
        form.appendChild(nameInput);
        
        const numberInput = document.createElement('input');
        numberInput.type = 'tel';
        numberInput.placeholder = 'Enter Contact Number';
        form.appendChild(numberInput);

         

            const textInput = document.createElement('input');
            textInput.type = 'text';
                form.appendChild(textInput);

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.value = 'submit';
        form.appendChild(submitButton);



    pageContent.appendChild(headline);
    pageContent.appendChild(subHeadline);
    pageContent.appendChild(form);

       
    
    
    
        content.appendChild(pageContent);
    
    }
    
    export default createRestaurantContactPage;






