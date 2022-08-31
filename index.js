// Code your solutions in this file

function writeCards(name,surpr) {
    let message = [];

    for(let i = 0; i < name.length; i++ ) {
         message.push(`Thank you, ${name[i]}, for the wonderful ${surpr} gift!`);
    }
return message;
}





function countDown(number){
    while (number >=  0){
        console.log(number);
        number --;
    }
}
