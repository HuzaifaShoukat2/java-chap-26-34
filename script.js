// ? CHAPTER 26-30
// ! Question 1
// var num = +prompt("input no");
// var  roundOf = Math.round(num);
// var  floor = Math.floor(num);
// var  ciel = Math.ceil(num);

// if(num > 0){
//     document.write("number:" + num + "<br>");
//     document.write("round of:" + roundOf + "<br>");
//     document.write("floor:" + floor + "<br>");
//     document.write("ceil:" + ciel + "<br>");
// }
// else{
//     document.write("Please input positive num")
// };
    

// ! Question 2

// if(num < 0){
//     document.write("number:" + num + "<br>");
//     document.write("round of:" + roundOf + "<br>");
//     document.write("floor:" + floor + "<br>");
//     document.write("ceil:" + ciel + "<br>");
// }
// else{
//     document.write("Please input negative num")
// };



// ! Question  3

// var num = -4;
//  result = Math.abs(num);
//  document.write("Abasolute value of -4 is " + result);


// ! Question  4

// var num = Math.floor(Math.random() * 6) + 1 ;
// document.write("Random dice value is " + num);



// ! Question  5

// var num = Math.floor(Math.random() * 2) + 1 ;
// if(num === 1){
//     document.write("Random coin value : Heads")
// }
// else{
//     document.write("Random coin value : Tails")
// };


// ! Question  6

// var num = Math.floor(Math.random() * 100) + 1 ;
// document.write("Random value Between 1 to 100: " + num);


// ! Question  7

// var weight = parseInt(prompt("ENETR YOUR WEIGHT"));
// document.write(weight);


// ! Question  8
// var value = +prompt("SELECT NUMBER FROM 1 TO 10");
// num = 3;

// if(value === num){
//     alert("Congrats you Select a correct number"); 
// }
// else if(value > 10){
//     alert(" Please Enter number less then 10");
// }
//     else
// {
//     alert("Try Again");
// };




// ? CHAPTER 31-34


// ! Question  1
var date = new Date();

// document.write(date);



// ! Question  2
// var month = date.getMonth();

// var arr = ['January','Faburary','March','April','May','June','July','August','September','October','November','December']
// document.write(arr[month]);

// ! Question  3

// var day = date.getDay();

// var arr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// document.write(arr[day]);

// ! Question  4

// if(day === 0 || day===6){
//     document.write("Its Fun Day")
// }
// else{
//     document.write("Its Week Days")
// }

// ! Question  5

// if(month <= 14){
//     document.write("First Fifteen Days Of The Month")
// }
// else{
//     document.write("Last Days Of The Month")
// }


// ! Question  6
// var oldDate = new Date(0);

// var time = date.getTime();

// var minute = (date - new Date(oldDate.getFullYear(), oldDate.getMonth(),oldDate.getDate()))/(1000*60);

// document.write("Current Date: " + oldDate + "<br>");
// document.write("Elapsed Milliseconds since jan 1,1970 : " + date.getTime() + "<br>");
// document.write("Elapsed Minutes since jan 1,1970 : " + Math.floor(minute));


// ! Question  7

// var hour = date.getHours();
// if(hour < 12 )
// {
//     document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }




// ! Question  8

// var letterDate = new Date('December 31,2020');
// document.write(letterDate);



// ! Question  9

// var ramadan =   new Date("june 18, 2015");
// var result1 =date.getTime() - ramadan.getTime();
// var result2 = result1/(1000*3600*24);
// document.write(ramadan+"<br>");
// document.write(Math.floor(result2) +  "sec has passed since " + ramadan);


// ! Question  10

// var sec = Math.abs(result1/1000);
// document.write(sec + "sec has passed since " + ramadan);


// ! Question  11


// var newDate = new Date();
// var hour = date.getHours();
// newDate.setHours(hour - 1);

// document.write(date + "<br>");
// document.write(newDate+ "<br>");



// ! Question  12


// var year = date.getFullYear();
// newDate.setFullYear(year - 50);

// document.write(date + "<br>");
// document.write(newDate + "<br>");



// ! Question  13

// var age = +prompt("Enter Your Age");
// var birth = year - age
// document.write("Your Age Is " + age + "<br>");
// document.write("Your Birth Year Is " + birth);



// ! Question  14

// var name1 = prompt("Enter Your Name:");
// var month = prompt("Enter Month:");
// var unit = +prompt("Enter units:");
// var unitCharges = 50;
// var bilWithinDate = unit * unitCharges;
// var subCharges = 300;
// var withinDate = new Date("October 11,2023");
// var afterDate = new Date("October 11,2023");
// var billAfterDate = bilWithinDate + subCharges ; 


// document.write("NAME:" + name1 + "<br>");
// document.write("Month:" + month + "<br>");
// document.write("Units:" + unit + "<br>");
// document.write("Charges per unit: " + unitCharges + "<br><br><br>");
// document.write("Amount Payable Within: " + withinDate + " is: " + bilWithinDate + "<br>");
// document.write("Late Payment Subcharges: " + subCharges + "<br>");
// document.write("Amount Payable After: " + afterDate + " is: "+billAfterDate + "<br>");


