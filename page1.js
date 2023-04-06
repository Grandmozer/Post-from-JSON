let div = document.getElementById('cards');
let head = document.getElementById('head');
div.classList.add('container-list-advantages');

let one = document.getElementById('page1');
let two = document.getElementById('page2');
let three = document.getElementById('page3');

const numberButton = document.createElement('p');
const numberButtonBotom = document.createElement('p');
const pure = document.getElementById('numberPage');

const request = new XMLHttpRequest();

function paramsURL(page){
    const params = new URLSearchParams({ page: page }).toString();
    const param = `https://gorest.co.in/public-api/posts?${params}`;
    request.open('GET',param);
    request.responseType = 'json';
    request.send();

    numberButtonBotom.textContent = `Страница: ${Number(page)}`
    numberButton.textContent = `Страница: ${Number(page)}`
    head.appendChild(numberButton);
    pure.appendChild(numberButtonBotom);
    }

paramsURL(1);

request.onload = function() {
    let someText = request.response;
    renderPage(someText);
}
function textContentBtn(){
if(one.textContent <= 1 && two.textContent <= 2 && three.textContent <= 3 ){
    one.textContent = 1;
    two.textContent = 2;
    three.textContent = 3;
};
if(one.textContent >= 8 && two.textContent >= 9 && three.textContent >= 10){
    one.textContent = 8;
    two.textContent = 9;
    three.textContent = 10;
}; 
}

one.addEventListener('click',() => {
    let cards = document.querySelectorAll('article');
    
    for(let i = 0; i< cards.length ; i++ ){
        cards[i].outerHTML = "";
    }
        paramsURL(one.textContent);
    
    one.textContent = Number(one.textContent)-1;
    two.textContent =  Number(two.textContent)-1;
    three.textContent =  Number(three.textContent)-1;
    textContentBtn()
});

two.addEventListener('click',() => {
    let cards = document.querySelectorAll('article');
    
    for(let i = 0; i< cards.length ; i++ ){
        cards[i].outerHTML = "";
    }

    paramsURL(two.textContent)
} );

three.addEventListener('click',() => {
    let cards = document.querySelectorAll('article');
    
    for(let i = 0; i< cards.length ; i++ ){
        cards[i].outerHTML = "";
    }

    paramsURL(three.textContent);

    one.textContent = Number(one.textContent)+1;
    two.textContent =  Number(two.textContent)+1;
    three.textContent =  Number(three.textContent)+1;
    textContentBtn()
} );

function renderPage(jsonObj) {
    let o = jsonObj.data;

    for(let i = 0; i < o.length; i++){

        let myLink = document.createElement('a');
        let myArticle = document.createElement('article');
        let img = document.createElement('img');
        let myH5 = document.createElement('h5');
        let id = o[i].id;

        myArticle.setAttribute("id",id);
        myLink.setAttribute("id",id);
        myH5.setAttribute("id",id);
        img.setAttribute("id",id);

        myLink.setAttribute("href","page2.html");
        img.classList.add('card-img-top');
        myArticle.classList.add('indent','width-card','card','border-secondary');
        myH5.classList.add('card-title','link-dark');

      
        img.src = 'https://via.placeholder.com/600/224566';
        myH5.textContent = o[i].title;

        myArticle.append(myLink);
        myLink.append(img);
        myLink.append(myH5);
        
        div.append(myArticle);
    }
};

setTimeout( function checkId(){
let buttons = document.querySelectorAll('p');
buttons.forEach(btn =>{
    addEventListener('click',addLocalStarage)
})

function addLocalStarage(e){
    let number = numberButton.textContent.replace(/[^0-9]/gi,'');

    localStorage.setItem('id', JSON.stringify(Number(e.target.id)));
    localStorage.setItem('page', JSON.stringify(Number(number)
    ));
}
});
