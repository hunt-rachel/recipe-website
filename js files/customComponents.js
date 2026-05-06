/*file for creating custom, modular components*/

/*navigation bar*/
class NavigationBar extends HTMLElement {
    connectedCallback(){
        const navText = this.getAttribute("navText");
        const btnState = this.getAttribute("btnState");

        this.innerHTML = `
            <div class="navBar row centerVertical" id="nav">
                <span class=navIcon onclick="openOverlay()">&#9776</span>
                <h1 class="${btnState}" id="prevBtn" onclick="history.back()">&#8617;</h1>
                <h1 id="navTitleText">${navText}</h1>
                <div class="searchbarContainer centerVertical">
                    <form id="searchForm" autocomplete="off">
                        <div class="autocomplete">
                            <input type="search" id="searchInput" placeholder="search here...">
                            <a id="searchBtn">&#8981</a>
                        </div>
                    </form>
                </div>
            </div>`;
    }
}
customElements.define("nav-bar", NavigationBar);

/*navigation overlay*/
class NavigationOverlay extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`<div id="overlayNav" class="overlay">
            <a href="javascript:void(0)" class="closeOverlayBtn" onclick="closeOverlay()">&times</a>
            <div id="overlayLinks">
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
        const linkIcon = this.getAttribute("linkIcon");
        const iconColour = this.getAttribute("iconColour");
        const linkText = this.getAttribute("linkText");
        
        this.innerHTML = `
            <div class="homeLinkSection centerTxt"><a href="${url}">
                <h1 class=${iconColour}>${linkIcon}</h1>
                <p>${linkText}</p>
            </a></div>`;
    }
}
customElements.define("home-link", HomeLink);

//recipe listing
class RecipeListing extends HTMLElement{
    connectedCallback(){
        const id = this.getAttribute("id");

        const recipeName = recipesObj[id].title;
        var recipeTags = recipesObj[id].tags.slice();
        const heartID = recipesObj[id].stringID;

        var currTags = "";
        
        for(var i = 0; i < recipeTags.length; i++) {
            currTags += "<span>";
            currTags += recipeTags[i];
            currTags += "</span>";
        }

        this.innerHTML = `
        <div class="recipeListing centerVertical row">
            <button class="heart" id="${id}">&#9829;</button>
            <div class="listingText column">
                <a href="recipe-instructions.html?id=${id}">${recipeName}</a>
                <div class="tags row">
                    <p>${currTags}</p>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("recipe-listing", RecipeListing);

class FilterBlock extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="filterForm" class="column">
                <h2>filter by:</h2>
                
                <!--30 minutes or less-->
                <div class="filterListing">
                    <input type="checkbox" id="30orLess">
                    <label for="30orLess">30 mins or less</label>
                </div>

                <!--one pot-->
                <div class="filterListing">
                    <input type="checkbox" id="onePot">
                    <label for="30orLess">one pot</label>
                </div>

                <!--slow cooker-->
                <div class="filterListing">
                    <input type="checkbox" id="slowCooker">
                    <label for="30orLess">slow cooker</label>
                </div>

                <!--vegan-->
                <div class="filterListing">
                    <input type="checkbox" id="slowCooker">
                    <label for="30orLess">vegan</label>
                </div>

                <!--submit btn-->
                <input id="filterSubmitBtn" type="submit" value="go!">
            </form>
        `;
    }
}
customElements.define("filter-block", FilterBlock);
