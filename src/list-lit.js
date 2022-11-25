import { LitElement, html, css } from 'lit';

export class ListLit extends LitElement {

    static styles = css`
    :host{
    --color-list: white;
    --position-items: center;
    }
    *{
        margin: 0;
        padding: 0;
    }
    ul {
        display: grid;
        justify-content: var(--position-items);
        z-index: 1;
        list-style-type: none;
        width: 32.7rem;
        border: 2px solid #18191f;
        box-shadow: 0px 4px 0px #18191f;
        border-radius: 16px;
        background: var(--color-list);
        padding-bottom: 1rem;
      }
    `;



    render() {
        return html`
        <ul>
            <slot></slot>
        </ul>
        `;
    }
}
customElements.define('list-lit', ListLit);