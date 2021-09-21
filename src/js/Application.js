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

    this._beat = new Beat();
    this.addListener(Beat.events.BIT, this._create())

    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    setInterval(() => {
      count++;

      if (lyrics[count] === undefined) {
        count = 0;
      } else {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = lyrics[count];
        document.querySelector(".main").appendChild(message);
      }

    }, 600);

  }
}
