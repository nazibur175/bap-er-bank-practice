document.getElementById('btn-deposit').addEventListener('click',function(){
  const inpDeposit= parseFloat(document.getElementById('inp-deposit').value);
  document.getElementById('inp-deposit').value='';
  const balance= parseFloat(document.getElementById('balance').innerText);
  const tBalance=  inpDeposit + balance ;
  document.getElementById('balance').innerText = tBalance;

  const pDeposit=parseFloat(document.getElementById('deposit').innerText);
  //console.log(pDeposit);

 const tDeposit = inpDeposit + pDeposit ;
  document.getElementById('deposit').innerText = tDeposit;
  
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
  const inpWithdraw= parseFloat(document.getElementById('inp-withdraw').value);
  document.getElementById('inp-withdraw').value='';
  const balance= parseFloat(document.getElementById('balance').innerText);
  const tBalance=  balance-inpWithdraw ;
  document.getElementById('balance').innerText = tBalance;

  const pWithdraw=parseFloat(document.getElementById('withdraw').innerText);
  //console.log(pDeposit);

 const tWithdraw = inpWithdraw + pWithdraw ;
  document.getElementById('withdraw').innerText = tWithdraw;
  
})