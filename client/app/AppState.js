import { dev } from "./env.js";
import { Post } from "./Models/Post.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  user = {};

  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {};

  /** @type {import('./Models/Value').Value[]} */
  values = [];

  socketData = [];

  /** @type {import('./Models/Post.js').Post[]} */
  posts = [];
  /** @type {import('./Models/Post.js').Post | null} */
  activePost = null;

  /**@type {import('./Models/CommentSection').CommentSection[]} */
  commentsSection = [];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});

if (dev) {
  // @ts-ignore
  window.appState = appState;
}
