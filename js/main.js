

//appendChild h1 to a div
h1Tag2.appendChild(h1TextNode);
document.getElementById('myDivId2').appendChild(h1Tag2);

//created a function with a button to change an image to another image
function changeImgSrc() {
    var image = document.getElementById('img1');
    
    image.src ='img/tv2.jpg';
    image.alt = 'people watching tv';
};