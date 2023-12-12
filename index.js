function scuberGreetingForFeet(){
  let message;

  if (feet <= 400) {
    message = 'gives customers a free sample if the ride!';
  } else if (feet > 2000 && feet <= 2500) {
    message = 'charges 30 dollars for a distance.';
  } else if (feet > 2500) {
    message = 'does not allow rides.';
  }

  return message;
}

console.log(scuberGreetingForFeet(300)); // Output: This one is on me!
console.log(scuberGreetingForFeet(2200)); // Output: I will gladly take your thirty bucks.
console.log(scuberGreetingForFeet(2600)); // Output: No can do.


function ternaryCheckCity(){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'regular':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}