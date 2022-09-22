const initialPrice = document.querySelector(".initial-price");
const QuantityOfStocks = document.querySelector(".quantity");
const currentPrice = document.querySelector(".current-price");
const btnShow = document.querySelector(".btn-show");
const showOutput = document.querySelector(".output-content");

function showTheMessage(message, color){
    showOutput.innerText = message;
    showOutput.style.color = color;
}

function calculatingProfitAndLoss(initial, qty, current){
        if(initial > 0 && qty > 0 && current > 0 ){
   if(initial > current){
       var loss = (initial - current) * qty;
       var lossPercentage = (loss/initial);
       lossPercentage = lossPercentage.toFixed(2);

       showTheMessage(`Hey! the loss is ${loss} and the loss percentage is ${lossPercentage}%`, 'rgb(197, 82, 82)');
   }else{
       if(current > initial){
             var profit = (current - initial) * qty;
             var profitPercentage = (profit/initial);
             profitPercentage = profitPercentage.toFixed(2);

             showTheMessage(`Hey! the profit is ${profit} and the profit percentage is ${profitPercentage}%`, 'rgb(147, 197, 82)');
       }else{
           showTheMessage("No pain no gain and no gain no pain", 'rgb(238, 197, 14)');
       }
   }
}
else{
    showTheMessage("Invalid input", 'red');
}
}

function clickHandler(){
    if(initialPrice.value.length != 0 && QuantityOfStocks.value.length != 0 && currentPrice.value.length !=0){
    var ip = Number(initialPrice.value);
    var qt = Number(QuantityOfStocks.value);
    var cp = Number(currentPrice.value);

    calculatingProfitAndLoss(ip, qt, cp);
    }else{
        showTheMessage("All the fields are mandatory to fill", 'white');
    }
}

btnShow.addEventListener("click", clickHandler);