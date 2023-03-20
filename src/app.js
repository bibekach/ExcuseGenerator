/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function randomNumberGenerator(number) {
  return Math.floor(Math.random() * number);
}
function excuseGenerator() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoIndex = randomNumberGenerator(who.length);
  const actionIndex = randomNumberGenerator(action.length);
  const whatIndex = randomNumberGenerator(what.length);
  const whenIndex = randomNumberGenerator(when.length);

  let excuseGenerated =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  return excuseGenerated;
}
window.onload = function() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
