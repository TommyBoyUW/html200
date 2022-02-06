
let account = 500;
let p = 0;

do {

let task = prompt('Select a banking option: \nW to withdraw \nD to deposit \nB to view balance \nQ to quit', 'select option')


switch (task) {
    case 'W' :
    case 'w' :
    let withdraw = prompt('Select amount to withdraw');

    if (withdraw > account) {
      alert('insufficient funds');}

    else if ((account - +withdraw) < 300)
        { let confirm = prompt('Withdraw will result in less than $300 remaining \nConfirm to proceed Y/N')

        if (confirm === 'y' || 'Y') {
          account = +account - +withdraw;
          alert('New Balance: $' + account);}

          else { alert('Transaction cancelled');}}

    else {account = +account - +withdraw;
      alert('New Balance: $' + account);}
      break;

    case ('D') :
    case ('d') :
    let deposit = prompt('Select amount to deposit');
    if (deposit >= 50000) {
      alert('Exceeds deposit limit')}
      else {
    account = +account + +deposit;
    alert('New Balance: $' + account);}

    break;

    case 'b' :
    case 'B' :
    alert('Current Balance: $' + account);

    break;

    case 'q' :
    case 'Q' :
    alert('Quit, Goodbye');
    p = 50;
    break;

    default:
    alert('invalid entry');
  }
}
while (p != 50);
