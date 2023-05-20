import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./modal";

@customElement("my-table")
export class MyTable extends LitElement {
  static styles = css`
    :host {
      display: table;
      width: auto;
      background-color: #eee;
      border: 1px solid #666666;
      border-spacing: 5px;
    }
  `;

  @property() title!: string;

  @state() showModal = false;

  protected firstUpdated(
  ): void {
    this.addEventListener('modal-close',()=>{
      this.showModal = false;
    })
    this.watchMediaQueryChange();
  }

  watchMediaQueryChange(){
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    mediaQueryList.addListener(async (e) => {
      if (e.matches) {
        this.showModal = true;
        await this.updateComplete;
        this.moveElementsToMobileView();
      }else{
        this.showModal = false;
      }
    });
  }

  moveElementsToMobileView():void{
    const fragment = document.createDocumentFragment();
    this.querySelectorAll('my-table-row').forEach((cell)=>{
      fragment.appendChild(cell.cloneNode(true));
    });
    const modalBody = this.shadowRoot?.querySelector(".modal-body");
    modalBody?.appendChild(fragment);
  }
  

  render() {
    return html`<div>
    <slot>
    </slot>
    ${
      this.showModal ?
    html`
    <my-modal>
      <div class="modal-body">
      </div>
    </my-modal>
    `: ''
    }  
    </div> `;
  }
}

if (customElements.get("my-table") === undefined) {
  customElements.define("my-table", MyTable);
}
