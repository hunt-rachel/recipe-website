function openOverlay() {
    document.getElementById("overlayNav").style.width = "25%";
}

function closeOverlay() {
    document.getElementById("overlayNav").style.width = "0%";
}

function autocomplete(inp, arr) {
    var currFocus;

    /*when user types in field */
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;

        /*close already open lists of autocomplete values */
        closeAllLists();

        if(!val) {return false;}

        currFocus = -1;

        /*creates div to hold values */
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        /*append div as child of autocomplete container */
        this.parentNode.appendChild(a);

        for(let i = 0; i < arr.length; i++) {
            /**check if item starts with same letters as input text value */
            if(arr[i].toUpperCase().includes(val.toUpperCase())) { 
                /**create div for each matching element */
                b = document.createElement("div");
                b.setAttribute("class", "autocomplete-item-text");

                /**bold the matching letters */
                var outputStr = arr[i].toUpperCase().replace(val.toUpperCase(), `<b>${val.toUpperCase()}</b>`);
                
                //set string to lower case so can be capitalised through css
                b.innerHTML = outputStr.toLowerCase();


                /**input field to hold curr array item value */
                b.innerHTML += `<input type='hidden' value="${arr[i]}">`;

                /**function when item value clicked */
                b.addEventListener("click", function(e) {
                    /**insert value for autocomplete text field */
                    inp.value = this.getElementsByTagName("input")[0].value;

                    /**close autocomplete value list(s) */
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    /**function when key on keyboard pressed */
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if(x) x = x.getElementsByTagName("div");

        /**if down arrow pressed, increase currFocus var and make curr item more visible */
        if(e.keyCode == 40) {
            currFocus++;
            addActive(x);
        }

        /**else if up arrow pressed, decrease curr focus variable and make current item more visible */
        else if(e.keyCode == 38) {
            currFocus--;
            addActive(x);
        }

        /**if enter key pressed, prevent form as whole from being submitted */
        else if(e.keyCode==13){
            e.preventDefault();
            if(currFocus > -1) {
                /**simulate 'click' on active item */
                if(x) x[currFocus].click();
            }
        }
    });

    /**classifies item as 'active' */
    function addActive(x) {
        if(!x) return false;
        removeActive(x);

        if(currFocus >= x.length) currFocus = 0;
        if(currFocus < 0) currFocus = (x.length - 1);
        x[currFocus].classList.add("autocomplete-active");
    }

    /**remove "active" class on all items - clean slate  */
    function removeActive(x) {
        for(let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    /**close all autocomplete lists in doc, except one passed as argument */
    function closeAllLists(elmt) {
        var x = document.getElementsByClassName("autocomplete-items");

        for(let i = 0; i < x.length; i++) {
            if(elmt != x[i] && elmt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /**hides autocomplete when user clicks elsewhere on page */
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    })
}

function assignBackBtn() {
    //prevents double class assignment
    if(document.getElementById(prevBtn).classList.contains("hidden") == false) {
        document.getElementById(prevBtn).classList.add("hidden");
    }
}

function assignSearchValue(inp) {
    var val = inp.value;
    var searchBtn = document.getElementById("searchBtn");

    //if search empty
    if(val == "") {
        searchBtn.href="/recipes-list.html";
    }

    //if search not empty
    else {
        searchBtn.href = "/recipes-search.html?search=" + val;
    }
}