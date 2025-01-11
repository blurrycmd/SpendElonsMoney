// JavaScript for buying && selling items, creating the receipt and sfx.

items = {};

// This sets every sell button to disabled when the page reloads
for(let button of document.getElementsByClassName('sell_button')) {
	if(!button.classList.contains('disabled')) {
    	button.classList.add('disabled');
	}
}

//Buy Item
function buy(price, name, button) {
    const h2 = document.getElementById("money");

    let inputField = button.previousElementSibling;

    let times = parseInt(inputField.value, 10);

    if (times < 1 || isNaN(times)) {
        inputField.value = 1;
        times = 1;
    } else if (times > 999) {
        inputField.value = 999;
    }

    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);

    if (moneyValue < (price * times)) {
        times = Math.floor(moneyValue / price);
        inputField.value = times;
        if (times == 0) {
            button.classList.add('disabled');
            inputField.value = 1;
            times = 1;
        }
    }

    if (moneyValue >= (price * times)) {
        
        if (moneyValue >= moneyValue - (price * times)) {
            if (button.classList.contains('disabled')) {
                button.classList.remove('disabled');
            }
        }

        let newValue = moneyValue - (price * times);

        if (newValue <= 0) {
            newValue = 0;
        }

        new Audio("assets/sounds/buy.wav").play();
        h2.textContent = "$" + newValue;

        if (!items[name]) items[name] = { count: 0, price: price };
            items[name].count = items[name].count + (1 * times);
            updateReceipt();
		
		// Disable button if u broke
		if(newValue < (price * times)) {
        	button.classList.add('disabled');
		}
    }
    
    

	// Make it sellable again (goes to parent div, finds the sell button and enables it)
	const parentDiv = button.parentElement.parentElement;
	for (let element of parentDiv.getElementsByTagName('*')) {
		if (element.classList.contains('sell_button') && element.classList.contains('disabled') && items[name] && items[name].count > 0) {
            element.classList.remove('disabled');
		}
	}
}

//Sell Item
function sell(price, name, button) {
    const h2 = document.getElementById("money");

    let inputField = button.nextElementSibling;

    let times = parseInt(inputField.value, 10);

    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);

    if (times < 1 || isNaN(times)) {
        inputField.value = 1;
        times = 1;
    } else if (times > 999) {
        inputField.value = 999;
    }
    
    if (button.classList.contains('disabled')) {
        button.classList.remove('disabled');
    }

    if (items[name] && items[name].count > 0) {
        if (times > items[name].count) {
            times = items[name].count;
            inputField.value = times;
        }
        
        items[name].count = items[name].count - (1 * times);
        new Audio("assets/sounds/pop.ogg").play();
        h2.textContent = "$" + (moneyValue + (price * times));
        updateReceipt();

		// Disable button if you sold your last one just now
    	if (items[name] && items[name].count <= 0) {
        	button.classList.add('disabled');
    	}
	}
    else {
        button.classList.add('disabled');
    }
	
	// Make it buyable again (goes to parent div, finds the sell button and enables it)
	const parentDiv = button.parentElement.parentElement;
	for (let element of parentDiv.getElementsByTagName('*')) {
		if (element.classList.contains('buy_button') && element.classList.contains('disabled') && (items[name] && items[name].count > 0)) {
            element.classList.remove('disabled');
		}
	}
}

//Generate Receipt
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
        container.innerHTML += `<table><tr><td><h3 class="total_price">TOTAL</h3></td><td> <h3 class="total_price">$${totalValue}</h3> </td></tr></table>`;
        container.appendChild(document.createElement("hr"));
        container.innerHTML += `<p class="message2">Thank you for shopping.</p>`;
        container.innerHTML += `<p class="message2">See you soon!</p>`;
    } else {
        container.innerHTML = `<div class="message">Buy an Item first</div>`;
    }
}


//Special Items

let bought = false;

function twitter(button) {

    const h2 = document.getElementById("money");

    let moneyValue = parseInt(h2.textContent.replace("$", ""), 10);

    let inputField = button.previousElementSibling;

    let times = parseInt(inputField.value, 10);

    if (times < 1 || isNaN(times)) {
        inputField.value = 1;
        times = 1;
    } else if (times > 999) {
        inputField.value = 999;
    }

    if (moneyValue < (44000000000 * times)) {
        times = Math.floor(moneyValue / 44000000000);
        inputField.value = times;
        if (times == 0) {
            inputField.value = 1;
            times = 1;
        }
    }

    if (moneyValue >= (44000000000 * times)) {
        if (!bought) {
        document.getElementById("twitter").textContent = "X";
        document.getElementById("twitter_img").src = "assets/images/X_logo.png";
        new Audio("assets/sounds/twitter-sound.mp3").play();
        bought = true;
        }
    }    
}

//Easter Egg
function angry() {
    var image = document.getElementsByClassName("pfp")[0];
    image.style.filter = "sepia(100%) saturate(500%) hue-rotate(-50deg)";
    image.classList.add("shake");
    setTimeout(function() {
        image.style.filter = null;
        image.classList.remove("shake");
    }, 400);
}
