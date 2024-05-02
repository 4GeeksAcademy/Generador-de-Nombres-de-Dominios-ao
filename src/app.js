/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generadorDeDominios(arr1, arr2, arr3) {
    for (let idx1 of arr1) {
      for (let idx2 of arr2) {
        for (let idx3 of arr3) {
          console.log(`${idx1}${idx2}${idx3}.com`);
        }
      }
    }
  }
  generadorDeDominios(pronoun, adj, noun);
  console.log("Hello Rigo from the console!");
};
