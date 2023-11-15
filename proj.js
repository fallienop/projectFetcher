let sourceCurrency='Rub';
let destinationCurrency='usd';
let amount=0;
let sourceAmountInput=document.getElementById('source');
let destinationAmountInput=document.getElementById('dest');

let uls=document.querySelectorAll('ul');

let sourceUL=uls[0];
let destinationUL=uls[1];

let sourceList = Array.from(sourceUL.children);
let destList = Array.from(destinationUL.children);


sourceList.forEach(x=>{
 
    
    x.addEventListener('click',(e)=>{
        sourceList.forEach(item => {
            item.style.backgroundColor = 'white';
            item.style.color = '#C6C6C6';
          });
          
          e.target.style.backgroundColor = '#833AE0';
          e.target.style.color='white';
    })
})


sourceList[0].style.backgroundColor = '#833AE0';
sourceList[0].style.color = 'white';

destList[1].style.backgroundColor = '#833AE0';
destList[1].style.color = 'white';

sourceAmountInput.addEventListener('keyup',(e)=>{


const apiKey='c51c4c1f43fcc12c109ce87237dad726';
amount=e.target.value;
sourceCurrency= sourceList.find(child => {
    return window.getComputedStyle(child).backgroundColor === 'rgb(131, 58, 224)';
  });
  sourceCurrency=sourceCurrency.innerHTML;
 
destinationCurrency= destList.find(child => {
    console.log(window.getComputedStyle(child).backgroundColor);
    return window.getComputedStyle(child).backgroundColor === 'rgb(131, 58, 224)';
  });
  destinationCurrency=destinationCurrency.innerHTML;
let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;


fetch(query).then(res => res.json()).then(data =>{


 if(data.result==undefined){
        destinationAmountInput.value='';
}
else{
destinationAmountInput.value= data.result;
}});
});







