/*file for creating custom, modular components*/

/*navigation bar*/
class NavigationBar extends HTMLElement {
    connectedCallback(){
        const navText = this.getAttribute("navText");

        this.innerHTML = `
            <div class="navBar row centerVertical" id="nav">
               <span class=navIcon onclick="openOverlay()">&#9776</span>
               <h1 id="navTitleText">${navText}</h1>
               <div class="searchbarContainer centerVertical">
                    <form action="/recipes-list.html">
                        <input type="text" placeholder="search here...">
                        <button type="submit">&#8981</button>
                    </form>
                </div>
            </div>`;
    }
}
customElements.define("nav-bar", NavigationBar);

class SecondaryNavBar extends HTMLElement {
    connectedCallback(){
        const navText = this.getAttribute("navText");

        this.innerHTML = `
            <div class="navBar row centerVertical" id="nav">
               <span class=navIcon onclick="openOverlay()">&#9776</span>
               <h1 id=prevBtn onclick="history.back()">&#8617;</h1>
               <h1 id="navTitleText">${navText}</h1>
               <div class="searchbarContainer centerVertical">
                    <form action="/recipes-list.html">
                        <input type="text" placeholder="search here...">
                        <button type="submit">&#8981</button>
                    </form>
                </div>
            </div>`;
    }
}
customElements.define("nav-bar-2", SecondaryNavBar);

/*navigation overlay*/
class NavigationOverlay extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`<div id="overlayNav" class="overlay">
            <a href="javascript:void(0)" class="closeOverlayBtn" onclick="closeOverlay()">&times</a>
            <div class="overlayLinks">
                <a href="index.html">home</a>
                <a href="recipes-list.html">all recipes</a>
                <a href="favourites.html">favourites</a>
            </div>
        </div>`;
    }
}
customElements.define("nav-overlay", NavigationOverlay);

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

//recipe listing
class RecipeListing extends HTMLElement{
    connectedCallback(){
        const id = this.getAttribute("id");

        const recipeName = recipesObj[id].title;
        var recipeTags = recipesObj[id].tags.slice();

        var currTags = "";
        
        for(var i = 0; i < recipeTags.length; i++) {
            currTags += "<span>";
            currTags += recipeTags[i];
            currTags += "</span>";
        }

        this.innerHTML = `
        <div class="recipeListing centerVertical row">
            <div class="star">&#9733;</div>
            <div class="listingText column">
                <a href="recipe-instructions.html?id=${id}"&prev=${id}>${recipeName}</a>
                <div class="tags row">
                    <p>${currTags}</p>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("recipe-listing", RecipeListing);

class RecipeTitle extends HTMLElement {

}
customElements.define("recipe-title", RecipeTitle);
