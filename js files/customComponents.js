/*file for creating custom, modular components*/
class HamburgerIcon extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div class="hamburgerContainer" onclick="activateNavDropdown(this)">
                <div class="topHamBar"></div>
                <div class="midHamBar"></div>
                <div class="bottomHamBar"></div>
            </div>
        `;
    }
}
customElements.define("hamburger-icon", HamburgerIcon);