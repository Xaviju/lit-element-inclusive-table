import { LitElement, html, property, customElement, css } from 'lit-element';

@customElement('iss-table')
export class IssTable extends LitElement {

    @property() caption = 'Grindcore bands';
    @property() headers = ['Band', 'Singer', 'Inception', 'Label'];
    @property() rows = [
        ['Napalm Death', 'Barney Greenway', '1981', 'Century Media'],
        ['Carcass', 'Jeff Walker', '1985', 'Earache'],
        ['Extreme Noise Terror', 'Dean Jones', '1985', 'Candlelight'],
        ['Discordance Axis', 'Jon Chang', '1992', 'Hydrahead']
    ];
    
    static get styles() {
        return css `
        :host() {
          margin: 1rem;
          display: block;
        }

        caption {
          font-weight: 600;
          margin-bottom: 1rem;
          font-style: normal;
          text-align: left;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          font-size: 0.8rem;
        }

        th {
          font-weight: 400;
          background: var(--neutral200, #f7f5f9);
          color: var(--accent600, #6979f8);
        }

        th > .table-header-container {
          justify-content: space-between;
          display: flex;
        }

        svg {
          width: 1rem;
        }

        th,
        td {
          border: 1px solid var(--neutral300, #ece9f1);
          border-collapse: collapse;
          padding: 1rem;
          text-align: left;
        }
      `;
    }
    render() {
        return html `
      <table>
        <caption>${this.caption}</caption>
        <thead>
          <tr>
            ${this.headers.map((header, index) => html `
            <th scope="col" key=${index}>${header}</th>
            `)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map((row, index) => html `
          <tr key=${index}>
            ${row.map((cell, index) => (html `
            <td key=${index}>${cell}</td>
            `))}
          </tr>
          `)}
        </tbody>
      </table>
      `;
    }
};