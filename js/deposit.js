document.getElementById('btn-diposit').addEventListener('click', function () {
    const newdepositAmount = getInputFieldValueById('diposit-field');

    if (isNaN(newdepositAmount)) {
        alert('invalid number')
        return;
    }
    if(newdepositAmount <= 499){
        alert('Deposit below $500 are not allowed!!')
        return;
    }

    const previousDepositTotal = getTextElementValueById('Deposit-total');

    const newtDipositTotal = previousDepositTotal + newdepositAmount;
    setTextElementValueById('Deposit-total', newtDipositTotal);

    const previousRemainingBalance = getTextElementValueById('balance-total');

    const newRemainingBalance = previousRemainingBalance + newdepositAmount;
    setTextElementValueById('balance-total', newRemainingBalance);
})