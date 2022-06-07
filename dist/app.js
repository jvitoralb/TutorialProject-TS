import { Payment, Invoice, CreateLogsList } from './classes.js';
const details = document.querySelector('#details');
const toFrom = document.querySelector('#to-from');
const amount = document.querySelector('#amount');
const logType = document.querySelector('#type');
const logsBook = document.querySelector('#logs');
const form = document.querySelector('#form');
const createCloseButton = () => {
    const closeButton = document.createElement('button');
    closeButton.classList.add('btn', 'btn-close', 'float-end');
    let lastLi = logsBook.lastChild;
    lastLi.insertBefore(closeButton, lastLi.firstChild);
    closeButton.addEventListener('click', () => {
        let parent = closeButton.parentNode;
        logsBook.removeChild(parent);
    });
};
const handleData = () => {
    const logsList = new CreateLogsList(logsBook);
    let howMuch = amount.valueAsNumber;
    let logDetail = details.value;
    let name = toFrom.value;
    let newLog;
    if (logType.value === 'payment') {
        newLog = new Payment(name, howMuch, logDetail);
    }
    else {
        newLog = new Invoice(name, howMuch, logDetail);
    }
    logsList.render(newLog, newLog.type);
    createCloseButton();
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleData();
    let formInputs = [
        toFrom,
        amount,
        details,
        logType
    ].map(item => item.value = '');
});
