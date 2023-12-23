import { Inject, inject } from "@angular/core";
import { Database, ref, set } from "@angular/fire/database";
import { Commit } from "../models/commit";

@Inject({
  providedIn: 'root'
})
export class SaveCommitService {
  
  private database: Database = inject(Database);

  async saveCommit(commit: Commit) {
    await set(ref(this.database, 'commits/' + commit.uuid), commit);
  }
}