import { Inject, inject } from "@angular/core";
import { Database } from "@angular/fire/database";
import { Commit } from "../models/commit";

@Inject({
  providedIn: 'root'
})
export class SaveCommitService {
  constructor(private db: AngularFireDatabase) {}

  
  private database: Database = inject(Database);

  saveCommit(commit: Commit) {
    this.database.app.
  }
}