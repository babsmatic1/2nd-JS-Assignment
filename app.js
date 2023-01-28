age = 90
Userage = parseInt(prompt('How old are you'));

function LifeInWeeks(age) {
    years = age - Userage;
    days = years * 365;
    weeks = days / 7;
    months  = years * 12;
  
    output = `You have ${days} days, ${Math.floor(weeks)} weeks, and ${Math.floor(months)} months left.`;
    console.log(output);

}

LifeInWeeks(age);

  

var Yourname = prompt('what is your name')
var partnername = prompt('what is your Partners name')

function loveCalculator(Yourname, partnername) {
    var matchPercentage = Math.floor(Math.random() * 100);

    var output = (`${Yourname} and ${partnername} are ${matchPercentage}% match!`);
    alert(output);
    console.log(output)
}

loveCalculator(Yourname, partnername)
  