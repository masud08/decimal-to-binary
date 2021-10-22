
const result = document.querySelector('#result');
// console.log(typeof number);
const submit = document.querySelector('button');

function binary(e){
    e.preventDefault();
    const number = document.querySelector('#number').value;
    if(number === '' || number < 0){
        result.style.visibility = 'visible';
        result.innerHTML = 'Error!';
        alert('Please enter a number')
    }
    else{
        result.style.visibility = 'visible';
        const num = Number(number).toString(2);
        result.innerText = num;
        
    }
}

submit.addEventListener('click', binary);