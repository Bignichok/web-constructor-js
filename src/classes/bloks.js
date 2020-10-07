import { row, col, css } from "../utils/utils";

class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("method to html need to be realized");
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super("title", value, options);
  }
  toHTML() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super("image", value, options);
  }

  toHTML() {
    const { styles, imageStyles, alt = "" } = this.options;
    return row(
      `<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super("columns", value, options);
  }

  toHTML() {
    const { styles } = this.options;
    const columnItems = this.value.map((e) => col(`<p>${e}</p>`)).join(" ");
    return row(columnItems, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super("text", value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
