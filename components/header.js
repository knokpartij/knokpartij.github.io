class Header extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <header>
        <a class="header_logotext" href="/index.html">
            <img fetchpriority="high" src="/img/knoklogonotext.png" alt="Knokpartij logo" style="height: 150px; width: 150px;">
            <h1>
                Knokpartij
            </h1>
        </a>
        <a class="header_link" href="/index.html">
            <h1>Home</h1>
        </a>
        <a class="header_link" href="/programma.html">
            <h1>Programma</h1>
        </a>
        <a class="header_link" href="/lijst.html">
            <h1>Lijst</h1>
        </a>
        <!-- <a class="header_link" href="/over-ons.html">
            <h1>Over ons</h1>
        </a> -->
    </header>
    <hr></hr>
    `;
  }
}

customElements.define('header-component', Header);