title = document.getElementById('title');
subtitle = document.getElementById('subtitle');
text = document.getElementById('text');

const page = window.localStorage.getItem('page');
const id = window.localStorage.getItem('id');

const request = new XMLHttpRequest();

function paramsURL(page){
    const params = new URLSearchParams({ page: page }).toString();
    const param = `https://gorest.co.in/public-api/posts?${params}`;
    request.open('GET',param);
    request.responseType = 'json';
    request.send();
    }
paramsURL(page);

request.onload = function() {
    let someText = request.response;
    renderPost(someText);
}

function renderPost(jsonObj) {
    let o = jsonObj.data;
for(i = 0; i < o.length; i++ ){
    if(o[i].id == id){
        subtitle.textContent = o[i].title;
        text.textContent = o[i].body;
    }
}}
