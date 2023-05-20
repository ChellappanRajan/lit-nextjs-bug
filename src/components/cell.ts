import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-cell")
export class MyTableCell extends LitElement {
  static styles = css`
    :host {
      float: left; /* fix for  buggy browsers */
      display: table-column;
      width: 200px;
      background-color: #ccc;
    }
  `;

  render() {
    return html`
      <div class="cell-content">
        <slot> </slot>
      </div>
    `;
  }
}

if (customElements.get("my-cell") === undefined) {
  customElements.define("my-cell", MyTableCell);
}
