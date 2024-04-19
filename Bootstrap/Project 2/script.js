const homePage1 = document.querySelector('.home-page-1');
const homePage2 = document.querySelector('.home-page-2');
const homePage3 = document.querySelector('.home-page-3');
const angleLeft = document.querySelector('.angle-left');
const angleRight = document.querySelector('.angle-right');

const slider = [homePage1, homePage2, homePage3];

let currentIndex = 0;

angleRight.addEventListener('click', () => {
    currentIndex += 1; 
    if (currentIndex < slider.length) {
        slider.forEach(page => page.style.display = 'none');
        slider[currentIndex].style.display = 'flex';
    } else {
        currentIndex = (slider.length-1); 
        slider[currentIndex].style.display = 'flex';
}
});

angleLeft.addEventListener('click', () => {
    currentIndex -= 1; 
    if (currentIndex > 0) {
        slider.forEach(page => page.style.display = 'none');
        slider[currentIndex].style.display = 'flex';
    } else {
        currentIndex = 0; 
        slider.forEach(page => page.style.display = 'none');
        slider[currentIndex].style.display = 'flex';
}
});

// section :- change-colors 
const setting = document.querySelector('.change-colors');
const allColors = document.querySelector('.all-colors');
const blue = document.querySelector('.blue');
const turquoise = document.querySelector('.turquoise');
const darkCyan = document.querySelector('.dark-cyan');
const dodgerBlue = document.querySelector('.Dodger-Blue');
const carrotOrange = document.querySelector('.Carrot-Orange');
const grannySmithApple = document.querySelector('.Granny-Smith-Apple');
const blush = document.querySelector('.Blush');
const home = document.querySelector('.home');
const bgList = document.querySelectorAll('.bg-list');
const dropdownMenu = document.querySelectorAll('.dropdown-menu a');
const hp3Btn = document.querySelectorAll('.btn');
const angles = document.querySelectorAll('.angles');

setting.addEventListener('click',()=>{
    if (allColors.style.display === 'none' || allColors.style.display === '') {
        allColors.style.display = 'inline';
    } else {
        allColors.style.display = 'none';
    }
})

blue.addEventListener('click',()=>{
    funApply('#727CB6');
})
turquoise.addEventListener('click',()=>{
    funApply('#40E0D0');
})
darkCyan.addEventListener('click',()=>{
    funApply('#008B8B');
})
dodgerBlue.addEventListener('click',()=>{
    funApply('#3498DB');
})
carrotOrange.addEventListener('click',()=>{
    funApply('#E67E22');
})
grannySmithApple.addEventListener('click',()=>{
    funApply('#8CBE45');
})
blush.addEventListener('click',()=>{
    funApply('#ED687C');
})




function funApply(color){
    home.style.backgroundColor = color;
    bgList.forEach(list =>{
        list.addEventListener('mouseenter',()=>{
            list.style.backgroundColor = color;
        })
        list.addEventListener('mouseleave',()=>{
            list.style.backgroundColor = '#ffffff';
            home.style.backgroundColor = color;
        })
    })
    dropdownMenu.forEach(menu =>{
        menu.addEventListener('mouseenter',()=>{
            menu.style.backgroundColor = color;
        })
        menu.addEventListener('mouseleave',()=>{
            menu.style.backgroundColor = '#ffffff';
        })
    })
    hp3Btn.forEach(btn =>{
        btn.style.backgroundColor = color;
        btn.addEventListener('mouseenter',()=>{
            btn.style.backgroundColor = '#464D71';
            // btn.style.color = color;

        })
        btn.addEventListener('mouseleave',()=>{
            btn.style.backgroundColor = color;
            // btn.style.color = '#ffffff';

        })
    })
    // hp3Btn.style.backgroundColor = color;
    angles.forEach(angle =>{
        angle.addEventListener('mouseenter',()=>{
            angle.style.borderColor = color;
            angle.style.color = color;

        })
        angle.addEventListener('mouseleave',()=>{
            angle.style.borderColor = '#ffffff';
            angle.style.color = '#ffffff';

        })

    })

}





