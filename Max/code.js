document.getElementById("b").addEventListener("click", onclick);
function onclick () {
   let first = document.getElementById("first").valueAsNumber;
   let second = document.getElementById("second").valueAsNumber;
   let third = document.getElementById("third").valueAsNumber;
   let max;
   if (first > second && first > third) {
    max = first
   } else if (second > first && second > third) {
    max = second
   } else if (third > first && third > second){
    max = third
   }
   document.getElementById("result").innerHTML = "The max is " + max + ".";
}
