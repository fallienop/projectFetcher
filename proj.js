let sourceCurrency='Rub';
let destinationCurrency='usd';
let amount=0;
let sourceAmountInput=document.getElementById('source');
let destinationAmountInput=document.getElementById('dest');
const apiKey='c51c4c1f43fcc12c109ce87237dad726';
let uls=document.querySelectorAll('ul');

let sourceUL=uls[0];
let destinationUL=uls[1];

let sourceList = Array.from(sourceUL.children);
let destList = Array.from(destinationUL.children);
let selectedSource=sourceList[0];
sourceList[0].style.backgroundColor = '#833AE0';
sourceList[0].style.color = 'white';

destList[1].style.backgroundColor = '#833AE0';
destList[1].style.color = 'white';
let selectedDest=destList[1];

sourceList.forEach(x=>{
 
    
    x.addEventListener('click',(e)=>{
        sourceList.forEach(item => {
            item.style.backgroundColor = 'white';
            item.style.color = '#C6C6C6';
          });
          
          e.target.style.backgroundColor = '#833AE0';
          e.target.style.color='white';
          selectedSource=e.target;
          amount=sourceAmountInput.value;
          sourceCurrency=selectedSource.innerHTML;
           destinationCurrency=selectedDest.innerHTML;
       let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;
           queryReturner(query,destinationAmountInput);
    })


})

destList.forEach(x=>{
 
    
  x.addEventListener('click',(e)=>{
    destList.forEach(item => {
          item.style.backgroundColor = 'white';
          item.style.color = '#C6C6C6';
        });
        
        e.target.style.backgroundColor = '#833AE0';
        e.target.style.color='white';
        selectedDest=e.target;
       
amount=destinationAmountInput.value;
   
sourceCurrency=selectedSource.innerHTML;
  
  
destinationCurrency=selectedDest.innerHTML;
  let query=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=${amount}&access_key=${apiKey}`;
  queryReturner(query,sourceAmountInput);
  })

   


})





sourceAmountInput.addEventListener('keyup',(e)=>{


amount=e.target.value;


 
sourceCurrency=selectedSource.innerHTML;


  destinationCurrency=selectedDest.innerHTML;
let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;


queryReturner(query,destinationAmountInput);
});



destinationAmountInput.addEventListener('keyup',(e)=>{



  amount=e.target.value;
  
  
   
  sourceCurrency=selectedSource.innerHTML;
  
  
    destinationCurrency=selectedDest.innerHTML;
  let query=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=${amount}&access_key=${apiKey}`;
  
  
  queryReturner(query,sourceAmountInput);
  });





function queryReturner(query,inp){
  fetch(query).then(res => res.json()).then(data =>{
  
  
    if(data.result==undefined){
      inp.value='';
   }
   else{
    inp.value= data.result;
   }});
   
}



