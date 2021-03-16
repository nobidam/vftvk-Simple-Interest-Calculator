unction compute() {


  var p = +document.getElementById("principal").value;
  var r = +document.getElementById("rate").value;
  var startYear = 2020;
  var t = +document.getElementById("years").value;
  var endYear = startYear + t;
  var Amount = p * (1 + ((r/100) * t));

  var StatementAText = "If you deposit " + p;
  var StatementBText = "On an interest of " + r + "%";
  var StatementCText = "You will receive an amount of $" + Amount;
  var StatementDText = "In the year " + endYear;



    document.getElementById("statementA").innerHTML = StatementAText;
    document.getElementById("statementB").innerHTML = StatementBText;
    document.getElementById("statementC").innerHTML = StatementCText;
    document.getElementById("statementD").innerHTML = StatementDText;

}

        
