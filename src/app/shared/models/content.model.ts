export class ContentText {
  type: string = 'content-text';
  constructor(public content: string) {}
}

export class ContentList {
  type: string = 'content-list';
  constructor(public content: string[]) {}
}

export class ContentButton {
  type: string = 'content-button';
  constructor(public text: string, public link: string) {}
}

export type Content = ContentText | ContentList | ContentButton;
