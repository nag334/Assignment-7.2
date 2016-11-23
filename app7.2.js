//Sum of numbers 1 to 10


 findSum(1,2,3,4,5,6,7,8,9,10);

function findSum(){
    var sum =0;
  for(var i=0;i<arguments.length; i++){
      
      sum += arguments[i];
      
  }
  return( console.log( "Sum of numbers 1 to 10 is "+ sum));
    
}

//console.log("Area of Circle with radius 5 is:" + area);
