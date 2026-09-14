function calculateResult() {

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);
    let sub6 = Number(document.getElementById("sub6").value);
    let sub7 = Number(document.getElementById("sub7").value);
    let sub8 = Number(document.getElementById("sub8").value);

    let total = sub1 + sub2 + sub3 + sub4 +
                sub5 + sub6 + sub7 + sub8;

    let result = document.getElementById("result");

    if (total >= 600) {
        result.innerHTML = "Total: " + total + "<br>Distinction";
        result.style.color = "green";
    }
    else if (total >= 500) {
        result.innerHTML = "Total: " + total + "<br>First Division";
        result.style.color = "black";
    }
    else if (total >= 400) {
        result.innerHTML = "Total: " + total + "<br>Second Division";
        result.style.color = "black";
    }
    else if (total >= 300) {
        result.innerHTML = "Total: " + total + "<br>Third Division";
        result.style.color = "black";
    }
    else {
        result.innerHTML = "Total: " + total + "<br>Fail";
        result.style.color = "red";
    }
}