/*file for creating custom, modular components*/

/*icon for navigation bar*/
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

/*links on home to different pages in site*/
class HomeLink extends HTMLElement{
    connectedCallback(){
        const url = this.getAttribute("url");
        const linkText = this.getAttribute("linkText")
        
        this.innerHTML = `
            <div class="homeLinks">
                <p><a href="${url}">${linkText}</a></p>
            </div>`;
    }
}
customElements.define("home-link", HomeLink);
