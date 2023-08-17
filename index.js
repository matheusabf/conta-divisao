// funcao para mascarar os valores
function formatMoney(value){
    value = Math.ceil(value *100) / 100;
    value = value.toFixed(2);
    return "R$"+value;
}
function formatSplit(value){
    if(value == 1){
        return value+ " Pessoa";
    }
    else {
        return value + " Pessoas"
    }
}
function update(){
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;
    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(billEach);
}
// funcao para mascarar os valores
function formatMoney(value){
    value = Math.ceil(value *100) / 100;
    value = value.toFixed(2);
    return "R$"+value;
}
function formatSplit(value){
    if(value == 1){
        return value+ " Pessoa";
    }
    else {
        return value + " Pessoas"
    }
}
function update(){
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    if(bill < 0){
        exit
    }

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;
    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(billEach);
}
document.addEventListener('DOMContentLoaded', function() {
    const yourBillInput = document.getElementById('yourBill');

    yourBillInput.addEventListener('keydown', function(event) {
      if (event.key === '-' || event.key === '=' || event.key === '+') {
        event.preventDefault();
      }
    });
  });
