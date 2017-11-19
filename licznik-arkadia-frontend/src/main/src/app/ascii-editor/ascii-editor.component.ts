import {Component} from '@angular/core';
import {TextProcessor} from "./text-processor";
import {AsciiFrame} from "./ascii-frame";
import {FrameModel} from "./frame-model";

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
  framesMap = {};
  frames = ['Brak', 'Pergamin', 'Minimum'];
  frame: FrameModel;
  selectedFrame: string = 'Pergamin';
  width: number = 65;
  advancedFrame: boolean = false;

  changeFrame() {
    this.frame = this.framesMap[this.selectedFrame];
    this.processTextInput();
  }

  processTextInput() {
    let processor = new TextProcessor(this.width);
    processor.process(this.textInput);
    let asciiFrame: AsciiFrame = new AsciiFrame(this.frame);
    this.textOutput = asciiFrame.renderFramedText(processor);
  }

  ngOnInit(): void {
    this.framesMap['Brak'] = new FrameModel('', '', '', '', '', '', '', '');
    this.framesMap['Pergamin'] = new FrameModel('   __\n / \\ \n|   |\n \\_ |', '_\n\n', '\n\\    \n |   ', '    |   ', '   |   ', '    |   \n    |  /\n    \\_/_', '_\n\n_', '|___\n   /\n__/ ');
    this.framesMap['Minimum'] = new FrameModel('.', '-', '.', '| ', ' |', '\'', '-', '\'');
    this.frame = this.framesMap['Pergamin'];

    this.processTextInput();
  }

}
