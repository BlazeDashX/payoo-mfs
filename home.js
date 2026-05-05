// toggle feature
document.getElementById("quick-access-add-money-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-add-money-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-add-money-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.remove("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("transfer-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
    document.getElementById("transactions-section").classList.add("hidden");
});

document.getElementById("quick-access-cashout-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-cashout-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-cashout-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.remove("hidden");
    document.getElementById("transfer-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
    document.getElementById("transactions-section").classList.add("hidden");
});

document.getElementById("quick-access-transfer-money-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-transfer-money-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-transfer-money-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("transfer-section").classList.remove("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
    document.getElementById("transactions-section").classList.add("hidden");
});

document.getElementById("quick-access-get-bonus-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-get-bonus-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-get-bonus-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("transfer-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.remove("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
    document.getElementById("transactions-section").classList.add("hidden");
});

document.getElementById("quick-access-pay-bill-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-pay-bill-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-pay-bill-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("transfer-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.remove("hidden");
    document.getElementById("transactions-section").classList.add("hidden");
});

document.getElementById("quick-access-transactions-btn").addEventListener("click", function () {
    resetButtons();
    document.getElementById("quick-access-transactions-btn").style.backgroundColor = "#eaf4ffff";
    document.getElementById("quick-access-transactions-btn").style.border = "2px solid #0874f2";
    document.getElementById("add-money-section").classList.add("hidden");
    document.getElementById("cashout-section").classList.add("hidden");
    document.getElementById("transfer-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
    document.getElementById("transactions-section").classList.remove("hidden");
});

// reset style for toggle
const addBtn = document.getElementById("quick-access-add-money-btn");
const cashoutBtn = document.getElementById("quick-access-cashout-btn");
const transferBtn = document.getElementById("quick-access-transfer-money-btn");
const getBonusBtn = document.getElementById("quick-access-get-bonus-btn");
const payBillBtn = document.getElementById("quick-access-pay-bill-btn");
const transactionsBtn = document.getElementById("quick-access-transactions-btn");

function resetButtons() {
    addBtn.style.backgroundColor = "";
    addBtn.style.border = "";

    cashoutBtn.style.backgroundColor = "";
    cashoutBtn.style.border = "";

    transferBtn.style.backgroundColor = "";
    transferBtn.style.border = "";

    getBonusBtn.style.backgroundColor = "";
    getBonusBtn.style.border = "";

    payBillBtn.style.backgroundColor = "";
    payBillBtn.style.border = "";

    transactionsBtn.style.backgroundColor = "";
    transactionsBtn.style.border = "";
}

// Add money
const addMoney = document.getElementById("add-money");
addMoney.addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("bank-select").value;
    const accountNumber = document.getElementById("bank-acc-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(document.getElementById("balance-amount").innerText);

    if(bank=="" || accountNumber=="" || amount=="" || pin=="") {
        alert("Please fill all the fields");
        return;
    }

    if(amount>10000) {
        alert("You can add maximum 10000 tk at a time");
        return;
    }

    if(pin!=2222) {
        alert("Incorrect pin");
        return;
    }

    document.getElementById("balance-amount").innerText = availableBalance + amount;
    alert("Money added successfully");
});

// cashout
const cashout = document.getElementById("cashout");
cashout.addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("cashout-acc-number").value;
    const amount = parseInt(document.getElementById("cashout-amount").value);
    const pin = parseInt(document.getElementById("cashout-pin").value);
    const availableBalance = parseInt(document.getElementById("balance-amount").innerText);

    if(accountNumber=="" || amount=="" || pin=="") {
        alert("Please fill all the fields");
        return;
    }

    if(amount>10000) {
        alert("You can cashout maximum 10000 tk at a time");
        return;
    }

    if(pin!=2222) {
        alert("Incorrect pin");
        return;
    }

    document.getElementById("balance-amount").innerText = availableBalance - amount;
    alert("Money cashouted successfully");
});

// transfer money
const transfer = document.getElementById("transfer");
transfer.addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("transfer-number").value;
    const amount = parseInt(document.getElementById("transfer-amount").value);
    const pin = parseInt(document.getElementById("transfer-pin").value);
    const availableBalance = parseInt(document.getElementById("balance-amount").innerText);

    if(accountNumber=="" || amount=="" || pin=="") {
        alert("Please fill all the fields");
        return;
    }

    if(amount>10000) {
        alert("You can transfer maximum 10000 tk at a time");
        return;
    }

    if(pin!=2222) {
        alert("Incorrect pin");
        return;
    }

    document.getElementById("balance-amount").innerText = availableBalance - amount;
    alert("Money transferred successfully");
});

// get bonus
const getBonus = document.getElementById("get-bonus");
getBonus.addEventListener("click", function (event) {
    event.preventDefault();

    const referralCode = document.getElementById("cupon-code").value;
    const availableBalance = parseInt(document.getElementById("balance-amount").innerText);

    if(referralCode=="") {
        alert("Please fill all the fields");
        return;
    }
    if(referralCode.length!=6 ) {
        alert("Incorrect cupon code");
        return;
    }

    document.getElementById("balance-amount").innerText = availableBalance + 6000;
    alert("Bonus received successfully");
});

// pay bill


// transactions