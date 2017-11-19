import {Component} from '@angular/core';
import {TextProcessor} from "./text-processor";
import {AsciiFrame} from "./ascii-frame";
import {FrameModel} from "./frame-model";
import {CookieService} from "ngx-cookie-service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'ascii-editor',
  templateUrl: './ascii-editor.component.html',
  styleUrls: ['./ascii-editor.component.css']
})
export class AsciiEditorComponent {

  textInput: string = 'Dear Frodo,\n' +
    '\n' +
    'Bad news has reached me here. I must go off at once. You had better leave Bag End soon, and get out of the Shire before the end of July at latest. I will return as soon as I can; and I will follow you, if I find that you are gone. Leave a message for me here, if you pass through Bree. You can trust the landlord (Butterbur). You may meet a friend of mine on the Road: a Man, lean, dark, tall, by some called Strider. He knows our business and will help you. Make for Rivendell. There I hope we may meet again. If I do not come, Elrond will advise you.\n' +
    '\n' +
    '[right]\n' +
    'Yours in haste\n' +
    'GANDALF.\n' +
    '\n' +
    '[justify]\n' +
    'PS. I hope Butterbur sends this promptly. A worthy man, but his memory is like a lumber-room: thing wanted always buried. If he forgets, I shall roast him.';
  textOutput: string;
  maxWidth: number;
  framesMap = {};
  frames = ['Brak', 'Minimum', 'Pergamin', 'Poziomy pergamin', 'Bluszcz', 'Własna'];
  frame: FrameModel;
  selectedFrame: string;
  width: number = 63;
  advancedFrame: boolean = false;

  private static cookieName = 'frame';

  constructor(private cookieService: CookieService) {
  }

  selectFrame() {
    if (this.selectedFrame !== 'Własna') {
      this.frame = this.framesMap[this.selectedFrame].cloneFrame();
    } else {
      const frameJson: string = this.cookieService.get(AsciiEditorComponent.cookieName);
      this.setFrameFromJson(frameJson);
    }
    this.processTextInput();
  }

  changeFrame() {
    this.selectedFrame = 'Własna';
    this.processTextInput();

    this.cookieService.set(AsciiEditorComponent.cookieName, JSON.stringify(this.frame), 90);
  }

  processTextInput() {
    let processor = new TextProcessor(this.width);
    processor.process(this.textInput);
    let asciiFrame: AsciiFrame = new AsciiFrame(this.frame);
    this.textOutput = asciiFrame.renderFramedText(processor);
    this.maxWidth = asciiFrame.left.width + this.width + asciiFrame.right.width;
  }

  getFrameAsJson(): string {
    return JSON.stringify(this.frame);
  }

  setFrameFromJson(frameJson: string) : void {
    console.log(frameJson);
    const loadedFrame = JSON.parse(frameJson);
    if (loadedFrame.hasOwnProperty('topLeft')
      && loadedFrame.hasOwnProperty('top')
      && loadedFrame.hasOwnProperty('topRight')
      && loadedFrame.hasOwnProperty('left')
      && loadedFrame.hasOwnProperty('right')
      && loadedFrame.hasOwnProperty('bottomLeft')
      && loadedFrame.hasOwnProperty('bottom')
      && loadedFrame.hasOwnProperty('bottomRight')
    ) {
      this.selectedFrame = 'Własna';
      this.frame = loadedFrame;
      this.processTextInput();
    }
  }

  ngOnInit(): void {
    this.framesMap['Brak'] = new FrameModel('', '', '', '', '', '', '', '');
    this.framesMap['Minimum'] = new FrameModel('.', '-', '.', '| ', ' |', '\'', '-', '\'');
    this.framesMap['Pergamin'] = new FrameModel('   __\n / \\ \n|   |\n \\_ |', '_\n\n', '\n\\    \n |   ', '    |   ', '   |   ', '    |   \n    |  /\n    \\_/_', '_\n\n_', '|___\n   /\n__/ ');
    this.framesMap['Poziomy pergamin'] = new FrameModel('         \n         \n         \n         \n  .------\n /  .-.  \n|  /   \\ \n| |\\_.  |\n|\\|  | /|\n| `---\' |', '\n\n\n\n-\n', '  .---.  \n /  .  \\ \n|\\_/|   |\n|   |  /|\n------\' |\n        |\n        |', '|       |  ', '  |', '|       |\n|       |\n\\       |\n \\     /\n  `---\'', '\n-\n\n\n', ' / \n-\'  \n\n\n');
    this.framesMap['Bluszcz'] = new FrameModel('                 \n          __     \n          \\_\\    \n        .-.  \\.-.\n       //-\\\\_//-\\\n     _((   \'-\'   \n    /_/))        \n ___\\_//         \n/_/  ((          ', '         __             \n  __     \\_\\  __        \n /_/        \\/_/        \n/  .-.   .-./  .-.   .-.\n\\_//-\\\\_//-\\\\_//-\\\\_//-\\\n\'-\'\\  \'-\'   \'-\'  /\'-\'   \n    \\__       __/\\      \n     \\_\\     /_/  \\__   \n                   \\_\\  ', '\n     __          \n    /_/          \n.-./  .-.        \n/-\\\\_//-\\\\       \n   \'-\'   ))_     \n        ((\\_\\    \n         \\\\_/___ \n          ))  \\_\\', '      )) __   \n__   // /_/\n\\_\\_((_/___\n     ))  \\_\\\n     \\\\\n      )) __\n__   // /_/\n\\_\\_(( /\n     \\\\', '        )) __ \n__   // /_/ \n\\_\\_((_/___ \n     ))  \\_\\\n     \\\\     \n      )) __ \n__   // /_/ \n\\_\\_(( /    \n     \\\\     ', '     ))\n     \\\\     __      \n  __  ))    \\_\\     \n  \\_\\_((   .-.  \\.-.\n       \\\\_//-\\\\_//-\\\n        \'-\'\\__\'-\'   \n            \\_\\\n\n', '         __             \n  __     \\_\\  __        \n /_/        \\/_/        \n/  .-.   .-./  .-.   .-.\n\\_//-\\\\_//-\\\\_//-\\\\_//-\\\n\'-\'\\  \'-\'   \'-\'  /\'-\'   \n    \\__       __/\\      \n     \\_\\     /_/  \\__   \n                   \\_\\  ', '((     \n       __     //     \n\\     /_/    ((  __  \n\\.-./  .-.   ))_/_/  \n//-\\\\_//-\\\\_//       \n\'   \'-\'__/\'-\'        \n      /_/            \n                     \n');
    this.selectedFrame = 'Pergamin';
    this.frame = this.framesMap[this.selectedFrame];
    this.processTextInput();
  }

}
