document.getElementById('btn-diposit').addEventListener('click', function () {
    const newdepositAmount = getInputFieldValueById('diposit-field');

    const previousDepositTotal = getTextElementValueById('Deposit-total');

    const newtDipositTotal = previousDepositTotal + newdepositAmount;
    setTextElementValueById('Deposit-total', newtDipositTotal);

    const previousRemainingBalance = getTextElementValueById('balance-total');

    const newRemainingBalance = previousRemainingBalance + newdepositAmount;
    setTextElementValueById('balance-total', newRemainingBalance);
})