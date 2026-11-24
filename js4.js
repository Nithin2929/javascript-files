//Access the Element and store in variable
var head1=document.getElementById('head1');
head1.style.textAlign='center';
head1.style.color="red";
head1.textContent='Hai Every one';
let group = document.getElementById('grp1');
group.innerHTML=` <p>Hello Guys Nice too meet you </p>`;
var list = document.getElementsByClassName("lichild");
list[0].textContent='banana';
list[2].style.backgroundColor='lightblue';
var par=document.getElementsByTagName('p');

par[0].style.fontFamily='Calibri';
par[1].style.color='yellow';
var query1=document.querySelector('input[type=date');
query1.style.backgroundColor='brown'
var query1=document.querySelector('.lichild');
query1.style.backgroundColor='green'