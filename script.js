function buy(cost) {
    const h2 = document.getElementById("money");
    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);
    if (moneyValue >= cost) {
        let newValue = moneyValue - cost;

        if (newValue <= 0) {
            newValue = 0;
        }
        new Audio("assets/sounds/buy.wav").play();
        h2.textContent = "$" + newValue;
    }
}

function sell(cost) {
    const h2 = document.getElementById("money");
    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);
    if (!isNaN(moneyValue)) {
        h2.textContent = "$" + (moneyValue + cost);
    }
}
