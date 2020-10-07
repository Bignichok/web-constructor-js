import { block } from "../utils/utils";
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "./bloks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.addBlock.bind(this));
  }

  get template() {
    return [block("title"), block("text")].join("");
  }

  addBlock(e) {
    e.preventDefault();
    const target = e.target;
    const type = target.name;
    const value = target.value.value;
    const styles = target.styles.value;

    let newBlock = {};

    if (type === "text") {
      newBlock = new TextBlock(value, { styles });
    } else if (type === "title") {
      newBlock = new TitleBlock(value, { styles });
    }
    // } else if (type === "columns") {
    //   newBlock = new ColumnsBlock(value, { styles });
    // } else if (type === "image") {
    //   newBlock = new ImageBlock(value, { styles });
    // }

    this.update(newBlock);
    target.value.value = "";
    target.styles.value = "";
  }
}
