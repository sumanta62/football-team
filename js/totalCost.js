
function getInputElementById(InpuValuId) {
    const playerField = document.getElementById(InpuValuId);
    const playerFieldString = playerField.value;
    const newPerPlayer = parseFloat(playerFieldString);
    playerField.value = '';
    return newPerPlayer;
}

function getTextElementById(elementId, values) {
    const newTotalExpensesAmount = document.getElementById(elementId);
    const newTotalExpensesAmountString = newTotalExpensesAmount.innerText;
    const newExpensesTotal = parseFloat(newTotalExpensesAmountString);
    newTotalExpensesAmount.innerText = values;
    return newExpensesTotal;
}


// Player Expenses
document.getElementById('btn-calculate').addEventListener('click', function () {

    // const arrayNumbers = addCard();
    const selectValuc = document.getElementById('selected-values');
    const selectString = selectValuc.innerText;
    const newSelect = parseFloat(selectString);

    const perPlayer = getInputElementById('per-player-cost');
    const totalPlayerExpenses = perPlayer * newSelect;
    
    if(isNaN(perPlayer)){
        alert('Please Select Player And Type Of Number!!')
    }
    else{
        getTextElementById('Expenses', totalPlayerExpenses);
    }

})


// Calculate Total
document.getElementById('btn-total-cost').addEventListener('click', function(){
    const managerField = getInputElementById('manegar-input-value');
    const coachField = getInputElementById('coach-inpue-value');

    const expensesAmount = document.getElementById('Expenses');
    const expensesAmountString = expensesAmount.innerText ;
    const currentExpensesAmount = parseFloat(expensesAmountString);
    
    const total = currentExpensesAmount + managerField + coachField ;
    if(isNaN(managerField) || isNaN(coachField)){
        alert('Please Type Of Number!!')
    }
    else{
        getTextElementById('total', total);
    }
    
})