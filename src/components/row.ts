import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-table-row")
export class MyTableRow extends LitElement {
  static styles = css`
    :host {
      display: table-row;
      width: auto;
      clear: both;   
    }
  `;



  render() {
    return html` <div>
    <slot>
    </slot>
    </div> `;
  }
}

if (customElements.get("my-table-row") === undefined) {
  customElements.define("my-table-row", MyTableRow);
}
