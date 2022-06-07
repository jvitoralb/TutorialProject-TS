import { Payment, Invoice, CreateLogsList } from './classes.js'

const details = document.querySelector('#details') as HTMLTextAreaElement
const toFrom = document.querySelector('#to-from') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const logType = document.querySelector('#type') as HTMLSelectElement
const logsBook = document.querySelector('#logs') as HTMLUListElement
const form = document.querySelector('#form') as HTMLFormElement

const createCloseButton = () => {
    const closeButton = document.createElement('button')
    closeButton.classList.add('btn', 'btn-close', 'float-end')
    let lastLi = logsBook.lastChild!

    lastLi.insertBefore(closeButton, lastLi.firstChild)
    closeButton.addEventListener('click', () => {
        let parent = closeButton.parentNode!
        logsBook.removeChild(parent)
    })
}

const handleData = (): void => {
    const logsList = new CreateLogsList(logsBook)
    let howMuch = amount.valueAsNumber
    let logDetail = details.value
    let name = toFrom.value
    let newLog: Payment | Invoice

    if (logType.value === 'payment') {
        newLog = new Payment(name, howMuch, logDetail)
    } else {
        newLog = new Invoice(name, howMuch, logDetail)
    }
    logsList.render(newLog, newLog.type)
    createCloseButton()
}

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    handleData()

    let formInputs = [
        toFrom,
        amount,
        details,
        logType
    ].map(item => item.value = '')
})

