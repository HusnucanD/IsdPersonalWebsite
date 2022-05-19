import { Content } from './index';

export class Tab {
  constructor(
    public title: string,
    public contents: Content[],
    public logoUrl: string,
    public imgUrl: string,
    public visible: boolean
  ) {}
}
