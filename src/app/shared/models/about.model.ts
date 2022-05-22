import { Content } from './index';

export class About {
  constructor(
    public name: string,
    public title: string,
    public contents: Content[]
  ) {}
}
