import { CommitType } from "../interfaces/CommitType";

export class Commit {
  public uuid: string
  constructor(
    public type: CommitType,
    public jiraIssues: string[],
  ) {
    console.log(this.type, this.jiraIssues)
    this.uuid = '497599e7-c37e-4911-95aa-2b9abf3e3c90'
  }

}
