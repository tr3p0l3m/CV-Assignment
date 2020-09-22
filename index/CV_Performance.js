'use strict'
const init = function(e){
    document.getElementById("name").innerHTML = localStorage.getItem('name');
    document.getElementById("gender").innerHTML = localStorage.getItem('gender');
    document.getElementById("number").innerHTML = localStorage.getItem('phone_number');
    document.getElementById("email").innerHTML = localStorage.getItem('email');
    document.getElementById("address").innerHTML = localStorage.getItem('address');
}
document.addEventListener('DOMContentLoaded',function(){
    init();
});