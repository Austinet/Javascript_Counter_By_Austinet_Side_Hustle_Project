// Targets 
var value= document.getElementsByTagName("h2")[0].innerHTML;
const add= document.querySelector('#add_count');
const subtract = document.querySelector('#lower_count');

// Adding Event listener to the buttons
add.addEventListener('click', () => {
    if(value<50){
    value++
    document.getElementsByTagName("h2")[0].innerHTML=value; 
    }
});

subtract.addEventListener('click', () => {
    if(value>0){
        value--
    document.getElementsByTagName("h2")[0].innerHTML=value; 
    }
});
