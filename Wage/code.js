document.getElementById("b").addEventListener("click", onclick);
function onclick () {
    let normal_hours = document.getElementById("normal_hours").valueAsNumber;
    let normal_rate = document.getElementById("normal_payrate").valueAsNumber;
    let overtime_rate = document.getElementById("overtime_payrate").valueAsNumber;
    let total_hours = document.getElementById("total_hours").valueAsNumber;
    let earned;
    if (total_hours <= normal_hours) {
        earned = total_hours * normal_rate;
    } else {
        let normal_earned = normal_hours * normal_rate;
        let overtime_earned = (total_hours - normal_hours) * overtime_rate;
        earned = normal_earned + overtime_earned; 
    }
     document.getElementById("wage").innerHTML = "Your wage is $" + earned + ".";
}
