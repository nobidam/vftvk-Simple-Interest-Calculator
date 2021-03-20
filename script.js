function compute() {


  var principal = +document.getElementById("principal").value;
  var rate = +document.getElementById("rate").value;
  var startYear = 2020;
  var years = +document.getElementById("years").value;
  var endYear = startYear + years;
  var Amount = principal * ((rate/100) * years);
  var x;


  var StatementAText = "If you deposit " + principal;
  var StatementBText = "On an interest of " + rate + "%";
  var StatementCText = "You will receive an amount of $" + Amount;
  var StatementDText = "In the year " + endYear;

 // If x is Not a Number or less than one
  if (principal < 1) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
  } else {
    document.getElementById("statementA").innerHTML = StatementAText;
    document.getElementById("statementB").innerHTML = StatementBText;
    document.getElementById("statementC").innerHTML = StatementCText;
    document.getElementById("statementD").innerHTML = StatementDText;
  }
}
