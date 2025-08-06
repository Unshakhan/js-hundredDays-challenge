// Prompt user for their age
var age = +prompt('What is your age ?')

// Convert age to days
var totalDays = age*365

// Show result using console.log
console.log('You have lived approximately ' + totalDays + ' days')

// Show result using document.write
document.write('<center><br><h1>Ans: You have lived approximately ' + totalDays + ' days</h1></center>')

if(age>=50){
    document.write('<center><h2>May Allah bless you with good health, happiness, and many more years of love and joy!</h2></center>')
  document.write('<center><h3>You are a treasure trove of wisdom and experience. May your golden years be filled with peace and contentment!</h3></center>')
  alert('May you live a long, happy, and healthy life!')
}