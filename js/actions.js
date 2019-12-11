function carlist(){
  const data = request('/cars_status᧗', 
  {
    method: 'GET',
  }
  );
  data.then(function(value){
    console.log(value) 
  })
}





