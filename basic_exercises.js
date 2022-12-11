//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

let exerciseOne = document.getElementsByClassName("exercise1")[0];

//Exercise1
const today = new Date();
//console.log(today);
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
exerciseOne.innerHTML += 'Today is : ' + week[today.getDay()] + '<br>'; 
//https://momentjs.com/ it givs you many different time formats !
  

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let amPm = (hour >= 12)? " PM ":" AM ";　//ifelseショートばジョンで書くことで変数に代入できる。
hour = (hour >= 12)? hour - 12: hour; //これで0時表記ができる。

if(hour === 0 && amPm === " PM "){
    if(minute === 0 && second === 0){
        hour = 12;
        amPm = " Noon";
    }else{
        hour = 12;
        amPm = " PM";
    }
}

if(hour===0 && amPm === " AM "){
    if(minute===0 && second===0){
        hour=12;
        amPm=" Midnight ";
    }else{
        hour=12;
        amPm = " AM";
    }
}

exerciseOne.innerHTML += "Current Time is : " + hour + amPm + " : " + minute + " : " + second;

//Exercise2
function printPage(){
    window.print();
}

//Exercise3 
//3. Write a JavaScript program to get the current date.
let exerciseThree = document.getElementsByClassName("exercise3")[0];

const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;//Months start at 0!
let dd = today.getDate();

if(dd < 10){
    dd = '0' + dd;
}
if(mm < 10){
    mm = '0' + mm;
}

const formatMmDdYyyy =  mm + "/" + dd + "/" + yyyy;
exerciseThree.innerHTML += "<br><br>Today is " + formatMmDdYyyy;

//Exercise4
//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
//3辺の長さが 5、6、7 である三角形の面積を求める JavaScript プログラムを作成します。
let exerciseFour = document.getElementsByClassName("exercise4")[0];
//まず面積を求める公式を思い出す。
//5、6、7 それぞれを変数に代入する。
//Math.sqrtを使って面積を求める。
const side1 = 5;
const side2 = 6;
const side3 = 7;
const gaisyu = (side1 + side2 + side3)/2;
const area = Math.sqrt(gaisyu*((gaisyu-side1)*(gaisyu-side2)*(gaisyu-side3))); 

exerciseFour.innerHTML += "辺の長さが 5、6、7 である三角形の面積 = " + area + "<br>";

//Exercise 5
//5. Write a JavaScript program to rotate the string 'bebechan' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  
//文字列 'bebechan' を周期的に1文字ずつ取り除き、前面に貼り付けて右方向に回転させる JavaScript プログラムを作成しなさい。
let exerciseFive = document.getElementsByClassName("exercise5")[0];

const bebechan = ['b', 'e', 'b', 'e', 'c', 'h', 'a', 'n'];
let sort = bebechan.reverse();

exerciseFive.innerHTML += "What I thought I needed to solve : " + sort + "<br>" ;

//これを解剖していく
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;
    console.log(text.length);

    setInterval(function () {
        //substring() メソッドは、文字列の開始インデックスと終了インデックスの間の部分、または文字列の末尾までを返します。
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        //textNode.data[8] + bebechan
        textNode.data = text;
    }, 170);
}

//Exercise6
//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.ある年がグレゴリオ暦のうるう年かどうかを判定する JavaScript プログラムを作成しなさい。
//グレゴリオ暦ではうるう年を400年間で97回と定めています。
//西暦が4で割り切れる年をうるう年とする （ユリウス暦と同じ）
//上記のうち、西暦が100で割り切れる年はうるう年としない
//上記のうち、西暦が400で割り切れる年はうるう年とする 
let exerciseSix = document.getElementsByClassName("exercise6")[0];
let test = document.getElementById("exercise6");
function checkLeapYear(){
    let year = prompt("Please enter a year", "ex: 2022");

    if (year != null && year % 4 == 0) {

        if (year % 100 == 0) {
            if(year % 400 == 0){
                exerciseSix.innerHTML +=　year + " " + "is a leap year! うるう年だよ！";
            }else{
                exerciseSix.innerHTML += year + " " + "is not a leap year! うるう年ではないよ！"; 
            }

        }else{
            exerciseSix.innerHTML +=　year + " " + "is a leap year! うるう年だよ！";
        }
        
    }else {
        exerciseSix.innerHTML += year + " " + "is not a leap year! うるう年ではないよ！";
    }

}

//Exercise7 
//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
//これややこしいからあとで！
let exerciseSeven = document.getElementsByClassName("exercise7")[0];
function checkSunday(){

}

//Exercise8
let exerciseEight = document.getElementsByClassName("exercise8")[0];

function guessNumer(){
    let number = prompt("Enter and guess a random number between 1 to 10", "ex: 5" );
    let min = Math.ceil(1);
    let max = Math.floor(10);
    let randomNumber = Math.floor(Math.random() * (max - min) + min) ;//2 つの値の間のランダムな整数を得る
    console.log(randomNumber);
    if(number == randomNumber){
        exerciseEight.innerHTML += "Corrent !";
    }else(
        exerciseEight.innerHTML += "You were close ! The correct number is  " + randomNumber
    )
}

//Exercise9 
//9. Write a JavaScript program to calculate days left until next Christmas.
let exerciseNine = document.getElementsByClassName("exercise9")[0];
function xmasCountDown(){

    var cmas = new Date(today.getFullYear(), 11, 25); //11 returns december, 25 return day
    var diff = Math.abs(cmas - today);//Math.abs()does minus;
    console.log(diff);//3645389105
    var one_day=1000*60*60*24;
    console.log("One day has " + one_day + " milliseconds.")//ミリ秒
    var leftDays = Math.ceil(diff/one_day); //Math.ceil() function is used to get the smallest integer greater than or equal to a given number.
    exerciseNine.innerHTML += "You have " + leftDays + " days till  next Christmas ! <br><br>";

}

//Exercise10
//.value can get the data
var exerciseTen = document.getElementsByClassName("exercise10")[0];

function multiplication(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    exerciseTen.innerHTML = num1*num2;
}

function division(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    exerciseTen.innerHTML = num1/num2;
}

//Exercise11
//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C (32 °F − 32) × 5/9 = 0 °C
// Celsius to Fahrenheit : (°C × 1.8) + 32 = °F (0 °C × 9/5) + 32 = 32 °F
var exerciseEleven = document.getElementsByClassName("exercise11")[0];
function toCelsius(){
    var num = parseInt(temperatures = document.getElementById("temperatures").value);
    var fToC = (num - 32) * 5 / 9;
    exerciseEleven.innerHTML = "In celsius it's " + fToC + " °C";
}

function toFahrenheit(){
    var num = parseInt(temperatures = document.getElementById("temperatures").value);
    var cToF = (temperatures * 9/5 + 32);
    exerciseEleven.innerHTML = "In fahrenheit it's " + cToF + " °F";
}

//12. Write a JavaScript program to get the website URL (loading page).
var btn = document.getElementById('btn');
btn.addEventListener('click', (e)=> alert('The url of this page is: ' + window.location.href))

//13. Write a JavaScript exercise to create a variable using a user-defined name.
function getVal(){
    var val = document.getElementById("input13").value
    var n = "You named this variable as : " + val;
    this[val] = n;
    var exerciseThirteen = document.getElementsByClassName("exercise13")[0];
    exerciseThirteen.innerHTML = this[val];
}












