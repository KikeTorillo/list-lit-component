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
    *{
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
    }
    li {
        padding-top: 1rem;
        margin-left: 1rem;
      }
      li:hover {
        cursor: pointer;
        color: lightcoral;
      }
    `;

    render() {
        return html`
        <li>${this.content}</li>
        `;
    }
}
customElements.define('list-item-lit', ListItemLit);