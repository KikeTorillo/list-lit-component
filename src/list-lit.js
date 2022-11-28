import { LitElement, html, css } from 'lit';

export class ListLit extends LitElement {

    static styles = css`
    :host{
    --color-list: white;
    --border-color: black;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        display: grid;
        grid-template-columns: 100%;
        z-index: 1;
        list-style-type: none;
        width: 32.7rem;
        height: 10rem;
        border: .2rem solid var(--border-color);
        box-shadow: 0px 4px 0px var(--border-color);
        border-radius: 1.6rem;
        background: var(--color-list);
        padding: .5rem;
        overflow-y: scroll;
      }
      ul::-webkit-scrollbar{
        width: 1rem;    
        border-radius: 2.5rem;
      }
      ul::-webkit-scrollbar-thumb {
        background: var(--color-list);        /* color of the tracking area */
      }
      ul::-webkit-scrollbar-thumb {
        background-color: var(--border-color);    /* color of the scroll thumb */
        border-radius: 1rem;
        border: .2rem solid var(--color-list); 
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