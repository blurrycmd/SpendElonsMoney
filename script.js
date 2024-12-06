const items = {}; 

function buy(price, name) {
    const h2 = document.getElementById("money");
    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);
    if (moneyValue >= price) {
        let newValue = moneyValue - price;

        if (newValue <= 0) {
            newValue = 0;
        }

        navigator.vibrate(200);
        new Audio("assets/sounds/buy.wav").play();
        h2.textContent = "$" + newValue;

        if (!items[name]) items[name] = { count: 0, price: price };
            items[name].count++;
            updateReceipt();
    }
}

function sell(price, name) {
    const h2 = document.getElementById("money");
    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);
    if (moneyValue != 0) {
        h2.textContent = "$" + (moneyValue + price);

        if (items[name] && items[name].count > 0) {
            items[name].count--;
            updateReceipt();
        }
    }
}

    function updateReceipt() {
        const container = document.getElementById("receipt-table");
        container.innerHTML = '';
        let totalValue = 0;
        let hasItems = false;

        const table = document.createElement("table");

        for (const [name, data] of Object.entries(items)) {
            if (data.count > 0) {
                hasItems = true;
                const row = document.createElement("tr");
                row.innerHTML = `<td>${name}</td> <td>${data.count}x</td> <td>$${data.price * data.count}</td>`;
                table.appendChild(row);
                totalValue += data.price * data.count;
            }
        }

        if (hasItems) {
            container.appendChild(table);
            container.appendChild(document.createElement("hr"));
            container.innerHTML += `<table><tr><td>TOTAL</td><td> $${totalValue} </td></tr></table>`;
        } else {
            container.querySelector(".message").style.display = "block";
        }
    }
