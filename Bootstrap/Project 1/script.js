// header 
function toggleSearch() {
    const searchBar = document.querySelector('.searchbar');
    
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'inline';
    } else {
        searchBar.style.display = 'none';
    }
}

function funMenu(){
    const navigation = document.querySelector('.navigation');

    if (navigation.style.display === 'none' || navigation.style.display === '') {
        navigation.style.display = 'inline';
    } else {
        navigation.style.display = 'none';
    }
}

// all-colors 

function funSetting(){
    const colorss = document.querySelector('.all-colors');

    if(colorss.style.display === 'none' || colorss.style.display === ''){
        colorss.style.display = 'block';
    } 
    else{
        colorss.style.display = 'none';
    }
}

function funColors(color){
    const header = document.querySelector('#header');
    const home = document.querySelector('.home');
    const aboutPage = document.querySelector('.about-page a');
    const cols = document.querySelectorAll('.character-center .characters');
    const allI = document.querySelectorAll('.character-center .characters i');
    const allA = document.querySelectorAll('.character-center .characters a');
    const breakerLine = document.querySelector('.breakerline');
    const breaker = document.querySelector('.breaker');
    const company = document.querySelector('.company');



    header.style.backgroundColor = color;
    home.style.backgroundColor = color;
    aboutPage.style.backgroundColor = color;
    breakerLine.style.color = color;
    breaker.style.backgroundColor = color;
    company.style.color = color;


    cols.forEach(col => {
        col.style.borderColor = color;
        col.style.boxShadow = 'none';

        col.addEventListener('mouseenter', () => {
            const lines = col.querySelectorAll('.line');
            const iS = col.querySelectorAll('i');
            lines.forEach(line => {
                line.style.backgroundColor = color;
            });
            iS.forEach(i => {
                i.style.backgroundColor = color;
                i.style.color = 'white';
                });
        });
    
        col.addEventListener('mouseleave', () => {
            const lines = col.querySelectorAll('.line');
            const iS = col.querySelectorAll('i');

            lines.forEach(line => {
                line.style.backgroundColor = 'white';
            });
            iS.forEach(i => {
                i.style.backgroundColor = 'white';
                i.style.color = color;
            });
        });
    });


    allI.forEach(i => {
        i.style.color = color;
        i.style.borderColor = color;
        i.addEventListener('mouseenter',()=>{
            i.style.backgroundColor = color;
            i.style.color = 'white';
        });
        i.addEventListener('mouseleave',()=>{
            i.style.backgroundColor = 'white';
            i.style.color = color;
        });
    });

    allA.forEach(a => {
        a.style.color = color;
    });

    const btnGroups = document.querySelectorAll('.btn-group a');
    btnGroups.forEach(btnGroup => {
        btnGroup.addEventListener('mouseenter', () => {
            btnGroup.style.backgroundColor = color;
        });
    });

    btnGroups.forEach(btnGroup => {
        btnGroup.addEventListener('mouseleave', () => {
        btnGroup.style.backgroundColor = '';
        home.style.backgroundColor = color;
        });
    });

}

// character 

const images = document.querySelectorAll('.character-bottom img');
const leftTurn = document.querySelector('#left-turn');
const rightTurn = document.querySelector('#right-turn');

let currentIndex = 0;

function showImages(start, end) {
    images.forEach((img, index) => {
        if (index >= start && index <= end) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function funRightTurn() {
    if (window.innerWidth <= 767) {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            rightTurn.style.backgroundColor = '#555555';
            leftTurn.style.backgroundColor = '#BDC3C7';
            if(currentIndex === images.length - 1){
                rightTurn.style.backgroundColor = '#F2F2F2';
                rightTurn.style.color = '#7D6873';
            }
        }
        showImages(currentIndex, currentIndex);
    } 
    else if (window.innerWidth > 767 && window.innerWidth <= 991) {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            rightTurn.style.backgroundColor = '#F2F2F2';
            rightTurn.style.color = '#7D6873';
            leftTurn.style.backgroundColor = '#BDC3C7';
        }
        showImages(3, 5);
    } 
    else if (window.innerWidth > 991 && window.innerWidth <= 1199) {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            rightTurn.style.backgroundColor = '#F2F2F2';
            rightTurn.style.color = '#7D6873';
            leftTurn.style.backgroundColor = '#BDC3C7';
        }
        showImages(4, 8);
    } 
    else {
        showImages(3, 7); 
        rightTurn.style.backgroundColor = '#F2F2F2';
        rightTurn.style.color = '#7D6873';
        rightTurn.style.cursor = 'default';
        leftTurn.style.backgroundColor = '#BDC3C7';
        leftTurn.style.color = '#F2F1EA';
        leftTurn.addEventListener('mouseenter', () =>{
            leftTurn.style.cursor = 'pointer';
            leftTurn.style.backgroundColor = '#555555';
        });
    
    }

}

function funLeftTurn() {
    if (window.innerWidth <= 767) {
        if (currentIndex > 0) {
            currentIndex--;
            leftTurn.style.backgroundColor = '#555555';
            rightTurn.style.backgroundColor = '#BDC3C7';
            if(currentIndex === 0){
                leftTurn.style.backgroundColor = '#F2F2F2';
                leftTurn.style.color = '#7D6873';
            }
        }
        showImages(currentIndex, currentIndex);
    }
    else if (window.innerWidth > 767 && window.innerWidth <= 991) {
        if (currentIndex > 0) {
            currentIndex--;
            leftTurn.style.backgroundColor = '#F2F2F2';
            rightTurn.style.backgroundColor = '#BDC3C7';
        }
        showImages(0, 2);
    }
    else if (window.innerWidth > 991 && window.innerWidth <= 1199) {
        if (currentIndex > 0) {
            currentIndex--;
            leftTurn.style.backgroundColor = '#F2F2F2';
            rightTurn.style.backgroundColor = '#BDC3C7';
        }
        showImages(0, 3);
    }
     else {
        showImages(0, 4);
        leftTurn.style.backgroundColor = '#F2F2F2';
        leftTurn.style.color = '#7D6873';
        leftTurn.style.cursor = 'default';
        rightTurn.style.backgroundColor = '#BDC3C7';
        rightTurn.style.color = '#F2F1EA';
        rightTurn.addEventListener('mouseenter', () =>{
             rightTurn.style.cursor = 'pointer';
             rightTurn.style.backgroundColor = '#555555';
        });
    
    }

}

if (window.innerWidth <= 767) {
    showImages(0, 0); 
} 
else if (window.innerWidth > 767 && window.innerWidth <= 991) {
    showImages(0, 2); 
} 
else if (window.innerWidth > 991 && window.innerWidth <= 1199) {
    showImages(0, 3); 
} 
else {
    showImages(0, 4);
}

rightTurn.addEventListener('click', funRightTurn);
leftTurn.addEventListener('click', funLeftTurn);

window.addEventListener('resize', () => {
    if (window.innerWidth <= 767) {
        showImages(currentIndex, currentIndex); 
    }
    else if (window.innerWidth > 767 && window.innerWidth <= 991) {
        showImages(currentIndex - 1, currentIndex + 1); 
    }
    else if (window.innerWidth > 991 && window.innerWidth <= 1199) {
        showImages(0,3); 
    }
     else {
        showImages(0, 4); 
    }
});

// members
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const peraContent = document.querySelector('.pera-content');
const memberImage = document.querySelector('.member img');
const company = document.querySelector('.company');

dot1.addEventListener('click',()=>{
    peraContent.innerHTML = "Donec convallis, metus nec tempus aliquet, nunc metus adipiscing leo, a lobortis nisi dui ut odio. Nullam ultrices, eros accumsan vulputate faucibus, turpis tortor dictum.";
    memberImage.src = "./images/1.jpg";
    company.innerHTML = "Company Inc.";
    dot1.style.backgroundColor = "white";
    dot2.style.backgroundColor = "transparent";
    dot3.style.backgroundColor = "transparent";
})

dot2.addEventListener('click',()=>{
    peraContent.innerHTML = "Metus aliquet tincidunt metus, sit amet mattis lectus sodales ac. Suspendisse rhoncus dictum eros, ut egestas eros luctus eget. Nam nibh sem, mattis et feugiat ut, porttitor nec risus.";
    memberImage.src = "./images/2.jpg";
    company.innerHTML = "Leopard";
    dot1.style.backgroundColor = "transparent";
    dot2.style.backgroundColor = "white";
    dot3.style.backgroundColor = "transparent";
})

dot3.addEventListener('click',()=>{
    peraContent.innerHTML = "Nunc aliquet tincidunt metus, sit amet mattis lectus sodales ac. Suspendisse rhoncus dictum eros, ut egestas eros luctus eget. Nam nibh sem, mattis et feugiat ut, porttitor nec risus.";
    memberImage.src = "./images/3.jpg";
    dot1.style.backgroundColor = "transparent";
    dot2.style.backgroundColor = "transparent";
    dot3.style.backgroundColor = "white";
})



