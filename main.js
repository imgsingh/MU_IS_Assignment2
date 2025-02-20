//https://github.com/public-apis/public-apis
//https://openlibrary.org/subjects/ebooks
//https://bulma.io/

//hex color genrator coolors






$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})