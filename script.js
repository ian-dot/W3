// Assignment Code
var generateBtn = document.querySelector("#generate");

var combined = '';
// Write password to the #password input
function generatePassword() {
  
  var pswlngt = Number (prompt ("Write a number to be the lenght of the password.\nIt must be between 8 and 128."));
  
  if (8<= pswlngt && pswlngt <=128) {
  alert('Great choice! \nNow you should include at least ONE of the following character types:\n-Lowercase characters\n-Uppercase characters\n-Numeric characters \n-Special characters ');
      function askChar() {
      var lwrCase = confirm ('Include lowercase characters?');
      var uprCase = confirm ('Include uppercase characters?');
      var numeric = confirm ('Include numeric characters?');
      var spcChar = confirm ('Include special characters?');
      
        if (lwrCase || uprCase || numeric || spcChar) {
          alert('You chose to include:\nLowercase characters '+ lwrCase + '\nUppercase characters '+ uprCase + '\nNumeric characters '+ numeric + '\nSpecial characters '+ spcChar);
          var Spc = ['!','"','#','$','%','&','"','(',')','*','+','=','-','.',',','_',';',':','<','>','?','@','[',']','{','}'];
          var upr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
          var lwr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
          var num = ['0','1','2','3','4','5','6','7','8','9'];

          var pool = [];

          var pswArray = [];

          if (lwrCase){            
            pool = pool.concat(lwr);            
          }
          if (uprCase){                        
            pool = pool.concat(upr);            
          }
          if (numeric){            
            pool = pool.concat(num);            
          }
          if (spcChar){
              pool = pool.concat(Spc);
          }

          function aggregate(){
              
              for (i=0; i<pswlngt; i++) {
                  pswArray.push(pool[Math.floor(Math.random()*pool.length)]);
              }
          }
          aggregate();


          for (let i of pswArray) {
              combined += i;
          }

          console.log(combined);
          alert('your password is '+ combined);
        }
        
        else {
          alert ('You must include at least one character type.\nPlease try again');
          askChar();
        }
      }
  }
  else if (!pswlngt) {
    alert ('OK see you next time');    
  }
  else {
    alert ('The lenght must be a number between 12 and 128 characters \nPlease try again');
    generatePassword();
    
  }
    
  askChar();
  
};

function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");


  passwordText.value = combined;

  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
