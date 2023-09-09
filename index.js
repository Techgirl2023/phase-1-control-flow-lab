function scuberGreetingForFeet(rideDistance){
     if (rideDistance <= 400) {
         return 'This one is on me!'  
     } 
     if (rideDistance > 400 && rideDistance < 2000){
         return 'That will be twenty bucks.'
     }
     if (rideDistance >= 2500){
         return 'No can do.'
     }
     if (rideDistance > 2000){
        return 'I will gladly take your thirty bucks.'
     }
     }
const city = 'NYC';
function ternaryCheckCity(city) {
return (city === 'NYC') ? `Ok, sounds good.` : `No go.`;
}

const tip = 'generous';
function switchOnCharmFromTip (tip) {
switch (tip) {
     case 'generous':
     return ('Thank you so much.');

     case 'not as generous':
     return ('Thank you.');

     default:
     return ('Bye.');
}
}