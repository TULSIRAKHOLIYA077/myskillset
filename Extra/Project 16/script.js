const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', showMenu);
const close = document.getElementById("close");

function showMenu() {
    menuBtn.style.display = 'none';

    const listItems = ['Home', 'Services', 'Portfolio', 'Pricing', 'Team', 'Contact'];
    const newList = document.createElement('ul');

    listItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container = document.querySelector('#opt-menu');
    container.appendChild(newList);

    close.style.display = 'block'; 
}

function removeList(){
    const container = document.querySelector('#opt-menu');
    container.innerHTML = '';
    menuBtn.style.display = 'block';
    close.style.display = 'none'; 
}

// section :-work 
const workInfo = document.getElementById("work-info")
const work1 = document.getElementById("work-1");
const work2 = document.getElementById("work-2");
const work3 = document.getElementById("work-3");
const work4 = document.getElementById("work-4");
const work5 = document.getElementById("work-5");
const work6 = document.getElementById("work-6");

function allWork(){
    work1.style.display = "inline";
    work5.style.display = "inline";
    work2.style.display = "inline";
    work3.style.display = "inline";
    work4.style.display = "inline";
    work6.style.display = "inline";
}

function brand(){
    work1.style.display = "inline";
    work5.style.display = "inline";
    work2.style.display = "none";
    work3.style.display = "none";
    work4.style.display = "none";
    work6.style.display = "none";
}

function market(){
    work3.style.display = "inline";
    work6.style.display = "inline";
    work4.style.display = "none";
    work2.style.display = "none";
    work5.style.display = "none";
    work1.style.display = "none";
}

function plan(){
    work3.style.display = "none";
    work6.style.display = "none";
    work4.style.display = "inline";
    work2.style.display = "none";
    work5.style.display = "none";
    work1.style.display = "none";
}

function research(){
    work3.style.display = "none";
    work6.style.display = "none";
    work4.style.display = "none";
    work2.style.display = "inline";
    work5.style.display = "none";
    work1.style.display = "none";
}

//section :-testimonials
const testimonialsOneH3 = document.getElementById("testimonials-h3-1");
const testimonialsOneP = document.getElementsByClassName("occupation-1")

const testimonialsTwoH3 = document.getElementById("testimonials-h3-2");
const testimonialsTwoP = document.getElementsByClassName("occupation-2");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");




function funRadio1(){
    btn1.style.backgroundColor = "#155BD5";
    btn2.style.backgroundColor = "#B5CAEF";
    btn3.style.backgroundColor = "#B5CAEF";
    btn4.style.backgroundColor = "#B5CAEF";
    btn5.style.backgroundColor = "#B5CAEF";
    
    testimonialsOneH3.textContent = "Musharof Chowdhury";
    testimonialsOneP[0].textContent = "Web Entrepreneur";

    testimonialsTwoH3.textContent = "David Warner";
    testimonialsTwoP[0].textContent = "Web Developer";
}

function funRadio2(){
    btn2.style.backgroundColor = "#155BD5";
    btn1.style.backgroundColor = "#B5CAEF";
    btn3.style.backgroundColor = "#B5CAEF";
    btn4.style.backgroundColor = "#B5CAEF";
    btn5.style.backgroundColor = "#B5CAEF";

    testimonialsOneH3.textContent = "Jems Gilario";
    testimonialsOneP[0].textContent = "Graphics Designer";
}

function funRadio3(){
    btn3.style.backgroundColor = "#155BD5";
    btn1.style.backgroundColor = "#B5CAEF";
    btn2.style.backgroundColor = "#B5CAEF";
    btn4.style.backgroundColor = "#B5CAEF";
    btn5.style.backgroundColor = "#B5CAEF";
    
    testimonialsOneH3.textContent = "Naimur Rahman";
    testimonialsOneP[0].textContent = "Ui/UX Designer";
    
    testimonialsTwoH3.textContent = "Musharof Chowdhury";
    testimonialsTwoP[0].textContent = "Web Entrepreneur";
}
function funRadio4(){
    btn4.style.backgroundColor = "#155BD5";
    btn1.style.backgroundColor = "#B5CAEF";
    btn2.style.backgroundColor = "#B5CAEF";
    btn3.style.backgroundColor = "#B5CAEF";
    btn5.style.backgroundColor = "#B5CAEF";

    testimonialsOneH3.textContent = "David Warner";
    testimonialsOneP[0].textContent = "Web Developer";
}
function funRadio5(){
    btn5.style.backgroundColor = "#155BD5";
    btn1.style.backgroundColor = "#B5CAEF";
    btn2.style.backgroundColor = "#B5CAEF";
    btn3.style.backgroundColor = "#B5CAEF";
    btn4.style.backgroundColor = "#B5CAEF";

    testimonialsOneH3.textContent = "Jems Gilario";
    testimonialsOneP[0].textContent = "Graphics Designer";
}







