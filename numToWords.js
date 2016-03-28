/*! numToWords.js v1.0.0-beta1 | (c) prathamesh_satya | use and share :) */
/* to use: 1. import numToWords.js file
          2. assign an id to the text field
         3. make a div id='container'
        4. pass id as argument in numToWords function
       Enjoy!*/

function numToWords(id) {
    var numvalue=document.getElementById(id).value;                              //get value of textfield
    numvalue = Math.floor(numvalue);                                             //floor function to round off number
    var numstring=numvalue.toString();                                           //convert no. to string
    var revnumstring=numstring.split('').reverse().join('');                     //reverse string
    numlength=numstring.length;                                                  //store length of string
    var returnstring, bufferstring;                                              //final string to be returned

    if(Number(numvalue)>=0){}
    else {
      window.alert("Incorrect input type");
      return false;
    }
    if(numlength>10){
      window.alert("Number out of bounds");
      return false;
    }

var onesplace = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
var tensplace = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
var perfecttens = ['','','Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

//ones place
  if(numlength>0){
      returnstring = onesplace[revnumstring.charAt(0)];
//tens place
      if(numlength>1){
        if(revnumstring.charAt(1)==0){returnstring= returnstring.replace("Zero", "");}
        else{ twodigit(numlength-2); }
      }
//hundred
      if(numlength>2){
        if(revnumstring.charAt(2)==0){returnstring= returnstring.replace("Zero", "");}
        else{ returnstring = onesplace[revnumstring.charAt(2)] + ' Hundred ' + returnstring; }
        }
//thousand
      if(numlength>3){
        if(revnumstring.charAt(3)==0){returnstring= returnstring.replace("Zero", "");}
        else{ returnstring = onesplace[revnumstring.charAt(3)] + ' Thousand ' + returnstring; }
      }
//ten thousand
      if(numlength>4){
        if(revnumstring.charAt(4)==0){returnstring= returnstring.replace("Zero", "");}
        else{ bufferstring = returnstring;
              bufferstring = bufferstring.replace(onesplace[revnumstring.charAt(3)],"");
              bufferstring = bufferstring.replace('Thousand',"");
              twodigit(numlength-5);
              returnstring = returnstring + ' Thousand ' + bufferstring; }
      }
//lakh
      if(numlength>5){
        if(revnumstring.charAt(5)==0){returnstring= returnstring.replace("Zero", "");}
        else{ if(revnumstring.charAt(5)==1){ returnstring = 'One Lakh ' + returnstring; }
              else{ returnstring = onesplace[revnumstring.charAt(5)] + ' Lakhs ' + returnstring;}
            }
      }
//ten lakhs
      if(numlength>6){
        if(revnumstring.charAt(6)==0){returnstring= returnstring.replace("Zero", "");}
        else{ bufferstring = returnstring;
              bufferstring = bufferstring.replace(onesplace[revnumstring.charAt(5)],"");
              bufferstring = bufferstring.replace('Lakhs',"");
              bufferstring = bufferstring.replace('One Lakh',"");
              twodigit(numlength-7);
              returnstring = returnstring + ' Lakhs ' + bufferstring; }
      }
//crore
      if(numlength>7){
        if(revnumstring.charAt(7)==0){returnstring= returnstring.replace("Zero", "");}
        else{ if(revnumstring.charAt(7)==1){ returnstring = 'One Crore ' + returnstring; }
              else{ returnstring = onesplace[revnumstring.charAt(7)] + ' Crores ' + returnstring;}
            }
      }
//ten crores
      if(numlength>8){
        if(revnumstring.charAt(8)==0){returnstring= returnstring.replace("Zero", "");}
        else{ bufferstring = returnstring;
              bufferstring = bufferstring.replace(onesplace[revnumstring.charAt(7)],"");
              bufferstring = bufferstring.replace('Crores',"");
              bufferstring = bufferstring.replace('One Crore',"");
              twodigit(numlength-9);
              returnstring = returnstring + ' Crores ' + bufferstring; }
      }
//hundred crores
      if(numlength>9){
        if(revnumstring.charAt(8)==0 && revnumstring.charAt(7)==0){ returnstring = onesplace[revnumstring.charAt(9)] + ' Hundred Crores ' + returnstring; }
        else{ returnstring = onesplace[revnumstring.charAt(9)] + ' Hundred ' + returnstring; }
      }
  }

function twodigit(i){ if(numstring.charAt(i)==1){ returnstring = tensplace[numstring.charAt(i+1)]; } //no. of form 1x
                      else if(numstring.charAt(i+1)==0){ returnstring = perfecttens[numstring.charAt(i)]; } //no. of form x0
                      else{ returnstring = perfecttens[numstring.charAt(i)] + ' ' + onesplace[numstring.charAt(i+1)]; }} //other no.s

return document.getElementById('container').innerHTML = returnstring;
}
