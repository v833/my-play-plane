import { Component, ComputedOptions, createRenderer, MethodOptions } from "vue";
import { Container, Sprite, Text, Texture } from "pixi.js";

const renderer = createRenderer<Container, Container>({
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
  patchProp(el, key, oldValue, newValue) {
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(newValue);
        break
      
      default:
        el[key] = newValue;
        break
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

export const createApp = (rootcomponent: Component<any, any, any, ComputedOptions, MethodOptions>) => {
  return renderer.createApp(rootcomponent);
} 