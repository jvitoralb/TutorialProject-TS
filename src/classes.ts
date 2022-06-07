import { Formatter } from './interfaces.js'

export class Invoice implements Formatter {
    readonly type: string  = 'Invoice'
    public name: string
    private amount: number
    readonly details: string

    constructor(n:string, a:number, d:string) {
        this.type
        this.name = n
        this.amount = a
        this.details = d
    }

    format() {
        return this.name === '' ? `${this.amount}R$ for ${this.details}` :
        `${this.name} owes ${this.amount}R$ for ${this.details}`
    }
}

export class Payment implements Formatter {
    readonly type: string = 'Payment'
    public name: string
    private amount: number
    readonly details: string

    constructor(n:string, a:number, d:string) {
        this.type
        this.name = n
        this.amount = a
        this.details = d
    }

    format() {
        return this.name === '' ? `${this.amount}R$ for ${this.details}` :
        `${this.name} is owed ${this.amount}R$ for ${this.details}`
    }
}

export class CreateLogsList {
    private container: HTMLUListElement
    
    constructor(c: HTMLUListElement) {
        this.container = c
    }

    render(log: Formatter, heading: string) {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')

        h4.innerText = heading
        p.innerText = log.format()
        li.append(h4, p)
        this.container.append(li)
    }
}

