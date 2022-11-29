
const listArray = [];


function selectValue(elemet) {
    const playerName = elemet.parentNode.children[0].innerText;
    listArray.push(playerName);
    if (listArray.length > 5) {
        alert('Your Selected is Over');
        return;
    }
    disabledBtn(elemet);
}

function displayPlayerList() {
    const listContainer = document.getElementById('append-child');
    listContainer.innerText = '';
    for (let i = 0; i < listArray.length; i++) {
        const index = listArray[i];
        const liList = document.createElement('li');
        liList.innerText = index;
        listContainer.appendChild(liList);
        document.getElementById('selected-values').innerText = listArray.length;
    }
}

function disabledBtn(elemet) {
    elemet.setAttribute('disabled', true);
    if (elemet.getAttribute('disabled')) {
        elemet.style.background = 'gray';
        elemet.style.color = 'white';
    }
    displayPlayerList();
}

