Math.floor(Math.random() * 16777215).toString(16);

class Board {
    constructor({ wrapperSelector, itemClass, count }) {
        this.wrapper = document.querySelector(wrapperSelector);
        this.itemClass = itemClass;
        this.count = count;

        this.mouseenterHandler = this.mouseenterHandler.bind(this);
        this.mouseleaveHandler = this.mouseleaveHandler.bind(this);

        this.init();
    }

    generateRandomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
    }

    createItems() {
        new Array(this.count).fill().map(() => {
            const item = document.createElement("div");
            item.classList.add(this.itemClass);
            this.wrapper.append(item);
        });
    }

    mouseenterHandler(evt) {
        const target = evt.target;
        const color = "#" + this.generateRandomColor();
        target.style.backgroundColor = `${color}`;
        target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }

    mouseleaveHandler(evt) {
        const target = evt.target;
        target.style.backgroundColor = ``;
        target.style.boxShadow = `0 0 2px #000`;
    }

    addListeners() {
        this.wrapper.querySelectorAll("." + this.itemClass).forEach((item) => {
            item.addEventListener("mouseenter", this.mouseenterHandler);
            item.addEventListener("mouseleave", this.mouseleaveHandler);
        });
    }

    init() {
        this.createItems();
        this.addListeners();
    }
}

new Board({ wrapperSelector: "#board", itemClass: "square", count: 2000 });
