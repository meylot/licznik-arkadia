export class FrameModel {
  topLeft: string;
  top: string;
  topRight: string;
  left: string;
  right: string;
  bottomLeft: string;
  bottom: string;
  bottomRight: string;


  constructor(topLeft: string, top: string, topRight: string, left: string, right: string, bottomLeft: string, bottom: string, bottomRight: string) {
    this.topLeft = topLeft;
    this.top = top;
    this.topRight = topRight;
    this.left = left;
    this.right = right;
    this.bottomLeft = bottomLeft;
    this.bottom = bottom;
    this.bottomRight = bottomRight;
  }

  cloneFrame() : FrameModel {
    return new FrameModel(this.topLeft, this.top, this.topRight, this.left, this.right, this.bottomLeft, this.bottom, this.bottomRight);
  }
}
