function compute() {


  var principal = +document.getElementById("principal").value;
  var rate = +document.getElementById("rate").value;
  var startYear = 2020;
  var years = +document.getElementById("years").value;
  var endYear = startYear + years;
  var Amount = principal * ((rate/100) * years);

  var StatementAText = "If you deposit " + principal;
  var StatementBText = "On an interest of " + rate + "%";
  var StatementCText = "You will receive an amount of $" + Amount;
  var StatementDText = "In the year " + endYear;



    document.getElementById("statementA").innerHTML = StatementAText;
    document.getElementById("statementB").innerHTML = StatementBText;
    document.getElementById("statementC").innerHTML = StatementCText;
    document.getElementById("statementD").innerHTML = StatementDText;

}

function validate() {
  var x, text;

  // Get the value of the input field with id="principal"
  x = document.getElementById(“principal”).value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("principal").innerHTML = text;
}

