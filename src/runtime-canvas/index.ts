import { createRenderer } from "vue";
import { Application, Container, Sprite, Text, Texture } from "pixi.js";

export const renderer = createRenderer<Container, Container>({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error("Unknown element type");
    }
    return element;
  },
  patchProp(el, key, oldValue, newValiue) {
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(newValiue);
    }
  },
  remove(el) {
    if (el.parent) {
      el.parent.removeChild(el);
    }
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  parentNode(el) {
    return el.parent;
  },
  nextSibling() {
    return null;
  },
  setElementText() {},
});