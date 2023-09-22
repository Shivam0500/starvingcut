// always

// step 1
function orderstatus() {
  setTimeout(() => {
    isorderaccepted = confirm("Do you want to accept the Order");
    console.log(isorderaccepted);
  }, 1000);
}



// 
function checkorderstatu(){
    setTimeout(()=>{
        if(isorderaccepted) alert(' the order is accepted by restaurant');
        else alert('not accepted by restaurant');
    },5000);
}
