//Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//Deposit Button Event Handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const despositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(despositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;
    
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
})

//Withdraw Button Event Handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;
    
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + -1*withdrawNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = "";
})
