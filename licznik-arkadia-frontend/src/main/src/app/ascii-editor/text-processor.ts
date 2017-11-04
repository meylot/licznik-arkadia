import {TextLine} from "./text-line";

export class TextProcessor {
  lines: TextLine[] = [];
  align: string = 'justify';
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  process(buffer: string): void {
    let paragraphs = buffer.split(/\n/);
    for (let par of paragraphs) {
      this.processParagraph(par);
    }
  }

  private processParagraph(paragraph: string): void {
    if (this.processSpecialParagraph(paragraph)) {
      return;
    }

    let words = paragraph.split(/\s+/);
    let currentLine: TextLine = new TextLine(this.align);
    for (const word of words) {
      if (currentLine.length() + 1 + word.length <= this.width) {
        currentLine.addWord(word);
      } else {
        currentLine.isWrapped = true;
        this.lines.push(currentLine);
        currentLine = new TextLine(this.align);
        currentLine.addWord(word);
      }
    }
    this.lines.push(currentLine);
  }

  private processSpecialParagraph(paragraph: string): boolean {
    if (paragraph === '[left]') {
      this.align = 'left';
    } else if (paragraph === '[right]') {
      this.align = 'right';
    } else if (paragraph === '[center]') {
      this.align = 'center';
    } else if (paragraph === '[justify]') {
      this.align = 'justify';
    } else {
      return false;
    }
    return true;
  }

  build(): string {
    let output: string = '';
    for (let line of this.lines) {
      output += line.build(this.width);
      output += '\n'
    }
    return output;
  }
}
