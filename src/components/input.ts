import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";
import {ifDefined} from 'lit/directives/if-defined.js';

@customElement("my-input")
export class MyInput extends LitElement {
  static styles = css`
    :host {

    }
  `;
  @property() value!: string;

  render() {
    return html`
      <div class="my-input">
       <input .value=${ifDefined(this.value)} type="text"/>
      </div>
    `;
  }
}

if (customElements.get("my-cell") === undefined) {
  customElements.define("my-cell", MyInput);
}
