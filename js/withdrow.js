document.getElementById('btn-withdrow').addEventListener('click', function () {

    const newWithdrowAmount = getInputFieldValueById('withdrow-field');

    const previousWithdrowTotal = getTextElementValueById('withdrow-total');

    const previousRemainingBalance = getTextElementValueById('balance-total');

    if (newWithdrowAmount > previousRemainingBalance) {
        alert('Baper Bank E Etw Taka Nai');
        return;
    }

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    setTextElementValueById('withdrow-total', newWithdrowTotal);

    const newRemainingBalance = previousRemainingBalance - newWithdrowAmount;
    setTextElementValueById('balance-total', newRemainingBalance);
})