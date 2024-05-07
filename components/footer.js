class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <hr></hr>
    <footer>
        <div class="header_logotext">
            <img src="img/knoklogonotext.png" alt="Knokpartij logo" style="height: 150px;">
            <h1>
                De Knokpartij
            </h1>
        </div>
        <p class="footer-text">
            Contact:<br>
            E-Mail: <a href="mailto:knokpartij@gmail.com">knokpartij@gmail.com</a><br>
            Instagram: <a href="https://www.instagram.com/knokpartijru/">@knokpartijru</a>
        </p>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);