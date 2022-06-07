export class Invoice {
    constructor(n, a, d) {
        this.type = 'Invoice';
        this.type;
        this.name = n;
        this.amount = a;
        this.details = d;
    }
    format() {
        return this.name === '' ? `${this.amount}R$ for ${this.details}` :
            `${this.name} owes ${this.amount}R$ for ${this.details}`;
    }
}
export class Payment {
    constructor(n, a, d) {
        this.type = 'Payment';
        this.type;
        this.name = n;
        this.amount = a;
        this.details = d;
    }
    format() {
        return this.name === '' ? `${this.amount}R$ for ${this.details}` :
            `${this.name} is owed ${this.amount}R$ for ${this.details}`;
    }
}
export class CreateLogsList {
    constructor(c) {
        this.container = c;
    }
    render(log, heading) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = log.format();
        li.append(h4, p);
        this.container.append(li);
    }
}
