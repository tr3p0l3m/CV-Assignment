'use strict'
const init = function(e){
    document.getElementById("name").innerHTML = localStorage.getItem('name');
}
document.addEventListener('DOMContentLoaded',function(){
    init();
});