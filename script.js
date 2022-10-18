
const init = () => {
  let len = prompt("how long would you like your password (8-128)?");
// anything less than 8 characters should cancel out
  if(len<8) {
    alert('Length is too short');
    return init();
  };
// anything over 128 characters should not be accepted
  if(len>128){
    alert('Length is too long');
    return init();
  };
// asking questions on how you would like to customize your password
  let num = confirm('Would you like number in your password?');
  let lower = confirm('Would you like lowercase in your password?');
  let upper = confirm('Would you like uppercase in your password?');
  let spec = confirm('Would you like special characters in your password?');
//  random letters/numbers with special characters
  let temp = '';
  let password = '';
  let alpha = 'abcdefghijklmnopqrstiuvwxyz';

  if( num ) temp += '0123456789';
  if( lower ) temp += alpha;
  if ( upper ) temp += alpha.toUpperCase(); 
  if ( spec ) temp += "!@#$%^&*?"
// this will generate random characters
  for (let i = 0; i < len; i++) {
      password += temp[Math.floor(Math.random() * temp.length)];
  }
  console.log(temp);
  document.querySelector('textarea').innerText = password;
}

document.querySelector('button').addEventListener('click',init)

