function compute() {


  var principal = +document.getElementById("principal").value;
  var rate = +document.getElementById("rate").value;
  var startYear = 2020;
  var years = +document.getElementById("years").value;
  var endYear = startYear + years;
  var Amount = principal * ((rate/100) * years);

  var StatementAText = "If you deposit " + principal<br> + "On an interest of " + rate + "% " + "You will receive an amount of $" + Amount + "In the year " + endYear;
  var StatementBText = "On an interest of " + rate + "%";
  var StatementCText = "You will receive an amount of $" + Amount;
  var StatementDText = "In the year " + endYear;



    document.getElementById("result").innerHTML = StatementAText;
    document.getElementById("statementB").innerHTML = StatementBText;
    document.getElementById("statementC").innerHTML = StatementCText;
    document.getElementById("statementD").innerHTML = StatementDText;

}
