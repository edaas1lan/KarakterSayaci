const textarea=document.querySelector('textarea');
const totalcounter=document.getElementById('totalcounter')
const remainingcounter=document.getElementById('remainingcounter');

textarea.addEventListener('keyup',updatecounter)

function updatecounter(){
totalcounter.textContent=textarea.value.length;
remainingcounter.textContent=textarea.getAttribute('maxlength') -textarea.value.length;
}
updatecounter();;//herhangi bir deger girmeden baslangıctaki degerleri ekrana yazdrırıcak