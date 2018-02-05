class EFE {
    
      static _03(FIN07,FIN04) {
  
      
          if (parseFloat(FIN07) > 0 || parseFloat(FIN04) > 0){
              return (FIN07 * FIN04) /1000;
          }
  
          return 0;
  
      }
      
      static _04(FIN13) {
  
          if (FIN13 > 0){
              return FIN13 / 1000;
          }
          return 0;
      
      }
      
      static _05(FIN15) {
  
          if (FIN15 > 0){
              return FIN15;
          }
          return 0;
  
      }
      
      static _06(CONFIG22A, PR12, currentRound) {
  
          if (parseFloat(CONFIG22A) > 0 || parseFloat(PR12) > 0){
  
              return (CONFIG22A * PR12) * ( 0.81 + ((currentRound - 1) * -0.0083))
          }
  
          return 0;
  
      }
  
      static _07(BS01, RR02, FIN07, FIN04, FIN13, FIN15, CONFIG22A, PR12, currentRound) {
  
          var suma = 0;
  
          if (BS01 > 0){
              suma = suma + BS01;
          }
  
          if (RR02 > 0){
              suma = suma + RR02;
          }
  
          if (FIN07 > 0 && FIN04 > 0){
              suma = suma + ((parseFloat(FIN07) * parseFloat(FIN04))/1000);
          }
  
          if (parseFloat(FIN13) > 0){
              suma = suma + (parseFloat(FIN13)/1000);
  
          }
  
          if (parseFloat(FIN15) > 0){
              suma = suma + parseFloat(FIN15);
  
          }
  
          if (CONFIG22A > 0 && PR12 > 0 && currentRound > 0){
              suma = suma + ((parseFloat(CONFIG22A) * parseFloat(PR12)) * (0.81 + (parseFloat(currentRound) - 1) * -0.0083));
          }
      
          return suma.toFixed(0); 
       
      }
  
      static _08(PR04, PR07){
  
          
          if (PR04 > 0){
              if (PR07 > 0){
                  return (PR04 * PR07) / 1000;
              }
          }
  
          return 0;
  
      }   
      
      static _09(PR06,PR03){
  
          if (PR06 > 0){
              if (PR03 > 0){
                  return (PR06 * PR03) / 1000;
              }
          }
  
          return 0;
  
      }
      
      static _10(PR06B, PR05){
  
          if (PR06B > 0){
              if (PR05 > 0){
                  return (PR06B * PR05) / 1000;
              }
          }
  
          return 0;
  
      }
  
      static _11(CONFIG22A, PR11){
  
          return CONFIG22A * PR11;
  
      }
  
      static _12(PR13, PR14,CONFIG23B){
  
          if (PR14 > PR13){
              return ((PR14 - PR13) / 100) * CONFIG23B;
          }
  
          return 0;
  
      }
  
      static _14(FIN04,FIN07){
  
          if (parseFloat(FIN07) > 0 || parseFloat(FIN04) > 0){
              return (((FIN07 * FIN04) * 0.0119) / 1000).toFixed(0);
          }
  
          return 0;
  
      }
      static _15(FIN04, FIN09){
  
          return FIN09 * FIN04 * 0.0119;
  
      }
  
      static _16(FIN04, FIN09){
  
          if (parseFloat(FIN09) > 0 || parseFloat(FIN04) > 0){
              return (FIN09 * FIN04) /1000;
          }
  
          return 0;
  
      }
  
      static _17(FIN12){
  
          if (FIN12 > 0){
              return parseInt(FIN12 / 1000);
          }
          return 0
  
      }
  
      static _18(FIN17){
  
          if (FIN17 > 0){
              return FIN17;
          }
          return 0;
  
      }
      static _19(PP09){
  
          if (PP09 > 0){
              return PP09;
          }
  
          return 0;
  
      }
  
      static _20(PV08){
  
          if (PV08 > 0){
              return PV08;
          }
          
          return 0;
  
      }
      static _21(RR01, RR02, CONFIG57){
  
          if (RR01 > 0){
              return (RR02 * CONFIG57).toFixed(0);
          }
          return 0;
  
      }
  
      static _22(ID05){
  
          return ID05;
  
      }
  
      static _24(ER16){
  
          return ER16;
  
      }
  
      static _25(EFE08, EFE09, EFE10, EFE11, EFE12, PR16, EFE14, EFE15, EFE16, EFE17, EFE18, EFE19, EFE20, EFE21, EFE22, EFE23, EFE24){
  
  
          if (isNaN(EFE08) || EFE08 < 0){
              EFE08 = 0;
          }
  
          if (isNaN(EFE09) || EFE09 < 0){
              EFE09 = 0;
          }
  
          if (isNaN(EFE10) || EFE10 < 0){
              EFE10 = 0;
          }
  
          if (isNaN(EFE11) || EFE11 < 0){
              EFE11 = 0;
          }
  
          if (isNaN(EFE12) || EFE12 < 0){
              EFE12 = 0;
          }
  
          if (isNaN(PR16) || PR16 < 0){
              PR16 = 0;
          }
  
          if (isNaN(EFE14) || EFE14 < 0){
              EFE14 = 0;
          }
  
          if (isNaN(EFE15) || EFE15 < 0){
              EFE15 = 0;
          }
  
          if (isNaN(EFE16) || EFE16 < 0){
              EFE16 = 0;
          }
  
          if (isNaN(EFE17) || EFE17 < 0){
              EFE17 = 0;
          }
  
          if (isNaN(EFE18) || EFE18 < 0){
              EFE18 = 0;
          }
  
          if (isNaN(EFE19) || EFE19 < 0){
              EFE19 = 0;
          }
  
          if (isNaN(EFE20) || EFE20 < 0){
              EFE20 = 0;
          }
  
          if (isNaN(EFE21) || EFE21 < 0){
              EFE21 = 0;
          }
  
          if (isNaN(EFE23) || EFE23 < 0){
              EFE23 = 0;
          }
  
          if (isNaN(EFE24) || EFE24 < 0){
              EFE24 = 0;
          }
  
          var resultado =  parseFloat(EFE08) +  parseFloat(EFE09) +  parseFloat(EFE10) +  parseFloat(EFE11) +  parseFloat(EFE12) +  parseFloat(PR16) +  parseFloat(EFE14) +  parseFloat(EFE15) +  parseFloat(EFE16) +  parseFloat(EFE17) +  parseFloat(EFE18) +  parseFloat(EFE19) +  parseFloat(EFE20) +  parseFloat(EFE21) +  parseFloat(EFE22) +  parseFloat(EFE23) +  parseFloat(EFE24);
  
          return resultado.toFixed(0);        
  
      }
  
      static _26(EFE07, EFE25){
  
          var resultado =  parseFloat(EFE07) -  parseFloat(EFE25);
          return resultado.toFixed(0);
  
      }
  }