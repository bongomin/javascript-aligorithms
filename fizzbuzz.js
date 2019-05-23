var fizzbuzz = (num)=>{
  for(var i=0; i <= num ; i++){
    if (i%15===0){
        console.log("fizzbuzz")
    }
    else if(i%3 === 0){
        console.log('fizzbuzz')
    }else if(i% 5===0){
        console.log('buzz')
    }else{
        console.log(i)
    }
      
  }   
}
document.write(fizzbuzz(30))