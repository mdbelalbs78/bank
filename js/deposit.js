document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2 
    const depoositField = document.getElementById('desposit-field');
    const newDepositTotalAmountstring = depoositField.value;
    const newDepositAmount = parseFloat(newDepositTotalAmountstring);

    // step-3 
    depoositField.value = '';

    // step-4 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5 

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


    // step-6  
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    
    // step-7 

    
})