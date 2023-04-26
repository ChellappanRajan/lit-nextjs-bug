import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-tab")
export class MyTab extends LitElement {
  static styles = css`
    div {
      border-radius: 10px;
      color: var(--planet-color, blue);
    }
  `;

  @property() title!: string;

  render() {
    return html` <div>${this.title}</div> `;
  }
}

if (customElements.get("my-tab") === undefined) {
  customElements.define("my-tab", MyTab);
}
