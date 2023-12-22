import { CommitType } from "../interfaces/CommitType";

export class Commit {

  constructor(
    public type: CommitType,
    public jiraIssues: string[],
  ) {
    console.log(this.type, this.jiraIssues)
  }

}
