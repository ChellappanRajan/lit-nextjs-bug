import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property } from "lit/decorators.js";

// @customElement("my-tabs")
export class MyTabs extends LitElement {
  static styles = css`
    .tabs {
      display: flex;
      gap: 20px;
    }
  `;

  @property() variant: any;

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log("firstUpdate", this.variant);
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log(this.variant);
  }

  render() {
    return html`
      <div class="tabs">
        <slot> </slot>
      </div>
    `;
  }
}

if (customElements.get("my-tabs") === undefined) {
  customElements.define("my-tabs", MyTabs);
}
