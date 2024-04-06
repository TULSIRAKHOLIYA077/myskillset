// id :- list-3 
const parentElement = document.getElementById('list-3');

function funList3Add(){
    const listItems = ['Faculty','Student','Parent'];
    const newList = document.createElement('ul');

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container = document.querySelector('#display-1');
    container.appendChild(newList);    
}
function funList3Remove() {
    const container = document.querySelector('#display-1');
    container.innerHTML = '';
}

// id :- list-4 
const mainElement = document.getElementById('list-4');

function funList4Add(){
    const listItems = ['Online Payment','AICTE','JIM Library','MDP','FDP'];
    const newList = document.createElement('ul');

    listItems.forEach(item=>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });

    const container = document.querySelector('#display-2');
    container.appendChild(newList);
}
function funList4Remove() {
    const container = document.querySelector('#display-2');
    container.innerHTML = '';
}

// id :- display-one 
const parentDisplay = document.getElementById('list-one');

function listOneAdd(){
    const listItems = ['JESUITS','OUR COLLEGE','JIM','DIRECTOR MESSAGE','BOARD OF MANAGEMENT','BOARD OF STUDIES','GOLD CRAFTERS'];
    const newList = document.createElement('ul');

    listItems.forEach(item=>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);

    });
    const container = document.querySelector('#display-one');
    container.appendChild(newList);


}
function listOneRemove() {
    const container = document.querySelector('#display-one');
    container.innerHTML = '';
}

// id :- display-two
const parentEllement = document.getElementById('list-two');

function listTwoAdd(){
    const newList = document.createElement('ul');
    const listItems = ['MBA','SYLLABUS','COURSE ALLOTMENT','PH.D. / RESEARCH','OVERVIEW','RESEARCH ADVISORS','GOVERNMENT FUNDED PROJECTS/SEMINARS']

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    
    const container = document.getElementById('display-two');
    container.appendChild(newList);
}
function listTwoRemove() {
    const container = document.querySelector('#display-two');
    container.innerHTML = '';
}

// id :- list-four 
const parentEleement = document.getElementById('list-four');

function listFourAdd(){
    const newList = document.createElement('ul');
    const listItems = ['Faculty','Staff','Guest Speakers','Visiting Faculty'];

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    const container = document.getElementById('display-four');
    container.appendChild(newList);
}
function listFourRemove() {
    const container = document.querySelector('#display-four');
    container.innerHTML = '';
}

// id :- list-five 
const parentElemment = document.getElementById('list-five');

function listFiveAdd(){
    const newList = document.createElement('ul');
    const listItems = ['The Campus','Computer Lab','The Library','Auditorium','Board Room'];

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    const container = document.getElementById('display-five');
    container.appendChild(newList);
}
function listFiveRemove() {
    const container = document.querySelector('#display-five');
    container.innerHTML = '';
}

// id :- list-six 
const parentElemeent = document.getElementById('list-six');

function listSixAdd(){
    const newList = document.createElement('ul');
    const listItems = ['Campus Ministry','SAC','Club Activities','Co-Curricular Activites','Shepherd','JIMNESIA','JIM Spire'];

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    const container = document.getElementById('display-six');
    container.appendChild(newList);
}
function listSixRemove() {
    const container = document.querySelector('#display-six');
    container.innerHTML = '';
}

// id :- list-seven 
const parentElemennt = document.getElementById('list-six');

function listSevenAdd(){
    const newList = document.createElement('ul');
    const listItems = ['Director Communique','Placement Statistics','Our Recruiters','Placement Brochure','Placed Students'];

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    const container = document.getElementById('display-seven');
    container.appendChild(newList);
}
function listSevenRemove() {
    const container = document.querySelector('#display-seven');
    container.innerHTML = '';
}

// id :- list-eight 
const parentElementt = document.getElementById('list-eight');

function listEightAdd(){
    const newList = document.createElement('ul');
    const listItems = ['Photo Gallery','Video Gallery'];

    listItems.forEach(item =>{
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newList.appendChild(listItem);
    });
    const container = document.getElementById('display-eight');
    container.appendChild(newList);
}
function listEightRemove() {
    const container = document.querySelector('#display-eight');
    container.innerHTML = '';
}

// radio-btn
const titleElement = document.getElementById("title");
const headElement = document.getElementById("heading");
const peraElement = document.getElementById("pera");
function funRadio1(){
    titleElement.textContent = "GREEN CAMPUS";
    headElement.textContent = "JIM is a sustainable green campus with a more dynamic ambience that energizes the students with positive vibes.";
    peraElement.textContent = "JIM is a sustainable green campus with a more dynamic ambience that energizes the students with positive vibes.";
}
function funRadio2(){
    titleElement.textContent = "ECOSYSTEM OF LEARNING";
    headElement.textContent = "Student Advisory Council";
    peraElement.textContent = "JIM in a sylvan atmosphere";
}
function funRadio3(){
    titleElement.textContent = "STUDENT ADVISORY COUNCIL";
    headElement.textContent = "Student Advisory Council";
    peraElement.textContent = "Building relationships within teams, defining identities and achieving tasks effectively.";
}
function funRadio4(){
    titleElement.textContent = "MENTORING";
    headElement.textContent = "Mentoring is an important activity in the learning process of JIM.";
    peraElement.textContent = "Mentoring is an important activity in the learning process of JIM.";
}
function funRadio5(){
    titleElement.textContent = "ESPRIT DE CORPS";
    headElement.textContent = "Teamwork and Cooperation are consistently practiced by the JIM students.";
    peraElement.textContent = "Teamwork and Cooperation are consistently practiced by the JIM students.";
}
function funRadio6(){
    titleElement.textContent = "THE INSTALLATION OF THE NEW STATUE OF ST. IGNATIUS OF LOYOLA";
    headElement.textContent = "Blessed by Rev. Dr.M.Pavulraj SJ,Rector, St.Joseph's Institutions";
    peraElement.textContent = "Blessed by Rev. Dr.M.Pavulraj SJ,Rector, St.Joseph's Institutions";
}
























