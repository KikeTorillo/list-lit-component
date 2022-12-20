import { LitElement, html,css } from 'lit';

export class ListItemLit extends LitElement {

    static get properties () {
        return{
            content: {type:String}
        };
    }

    constructor(){
        super();
        this.content='';
    }

    static styles = css`
    :host{
        --position-items: center;
        --hover-color: green;
        --hover-background-color: white;
        --text-color: black;
    }
    *{
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
    }
    li {
        padding-top: 1rem;
        margin-left: 1rem;
        text-align: var(--position-items);
        color: var(--text-color);
      }
      li:hover {
        cursor: pointer;
        color: var(--hover-color);
        background-color: var(--hover-background-color);
      }
    `;

    render() {
        return html`
        <li>${this.content}</li>
        `;
    }
}
customElements.define('list-item-lit', ListItemLit);