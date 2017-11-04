export class TextLine {
  words: string[] = [];
  isWrapped: boolean = false;
  align: string;

  constructor(align: string) {
    this.align = align;
  }

  length(): number {
    let sum: number = 0;
    for (let word of this.words) {
      sum += word.length;
    }
    sum += Math.max(0, this.words.length - 1);
    return sum;
  }

  addWord(word: string): void {
    this.words.push(word);
  }

  build(width: number): string {
    let output: string;
    let spaces: number[];

    if (this.align === 'left') {
      spaces = this.spacesAlignLeft(width);
    } else if (this.align === 'right') {
      spaces = this.spacesAlignRight(width);
    } else if (this.align === 'center') {
      spaces = this.spacesAlignCenter(width);
    } else if (this.align === 'justify') {
      spaces = this.spacesAlignJustify(width);
    }

    let wordN = 0;
    output = ' '.repeat(spaces[wordN]);
    for (let word of this.words) {
      wordN += 1;
      output += word;
      output += ' '.repeat(spaces[wordN]);
    }
    return output;
  }

  private spacesAlignLeft(width: number): number[] {
    let spaces: number[] = Array<number>(this.words.length + 1).fill(1);
    spaces[0] = 0;
    spaces[spaces.length - 1] = Math.max(0, width - this.length());
    return spaces;
  }

  private spacesAlignRight(width: number): number[] {
    let spaces: number[] = Array<number>(this.words.length + 1).fill(1);
    spaces[0] = Math.max(0, width - this.length());
    spaces[spaces.length - 1] = 0;
    return spaces;
  }

  private spacesAlignCenter(width: number): number[] {
    let spaces: number[] = Array<number>(this.words.length + 1).fill(1);
    const dif = Math.max(0, width - this.length());
    spaces[0] = Math.floor(dif / 2);
    spaces[spaces.length - 1] = dif - spaces[0];
    return spaces;
  }

  private spacesAlignJustify(width: number): number[] {
    if (this.words.length <= 1 || !this.isWrapped) {
      return this.spacesAlignLeft(width);
    }
    let spaces: number[] = Array<number>(this.words.length + 1).fill(1);
    spaces[0] = 0;
    spaces[spaces.length - 1] = 0;
    let dif = Math.max(0, width - this.length());
    while (dif > this.words.length - 1) {
      for (let i = 1; i < this.words.length; i++) {
        spaces[i]++;
        dif--;
      }
    }
    for (let i = 0; i < dif; i++) {
      const target = i / (dif + 1);
      const index = Math.round(target * (spaces.length - 2) + 1);
      spaces[index]++;
    }
    return spaces;
  }
}
