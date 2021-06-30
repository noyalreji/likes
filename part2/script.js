var count1 = 9;
var count2 = 13;
var count3 = 9;
var count1Element = document.querySelector("#count1");
var count2Element = document.querySelector("#count2");
var count3Element = document.querySelector("#count3");

function add1() {
  count1++;
  count1Element.innerText = count1 + "like(s)";
  console.log(count1)
}

function add2() {
  count2++;
  count2Element.innerText = count2 + "like(s)";
  console.log(count2)
}

function add3() {
  count3++;
  count3Element.innerText = count3 + "like(s)";
  console.log(count3)
}