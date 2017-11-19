import {TextProcessor} from "./text-processor";
import {FrameModel} from "./frame-model";

export class AsciiFrame {
  topLeft: FrameFragment;
  top: FrameFragment;
  topRight: FrameFragment;
  left: FrameFragment;
  right: FrameFragment;
  bottomLeft: FrameFragment;
  bottom: FrameFragment;
  bottomRight: FrameFragment;


  constructor(frame: FrameModel) {
    this.topLeft = new FrameFragment(frame.topLeft);
    this.top = new FrameFragment(frame.top);
    this.topRight = new FrameFragment(frame.topRight);
    this.left = new FrameFragment(frame.left);
    this.right = new FrameFragment(frame.right);
    this.bottomLeft = new FrameFragment(frame.bottomLeft);
    this.bottom = new FrameFragment(frame.bottom);
    this.bottomRight = new FrameFragment(frame.bottomRight);
  }

  renderFramedText(textProcessor: TextProcessor): string {
    let lines: string[] = textProcessor.buildLines();
    let totalWidth: number = textProcessor.width + this.left.width + this.right.width;
    let totalHeight: number = lines.length + this.top.height + this.bottom.height;

    let output = AsciiFrame.buildEmptyPaper(totalHeight, totalWidth);
    this.renderTop(output);
    this.renderBody(lines, output);
    this.renderBottom(output);


    return output.join('\n');
  }

  private renderTop(output: string[]) {
    const totalWidth = output[0].length;
    let lineNumber: number = 0;
    if (!this.topLeft.isEmpty()) {
      for (let s of this.topLeft.text) {
        output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], 0, s.length, s);
        lineNumber++;
      }
    }
    if (!this.top.isEmpty()) {
      lineNumber = 0;
      for (let s of this.top.text) {
        output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], this.topLeft.width, totalWidth - this.topRight.width, s);
        lineNumber++;
      }
    }
    if (!this.topRight.isEmpty()) {
      lineNumber = 0;
      for (let s of this.topRight.text) {
        output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], totalWidth - s.length, totalWidth, s);
        lineNumber++;
      }
    }
  }

  private renderBody(lines: string[], output: string[]) {
    let lineNumber: number = this.top.height;
    let lineNumberLeft: number = 0;
    let lineNumberRight: number = 0;
    for (let s of lines) {
      if (lineNumber >= this.topLeft.height) {
        const fragment = this.left.text[lineNumberLeft];
        output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], 0, fragment.length, fragment);
        lineNumberLeft++;
        lineNumberLeft = lineNumberLeft % this.left.height;
      }
      if (lineNumber >= this.topRight.height) {
        const fragment = this.right.text[lineNumberRight];
        output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], output[0].length - fragment.length, output[0].length, fragment);
        lineNumberRight++;
        lineNumberRight = lineNumberRight % this.right.height;
      }
      output[lineNumber] = AsciiFrame.replaceRange(output[lineNumber], this.left.width, this.left.width + s.length, s);
      lineNumber++;
    }
  }

  private renderBottom(output: string[]) {
    const totalWidth = output[0].length;
    let lineNumber: number = 0;
    if (!this.bottomLeft.isEmpty()) {
      for (let s of this.bottomLeft.text) {
        const index = (output.length - this.bottomLeft.height + lineNumber);
        output[index] = AsciiFrame.replaceRange(output[index], 0, s.length, s);
        lineNumber++;
      }
    }
    if (!this.bottom.isEmpty()) {
      lineNumber = 0;
      for (let s of this.bottom.text) {
        const index = (output.length - this.bottom.height + lineNumber);
        output[index] = AsciiFrame.replaceRange(output[index], this.bottomLeft.width, totalWidth - this.bottomRight.width, s);
        lineNumber++;
      }
    }
    if (!this.bottomRight.isEmpty()) {
      lineNumber = 0;
      for (let s of this.bottomRight.text) {
        const index = (output.length - this.bottomRight.height + lineNumber);
        output[index] = AsciiFrame.replaceRange(output[index], totalWidth - s.length, totalWidth, s);
        lineNumber++;
      }
    }
  }

  private static buildEmptyPaper(totalHeight: number, totalWidth: number) {
    let output: string[] = [];
    for (let i = 0; i < totalHeight; i++) {
      output.push(' '.repeat(totalWidth))
    }
    return output;
  }

  private static replaceRange(s, start, end, substitute) {
    if (start === end || substitute === '') {
      return s;
    }
    const gap = end - start;
    if (substitute.length < gap) {
      substitute = substitute.repeat(Math.ceil(gap / substitute.length));
    }
    if (substitute.length > gap) {
      substitute = substitute.substring(0, gap);
    }
    return s.substring(0, start) + substitute + s.substring(end);
  }

  private static maxWidth(block: string) {
    let max: number = 0;
    for (let s of block.split('\n')) {
      if (s.length > max) {
        max = s.length;
      }
    }
    return max;
  }
}

class FrameFragment {
  text: string[];
  width: number;
  height: number;

  constructor(text: string) {
    this.text = text.split('\n');
    this.width = 0;
    for (let s of this.text) {
      if (s.length > this.width) {
        this.width = s.length;
      }
    }
    this.height = this.text.length
  }

  isEmpty(): boolean {
    return this.height === 1 && this.width === 0;
  }
}
