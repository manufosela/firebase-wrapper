import { html, css, LitElement } from 'lit';
import '@firebase-utils/firebase-loginbutton';
import '@firebase-utils/firebase-crud';

export class FirebaseWrapper extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--firebase-wrapper-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      id: { type: String },
      apiKey: { type: String, attribute: 'api-key' },
      domain: { type: String, attribute: 'domain' },
      messagingSenderId: { type: String, attribute: 'messaging-sender-id' },
      appId: { type: String, attribute: 'app-id' },
      showEmail: { type: Boolean, attribute: 'show-email' },
      showPhoto: { type: Boolean, attribute: 'show-photo' },
      showUser: { type: Boolean, attribute: 'show-user' },
    };
  }

  constructor() {
    super();
    this.id = Math.random().toString(36).substring(7);
    this.apiKey = '';
    this.domain = '';
    this.messagingSenderId = '';
    this.appId = '';
    this.showEmail = false;
    this.showPhoto = false;
    this.showUser = false;

    document.addEventListener('wc-ready', this._componentReady.bind(this));
  }

  firstUpdated() {
    this.firebaseLoginbutton = document.createElement('firebase-loginbutton');
    this.firebaseLoginbutton.setAttribute('id',`firebaseLoginbutton-${this.id}`);
    this.firebaseLoginbutton.setAttribute('api-key', this.apiKey);
    this.firebaseLoginbutton.setAttribute('domain', this.domain);
    this.firebaseLoginbutton.setAttribute('messaging-sender-id', this.messagingSenderId);
    this.firebaseLoginbutton.setAttribute('app-id', this.appId);
    if (this.showEmail) {
      this.firebaseLoginbutton.setAttribute('show-email', this.showEmail);
    }
    if (this.showPhoto) {
      this.firebaseLoginbutton.setAttribute('show-photo', this.showPhoto);
    }
    if (this.showUser) {
      this.firebaseLoginbutton.setAttribute('show-user', this.showUser);
    }
    this.shadowRoot.appendChild(this.firebaseLoginbutton);
    
    this.firebaseCrud = document.createElement('firebase-crud');
    this.firebaseCrud.setAttribute('id',`firebaseCrud-${this.id}`);
    this.firebaseCrud.setAttribute('reference-id', `firebaseLoginbutton-${this.id}`);
    this.shadowRoot.appendChild(this.firebaseCrud);
  }

  _componentReady(e) {
    if (e.detail.id === `firebaseLoginbutton-${this.id}`) {
      console.log('firebaseLoginbutton ready');
    }
    if (e.detail.id === `firebaseCrud-${this.id}`) {
      console.log('firebaseCrud ready');
    }
  }

  render() {
    return html``;
  }
}