let sourceCurrency='Rub';
let destinationCurrency='usd';
let amount=0;
let p=document.querySelectorAll('.currencyreport');
let sourceAmountInput=document.getElementById('source');
let destinationAmountInput=document.getElementById('dest');
const apiKey='4e27180410deb62e20e69598016043d2';
let uls=document.querySelectorAll('ul');
let inputs=document.querySelectorAll('input');
let sourceUL=uls[0];
let destinationUL=uls[1];

let sourceList = Array.from(sourceUL.children);
let destList = Array.from(destinationUL.children);
// let selectedSource=sourceList[0];
// sourceList[0].style.backgroundColor = '#833AE0';
// sourceList[0].style.color = 'white';

// destList[1].style.backgroundColor = '#833AE0';
// destList[1].style.color = 'white';
// let selectedDest=destList[1];
let leftClicked=true;



sourceList.forEach(x=>{
 
    
    x.addEventListener('click',(e)=>{
        sourceList.forEach(item => {
            item.style.backgroundColor = 'white';
            item.style.color = '#C6C6C6';
          });
          
          e.target.style.backgroundColor = '#833AE0';
          e.target.style.color='white';
          selectedSource=e.target;

          sourceCurrency=selectedSource.innerHTML;
          destinationCurrency=selectedDest.innerHTML;
          let query1=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=1&access_key=${apiKey}`;
          queryReturnerP(query1,p[0],sourceCurrency,destinationCurrency);

          let query2=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=1&access_key=${apiKey}`;
          queryReturnerP(query2,p[1],destinationCurrency,sourceCurrency);

          
          if(leftClicked){  
            amount=sourceAmountInput.value;
            let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;
            queryReturner(query,destinationAmountInput);

          }
          else{
            amount=destinationAmountInput.value;
            let query=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=${amount}&access_key=${apiKey}`;
            queryReturner(query,sourceAmountInput);
          }
     
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
let query1=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=1&access_key=${apiKey}`;
          queryReturnerP(query1,p[0],sourceCurrency,destinationCurrency);
let query2=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=1&access_key=${apiKey}`;
          queryReturnerP(query2,p[1],destinationCurrency,sourceCurrency);
          

if(leftClicked){
  amount=sourceAmountInput.value;
  let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;
  queryReturner(query,destinationAmountInput);
}
else{
  amount=destinationAmountInput.value;
  let query=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=${amount}&access_key=${apiKey}`;
  queryReturner(query,sourceAmountInput);
}
  })

   


})





sourceAmountInput.addEventListener('keyup',(e)=>{

  leftClicked=true;
amount=e.target.value;


 
sourceCurrency=selectedSource.innerHTML;


  destinationCurrency=selectedDest.innerHTML;
let query=`http://api.exchangerate.host/convert?from=${sourceCurrency}&to=${destinationCurrency}&amount=${amount}&access_key=${apiKey}`;


queryReturner(query,destinationAmountInput);

});



destinationAmountInput.addEventListener('keyup',(e)=>{


        leftClicked=false;

  amount=e.target.value;
  
  
   
  sourceCurrency=selectedSource.innerHTML;
  
  
    destinationCurrency=selectedDest.innerHTML;
  let query=`http://api.exchangerate.host/convert?from=${destinationCurrency}&to=${sourceCurrency}&amount=${amount}&access_key=${apiKey}`;
  console.log(query)

  queryReturner(query,sourceAmountInput);

});





function queryReturner(query,inp){
  fetch(query).then(res => res.json()).then(data =>{
  
    console.log(data)
  
    if(data.result==undefined){
      inp.value='';
      
    }
    else{
      const roundedValue = parseFloat(data.result).toFixed(4);
        inp.value = roundedValue;
   }});
   
}

function queryReturnerP(query,inp,src,dest){
  fetch(query).then(res => res.json()).then(data =>{
  
    console.log(data)
  
    if(data.result==undefined){
      inp.value='';
      
    }
    else{
   
        inp.innerHTML = `1 ${src} = ${data.result} ${dest} `;
        
   }});
   

  }




inputs.forEach(x => {
  x.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    const regex = /^\d+(\.\d{0,4})?$/;

    if (!inputValue.match(regex)) {
      // Remove the last character if it doesn't match the regex
      e.target.value = inputValue.slice(0, -1);
    }
  });
});
