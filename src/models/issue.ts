import { IssueType } from './issue-type';

export class Issue {
  id: string;
  createdAt: number;
  description: string;
  tags: string[];
  imageUrl: string;
  issueTypeHref: IssueType;
  state:string;
  location: {
    coordinates:[number]
  }
}
