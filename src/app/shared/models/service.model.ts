import { Content } from './index';

export class Service {
  constructor(
    public title: string,
    public subTitle: string,
    public imgUrl: string,
    public contents: Content[],
    public link: string
  ) {}
}
