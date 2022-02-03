const HamNav = {
    items: {
        mouseEnter(item, customColor){
            if(!item) throw Error("ITEM NOT DEFINED.");
            if(!item.hasAttribute("link")) throw Error("ITEM's LINK ATTRIBUTE NOT DEFINED.");
            if(item.classList.contains("active")) return;
            item.classList.add("hover");

            if(customColor) item.style.backgroundColor = customColor;
        },
        mouseLeave(item){
            if(!item) throw Error("ITEM NOT DEFINED.");
            if(!item.hasAttribute("link")) throw Error("ITEM's LINK ATTRIBUTE NOT DEFINED.");
            if(item.classList.contains("active")) return;
            item.classList.remove("hover");
            
            if(item.style.backgroundColor) item.style.backgroundColor = "var(--nav-ham-itemColorNoHover)";
        },
        click(item){
            if(!item) throw Error("ITEM NOT DEFINED.");
            if(!item.hasAttribute("link")) throw Error("ITEM's LINK ATTRIBUTE NOT DEFINED.");
            if(item.classList.contains("active")) return;
            var link = item.getAttribute("link");
            console.log(link);
            window.location.href = link;
        },
    }
}