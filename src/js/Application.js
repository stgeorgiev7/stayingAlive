import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    let count = 0;

    this._beat = new Beat();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    this._beat.on('bit', () => {
      for(let i =0; i < lyrics.length; i++) {
        this._create(lyrics[i]);
      }
    });

    this._beat.emit(Beat.events.BIT);

    this.emit(Application.events.READY);

  }

  _create = (word) => {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = word;
    document.querySelector(".main").appendChild(message);
  }

}
