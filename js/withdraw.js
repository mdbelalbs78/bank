document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const newWtihdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWtihdrawAmountString);

    // step 2 


    // step-3 
    withdrawField.value = '';

    // step- 4 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step 5

    const newWithdrawField = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawField;

    // step-6 

    const balanceElemnt = document.getElementById('balance-total');
    const previousBalanceTotaString = balanceElemnt.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotaString);

    //  step-7

    const newBalanceTotal = previousBalanceTotal - newWithdrawField;
    balanceElemnt.innerText = newBalanceTotal;

})