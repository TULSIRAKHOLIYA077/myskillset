const fruits = document.querySelector('#fruits');
const vegetables = document.querySelector('#vegetables');
const detailPera = document.querySelector('.detail-pera');
const detailHeading1 = document.querySelector('.detail-heading1');
const detailHeading2 = document.querySelector('.detail-heading2');

function prev1(){
    fruits.style.display = 'none';
    vegetables.style.display = 'inline';
    detailPera.innerHTML = 'High-Quality Organic Products';
    detailHeading1.innerHTML = 'VEGETABLES';
    detailHeading2.innerHTML = 'WITHOUT HARMFUL ADDITIVES';

}

function next1(){
    vegetables.style.display = 'none';
    fruits.style.display = 'inline';
    detailPera.innerHTML = 'Fresh Organic Produce';
    detailHeading1.innerHTML = 'FRUITS';
    detailHeading2.innerHTML = 'WITH LOTS OF VITAMINS';

}
//list :- home
function listAdd1(){
    const listItems = ['SMOOTHIE SHOP','FARM','FRUIT FARM','POULTRY FARM','WINERY','DAIRY FARM'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container1 = document.querySelector('#list-1');
    container1.appendChild(newList);  
    
    function exist(){
        if(container1){
            container1.innerHTML = '';
            container1.appendChild(newList);  
        }
    }
    exist();
    
    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}
function listAdd2(){
    const listItems = ['ABOUT US','WHAT WE OFFER','OUR TEAM','TESTIMONIALS','PRICING LIST'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container2 = document.querySelector('#list-2');
    container2.appendChild(newList);  

    function exist(){
        if(container2){
            container2.innerHTML = '';
            container2.appendChild(newList);  
        }
    }
    exist();
    
    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';
    
    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}
function listAdd3(){
    const listItems = ['GRID BLOG','BLOG LIST','BLOG POST'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container3 = document.querySelector('#list-3');
    container3.appendChild(newList);
    
    function exist(){
        if(container3){
            container3.innerHTML = '';
            container3.appendChild(newList);  
        }
    }
    exist();
    
    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';

    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}
function listAdd4(){
    const listItems = ['GRID GALLERY','GRID FULLWIDTH GALLERY','MASONRY GALLERY','MASONRY FULLWIDTH GALLERY'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container4 = document.querySelector('#list-4');
    container4.appendChild(newList); 

    function exist(){
        if(container4){
            container4.innerHTML = '';
            container4.appendChild(newList);  
        }
    }
    exist();
    
    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';

    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}
function listAdd5(){
    const listItems = ['TYPOGRAPHY','ICON LIST','PROGRESS BARS','CALLS TO ACTION','TABLES','FORMS'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container5 = document.querySelector('#list-5');
    container5.appendChild(newList); 

    function exist(){
        if(container5){
            container5.innerHTML = '';
            container5.appendChild(newList);  
        }
    }
    exist();
    
    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';

    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}
function listAdd6(){
    const listItems = ['ECWID SHOP','GRID SHOP','SHOP LIST','SINGLE PRODUCT','CART PAGE','CHECKOUT'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container6 = document.querySelector('#list-6');
    container6.appendChild(newList); 
    
    function exist(){
        if(container6){
            container6.innerHTML = '';
            container6.appendChild(newList);  
        }
    }
    exist();

    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';

    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

}
function aboutFarm(){
    listRemove();
}
function types(){
    listRemove();
}
function product(){
    listRemove();
}
function client(){
    listRemove();
}
function image(){
    listRemove();
}
function teeam(){
    listRemove();
}
function faq(){
    listRemove();
}
function characters(){
    listRemove();
}
function blogs(){
    listRemove();
}
const menuList = document.querySelector('nav .nav-down ul');
const closeBtn = document.querySelector('#close');
const menuBtn = document.querySelector('#menu');
function funMenu(){
    menuList.style.display = 'inline';
    closeBtn.style.display = 'inline';
    menuBtn.style.display = 'none';
}
function funClose(){
    menuList.style.display = 'none';
    menuBtn.style.display = 'inline';
    closeBtn.style.display = 'none';
}
function listRemove(){
    const container1 = document.querySelector('#list-1');
    container1.innerHTML = '';

    const container2 = document.querySelector('#list-2');
    container2.innerHTML = '';

    const container3 = document.querySelector('#list-3');
    container3.innerHTML = '';

    const container4 = document.querySelector('#list-4');
    container4.innerHTML = '';

    const container5 = document.querySelector('#list-5');
    container5.innerHTML = '';

    const container6 = document.querySelector('#list-6');
    container6.innerHTML = '';
}

const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const product5 = document.querySelector('.product-5');
const product6 = document.querySelector('.product-6');
const product7 = document.querySelector('.product-7');
const product8 = document.querySelector('.product-8');

function allPro(){
    document.querySelector('#all').style.color = '#76AA6F';
    document.querySelector('#bred').style.color = '#9B9B9B';
    document.querySelector('#frut').style.color = '#9B9B9B';
    document.querySelector('#veg').style.color = '#9B9B9B';
    product1.style.display = 'inline';
    product2.style.display = 'inline';
    product3.style.display = 'inline';
    product4.style.display = 'inline';
    product5.style.display = 'inline';
    product6.style.display = 'inline';
    product7.style.display = 'inline';
    product8.style.display = 'inline';
}
function veges(){
    document.querySelector('#bred').style.color = '#9B9B9B';
    document.querySelector('#frut').style.color = '#9B9B9B';
    document.querySelector('#all').style.color = '#9B9B9B';
    document.querySelector('#veg').style.color = '#76AA6F';
    product1.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'none';
    product8.style.display = 'none';
}
function fruitss(){
    document.querySelector('#bred').style.color = '#9B9B9B';
    document.querySelector('#veg').style.color = '#9B9B9B';
    document.querySelector('#all').style.color = '#9B9B9B';
    document.querySelector('#frut').style.color = '#76AA6F';
    product1.style.display = 'inline';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'none';
    product6.style.display = 'inline';
    product7.style.display = 'none';
    product8.style.display = 'none';
}
function breads(){
    document.querySelector('#all').style.color = '#9B9B9B';
    document.querySelector('#frut').style.color = '#9B9B9B';
    document.querySelector('#veg').style.color = '#9B9B9B';
    document.querySelector('#bred').style.color = '#76AA6F';
    product1.style.display = 'none';
    product2.style.display = 'none';
    product3.style.display = 'none';
    product4.style.display = 'none';
    product5.style.display = 'inline';
    product6.style.display = 'none';
    product7.style.display = 'none';
    product8.style.display = 'inline';
}

// section :- clients
const katep = document.querySelector('.katep');
const kateimg = document.querySelector('.kateimg');
const katename = document.querySelector('.katename');

const janep = document.querySelector('.janep');
const janeimg = document.querySelector('.janeimg');
const janename = document.querySelector('.janename');

const billp = document.querySelector('.billp');
const billimg = document.querySelector('.billimg');
const billname = document.querySelector('.billname');

function prev2(){
    if(janep && janeimg && janename){
        janep.style.display = 'none';
        janeimg.style.display = 'none';
        janename.style.display = 'none';

        katep.style.display = 'inline';
        kateimg.style.display = 'inline';
        katename.style.display = 'inline';
    }
}

function next2(){
    if(katep && kateimg && katename){
        katep.style.display = 'none';
        kateimg.style.display = 'none';
        katename.style.display = 'none';

        janep.style.display = 'inline';
        janeimg.style.display = 'inline';
        janename.style.display = 'inline';
    }
}

function clientDot1(){
    katep.style.display = 'inline';
    kateimg.style.display = 'inline';
    katename.style.display = 'inline';

    janep.style.display = 'none';
    janeimg.style.display = 'none';
    janename.style.display = 'none';

    billp.style.display = 'none';
    billimg.style.display = 'none';
    billname.style.display = 'none';

    dot1.style.backgroundColor = '#79AC72';
    dot2.style.backgroundColor = '#D7D7D7';
    dot3.style.backgroundColor = '#D7D7D7';

}
function clientDot2(){
    katep.style.display = 'none';
    kateimg.style.display = 'none';
    katename.style.display = 'none';

    janep.style.display = 'inline';
    janeimg.style.display = 'inline';
    janename.style.display = 'inline';

    billp.style.display = 'none';
    billimg.style.display = 'none';
    billname.style.display = 'none';

    dot2.style.backgroundColor = '#79AC72';
    dot3.style.backgroundColor = '#D7D7D7';
    dot1.style.backgroundColor = '#D7D7D7';
}
function clientDot3(){
    katep.style.display = 'none';
    kateimg.style.display = 'none';
    katename.style.display = 'none';

    janep.style.display = 'none';
    janeimg.style.display = 'none';
    janename.style.display = 'none';

    billp.style.display = 'inline';
    billimg.style.display = 'inline';
    billname.style.display = 'inline';

    dot3.style.backgroundColor = '#79AC72';
    dot1.style.backgroundColor = '#D7D7D7';
    dot2.style.backgroundColor = '#D7D7D7';
}

// section :- FAQ-left
const dot1 = document.querySelector('.fruit-dot-1');
const dot2 = document.querySelector('.fruit-dot-2');
const dot3 = document.querySelector('.fruit-dot-3');

const fruit1 = document.querySelector('.fruit-1');
const fruit2 = document.querySelector('.fruit-2');
const fruit3 = document.querySelector('.fruit-3');


function dot_1(){
    dot1.style.backgroundColor = '#79AC72';
    dot2.style.backgroundColor = '#D7D7D7';
    dot3.style.backgroundColor = '#D7D7D7';
    fruit1.style.display = 'inline';
    fruit2.style.display = 'none';
    fruit3.style.display = 'none';
}
function dot_2(){
    dot2.style.backgroundColor = '#79AC72';
    dot3.style.backgroundColor = '#D7D7D7';
    dot1.style.backgroundColor = '#D7D7D7';
    fruit1.style.display = 'none';
    fruit2.style.display = 'inline';
    fruit3.style.display = 'none';
}
function dot_3(){
    dot3.style.backgroundColor = '#79AC72';
    dot1.style.backgroundColor = '#D7D7D7';
    dot2.style.backgroundColor = '#D7D7D7';
    fruit1.style.display = 'none';
    fruit2.style.display = 'none';
    fruit3.style.display = 'inline';
}

// section :- FAQ-right
const ans1 = document.querySelector('.ans1');
const i1 = document.querySelector('#i-1'); 
const ans2 = document.querySelector('.ans2');
const i2 = document.querySelector('#i-2'); 
const ans3 = document.querySelector('.ans3');
const i3 = document.querySelector('#i-3'); 

function toggleDisplay1() {
    if (ans1.style.display === 'none' || ans1.style.display === '') {
        ans1.style.display = 'inline';
        i1.style.backgroundColor = '#E9DA5D';
        i1.style.color = '#2D2B1D';
    } else {
        ans1.style.display = 'none';
        i1.style.backgroundColor = '#FFFFFF';
        i1.style.color = '#76AA6F';
    }
    ans2.style.display = 'none';
    i2.style.backgroundColor = '#FFFFFF';
    i2.style.color = '#76AA6F';

    ans3.style.display = 'none';
    i3.style.backgroundColor = '#FFFFFF';
    i3.style.color = '#76AA6F';
}
function toggleDisplay2() {
    if (ans2.style.display === 'none' || ans2.style.display === '') {
        ans2.style.display = 'inline';
        i2.style.backgroundColor = '#E9DA5D';
        i2.style.color = '#2D2B1D';
    } else {
        ans2.style.display = 'none';
        i2.style.backgroundColor = '#FFFFFF';
        i2.style.color = '#76AA6F';
    }
    ans1.style.display = 'none';
    i1.style.backgroundColor = '#FFFFFF';
    i1.style.color = '#76AA6F';

    ans3.style.display = 'none';
    i3.style.backgroundColor = '#FFFFFF';
    i3.style.color = '#76AA6F';
}
function toggleDisplay3() {
    if (ans3.style.display === 'none' || ans3.style.display === '') {
        ans3.style.display = 'inline';
        i3.style.backgroundColor = '#E9DA5D';
        i3.style.color = '#2D2B1D';
    } else {
        ans3.style.display = 'none';
        i3.style.backgroundColor = '#FFFFFF';
        i3.style.color = '#76AA6F';
    }
    ans1.style.display = 'none';
    i1.style.backgroundColor = '#FFFFFF';
    i1.style.color = '#76AA6F';

    ans2.style.display = 'none';
    i2.style.backgroundColor = '#FFFFFF';
    i2.style.color = '#76AA6F';
}

// section :- character 
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

const dotC1 = document.querySelector('.dot-c-1');
const dotC2 = document.querySelector('.dot-c-2');
const dotC3 = document.querySelector('.dot-c-3');

function characterDot1(){
    dotC1.style.backgroundColor = '#79AC72';
    dotC2.style.backgroundColor = '#D7D7D7';
    dotC3.style.backgroundColor = '#D7D7D7';
    img1.style.display = 'inline';
    img2.style.display = 'inline';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
}
function characterDot2(){
    dotC2.style.backgroundColor = '#79AC72';
    dotC3.style.backgroundColor = '#D7D7D7';
    dotC1.style.backgroundColor = '#D7D7D7';
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'inline';
    img4.style.display = 'inline';
    img5.style.display = 'none';
}
function characterDot3(){
    dotC3.style.backgroundColor = '#79AC72';
    dotC1.style.backgroundColor = '#D7D7D7';
    dotC2.style.backgroundColor = '#D7D7D7';
    img1.style.display = 'inline';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'inline';
}





