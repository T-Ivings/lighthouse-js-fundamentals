for(let x = 100; x <= 200; x++) //loop starts at 100 and ends at 200
{
  if(x % 3 === 0 && x % 4 === 0){ //if loop first checks if x is multiple of 3 and 4
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) { // then checks if multiple of 3 solo
    console.log("Loopy");
  } else if (x % 4 === 0) { // then multiple of 4 solo
    console.log("Lighthouse");
  } else { //if nothing above is true, just print number
    console.log(x);
  }
}