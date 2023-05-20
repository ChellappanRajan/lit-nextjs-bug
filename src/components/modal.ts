import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-modal")
export class MyModal extends LitElement {
  static styles = css`
    :host {
      position:fixed;
      width:100%;
      height:100%;
      background:white;
      top: 0;
      left: 0;
    }
    .header{
      display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;

    }
    .btn{
      padding:10px;
    }
  `;

  dispatchCloseEvent(){
    const options = {
      detail: {},
      bubbles: true,
      composed: true
    };
    this.dispatchEvent(new CustomEvent('modal-close', options));
  }

  render() {
    return html`
      <div class="modal">
      <div class="header">
      <h1>Modal</h1>
      
      <button class="btn" @click=${()=>this.dispatchCloseEvent()}>
      x
      </button>
      </div>
        <slot> </slot>
      </div>
    `;
  }
}

if (customElements.get("my-modal") === undefined) {
  customElements.define("my-modal", MyModal);
}
