function getRandomNumber(){

    return Math.floor(Math.random() * 100) + 1; //สุ่มตัวเลขระหว่าง1-100 โดยใช้การ random
  
  }
  
  
  
  function sum(a,b,c){
  
  return a+b+c // เป็นfunctionไว้รวมผลบวก
  
  }
  
  
  
  function max(a,b,c){
  
    if(a>b&&a>c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่ามากสุด 
  
    else if(b>a&&b>c) return b
  
    else if(c>a&&c>b) return c
  
  }
  
  
  
  function min(a,b,c){
  
    if(a<b&&a<c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่าน้อยสุด 
  
    else if(b<a&&b<c) return b
  
    else if(c<a&&c<b) return c
  
    }
  
  
  
  function find(a,b,c){
  
  s = sum(a,b,c) 
  
  mi = min(a,b,c)
  
  ma = max(a,b,c)
  
    console.log(`sum is ${s}`) 
  
    console.log(`min is ${mi}`) 
  
    console.log(`max is ${ma}`) 
  
  }
  
  
  
  function main(){
  
    const a = getRandomNumber();
  
    let b = getRandomNumber();
  
    let c = getRandomNumber();
  
    console.log(`number1 is ${a}`) 
  
    console.log(`number2 is ${b}`) 
  
    console.log(`number3 is ${c}`) 
  
    find(a,b,c)
  
  }
  
  
  console.log("--------------------");
  main()
  console.log("--------------------");