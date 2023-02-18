document.getElementById('btn').addEventListener('click',function(){
  //console.log('caught');
  const email= document.getElementById('inp-email').value;
  const password= document.getElementById('inp-pas').value;
  //document.getElementById('inp-email').value='';
  document.getElementById('inp-pas').value='';

  if(email=='nazibur175@gmail.com' && password=='bangladesh')
    //console.log('right');
    window.location.href='bank.html';
    
  else
  console.log('wrong');
})