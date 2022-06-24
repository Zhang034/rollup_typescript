var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css, property } from 'lit-element';
let CompMain = class CompMain extends LitElement {
    constructor() {
        super(...arguments);
        this.message = 'Welcome to LitElement';
        this.formData = { num1: 0, num2: 0 };
        this.sum = 0;
    }
    render() {
        return html `
      
        

        <form action="">
        <input type="text" .value=${this.formData.num1} @input=${(e) => { this.formData.num1 = Number(e.target.value); }}>
      
        <input type="text" .value=${this.formData.num2} @input=${(e) => { this.formData.num2 = Number(e.target.value); }}>
        </form>
        
        <button @click=${this.addNum}>Add</button>
       
        <button @click=${this.clean}>Reset</button>
        <p>Result:${this.sum}</p>`;
    }
    addNum() {
        this.sum = this.formData.num1 + this.formData.num2;
    }
    clean() {
        this.formData.num1 = 0;
        this.formData.num2 = 0;
        this.sum = 0;
    }
};
CompMain.styles = css `
    :host {
        display: flex;
    }
    `;
__decorate([
    property({ type: String })
], CompMain.prototype, "message", void 0);
__decorate([
    property({ type: Object })
], CompMain.prototype, "formData", void 0);
__decorate([
    property({ type: Number })
], CompMain.prototype, "sum", void 0);
CompMain = __decorate([
    customElement('comp-main')
], CompMain);
export { CompMain };
