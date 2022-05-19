import { Content } from './index';

export class Post {
  constructor(
    public id: number,
    public title: string,
    public contents: Content[],
    public imgUrl: string,
    public author: string
  ) {}
}
