export class ContentButton {
  type: string = 'content-button';
  constructor(public text: string, public link: string) {}
}

export class ContentList {
  type: string = 'content-list';
  constructor(public content: string[]) {}
}

export class ContentListBig {
  type: string = 'content-list-big';
  constructor(public title: string, public content: ListBigItem[]) {}
}

export class ListBigItem {
  constructor(public title: string, public subTitle: string) {}
}

export class ContentText {
  type: string = 'content-text';
  constructor(public content: string) {}
}

export type Content =
  | ContentButton
  | ContentList
  | ContentListBig
  | ContentText;
