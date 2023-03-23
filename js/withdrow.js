document.getElementById('btn-withdrow').addEventListener('click', function () {

    const newWithdrowAmount = getInputFieldValueById('withdrow-field');

    const previousWithdrowTotal = getTextElementValueById('withdrow-total');

    const previousRemainingBalance = getTextElementValueById('balance-total');

    if (isNaN(newWithdrowAmount)) {
        alert('invalid number')
        return;
    }

    if (newWithdrowAmount <= 499) {
        alert('Cannot withdraw below $500')
        return;
    };

    if (newWithdrowAmount > previousRemainingBalance) {
        alert("Father's BANK does not have that much money");
        return;
    }

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    setTextElementValueById('withdrow-total', newWithdrowTotal);

    const newRemainingBalance = previousRemainingBalance - newWithdrowAmount;
    setTextElementValueById('balance-total', newRemainingBalance);
})