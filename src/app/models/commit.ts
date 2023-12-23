import { CommitType } from "../interfaces/CommitType";

export class Commit {
  public uuid: string
  constructor(
    public type: CommitType,
    public jiraIssues: string[],
  ) {
    console.log(this.type, this.jiraIssues)
    this.uuid = this.generateUUID()
  }
  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  
  }

}
