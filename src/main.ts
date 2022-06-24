import { LitElement, html, customElement, css, property } from 'lit-element';
import { env } from './environment/environment';

interface formData{
    num1:number,
    num2:number
  }


@customElement('comp-main')
export class CompMain extends LitElement {

    static styles = css`
    :host {
        display: flex;
    }
    `;

    @property({ type: String }) message: string = 'Welcome to LitElement';


    @property({type:Object}) formData:formData = {num1:0,num2:0}

    @property({type:Number})
    sum = 0

    render() {
        return html`
      
        

        <form action="">
        <input type="text" .value=${this.formData.num1} @input=${(e:any)=>{this.formData.num1 = Number(e.target.value) }}>
      
        <input type="text" .value=${this.formData.num2} @input=${(e:any)=>{this.formData.num2 = Number(e.target.value ) }}>
        </form>
        
        <button @click=${this.addNum}>Add</button>
       
        <button @click=${this.clean}>Reset</button>
        <p>Result:${this.sum}</p>`

        ;
       
    }
  
        addNum():void{
            this.sum = this.formData.num1+this.formData.num2
          }
          clean():void{
            this.formData.num1 = 0
            this.formData.num2 = 0
            this.sum = 0
            
          }
          
    }
