
//handel searchfor text and search button
let searchFor = document.getElementById('searchFor');
let searchBtn = document.getElementById('searchBtn');
//add event listener to search button
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    refreshData();
    displayData(searchFor.value, (state, response) => {
        if (state !== null) displayError(state);
        else {
            renderData(response);
        }
    });

});

//display Error
function displayError(state){
    let container = document.querySelector('.form');
    let errorDialog=document.createElement('dialog');
    errorDialog.className='errorDialog';
    container.appendChild(errorDialog);
    let errorMessage=createParagraph(errorDialog,state,'error');
    errorDialog.showModal();
    setTimeout(()=>{errorDialog.close();

    },1000);
}   
//refresh data
function refreshData() {
    let container = document.getElementById('container');
    container.innerHTML = '';

}
//render data
function renderData(response) {
    let container = document.getElementById('container');
    let figure = document.createElement('figure');
    let title = createParagraph(container, response.Title, 'title');
    container.appendChild(figure);
    let Poster = createImage(figure, response.Poster, 'poster');
    let plot = createParagraph(figure, response.Plot, 'plot');
}
//create image
function createImage(container, src, imgClass) {
    let image = document.createElement('img');
    image.src = src;
    image.className = imgClass;
    container.appendChild(image);
    return image;
}
//create paragraph
function createParagraph(container, textContent, pClass) {
    let p = document.createElement('p');
    p.textContent = textContent;
    p.className = pClass;
    container.appendChild(p);
    return p;
}