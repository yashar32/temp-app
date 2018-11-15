
function cTofTok(){
  
    const cTemp =parseFloat(celsiusInput.value);
    const fTemp=(cTemp * (9/5)) +32;
    const kTemp=cTemp+ 273.15;
    console.log("c-works");
    fahrenheitInput.value =roundNum(fTemp);
    kelvinInput.value= roundNum(kTemp);  
  }
  
  function fTocTok(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32)*(5/9);
    const kTemp = (fTemp+459.67)*5/9;
    console.log("f- works");
    kelvinInput.value= roundNum(kTemp); 
    celsiusInput.value= roundNum(cTemp);
  }
  
  function kTofToc(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp= kTemp - 273.15;
    const fTemp = 9/5 *(kTemp - 273)+32;
    console.log("k-works");
    celsiusInput.value= roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
  }
  
  
  function main(){
  
  celsiusInput.addEventListener('input', cTofTok);
  fahrenheitInput.addEventListener('input', fTocTok);
  kelvinInput.addEventListener('input', kTofToc);
    console.log("yashar");
  }
  main();
