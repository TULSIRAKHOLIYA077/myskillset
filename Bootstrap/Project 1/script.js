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
    const cols = document.querySelectorAll('.character-center .col');
    const allI = document.querySelectorAll('.character-center .col i');
    const allA = document.querySelectorAll('.character-center .col a');
    const breakerLine = document.querySelector('.breakerline');
    const breaker = document.querySelector('.breaker');



    header.style.backgroundColor = color;
    home.style.backgroundColor = color;
    aboutPage.style.backgroundColor = color;
    breakerLine.style.color = color;
    breaker.style.backgroundColor = color;


    cols.forEach(col => {
        col.style.borderColor = color;
        col.style.boxShadow = 'none';

        col.addEventListener('mouseenter', () => {
            const lines = col.querySelectorAll('.line');// if i write document.querySelectorAll all line will be caught simulteniasly and if i write col.querySelectorAll it will also catch all line but in specific col
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
        // Add event listener for 'mouseenter' event
        btnGroup.addEventListener('mouseenter', () => {
            btnGroup.style.backgroundColor = color;
        });
    });

    btnGroups.forEach(btnGroup => {
        // Add event listener for 'mouseenter' event
        btnGroup.addEventListener('mouseleave', () => {
        btnGroup.style.backgroundColor = '';
        home.style.backgroundColor = color;
        });
    });

}

// character 
const port1 = document.querySelector('.port-1');
const port2 = document.querySelector('.port-2');
const port3 = document.querySelector('.port-3');
const port6 = document.querySelector('.port-6');
const port7 = document.querySelector('.port-7');
const port8 = document.querySelector('.port-8');
const leftTurn = document.querySelector('#left-turn');
const rightTurn = document.querySelector('#right-turn');

function funRightTurn(){
    port1.style.display = 'none';
    port2.style.display = 'none';
    port3.style.display = 'none';
    port6.style.display = 'block';
    port7.style.display = 'block';
    port8.style.display = 'block';

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
function funLeftTurn(){
    port1.style.display = 'block';
    port2.style.display = 'block';
    port3.style.display = 'block';
    port6.style.display = 'none';
    port7.style.display = 'none';
    port8.style.display = 'none';

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


  