import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { Commit } from '../../../../models/commit';
import { CommitType } from '../../../../interfaces/CommitType';
import { Database, ref, set } from '@angular/fire/database';
import { SaveCommitService } from '../../../../services/save-commit';

@Component({
  selector: 'app-register-commit-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './register-commit-form.component.html',
  styleUrl: './register-commit-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RegisterCommitFormComponent {
  @Input() public commit: Commit | null = null
  private database: Database = inject(Database);

  constructor(
    private saveCommitService: SaveCommitService,
  ) {}

  async ngOnInit() {
    console.log('RegisterCommitFormComponent.ngOnInit()')
    console.log(this.commit)
    if (this.commit) {
      await this.saveCommitService.saveCommit(this.commit);
    }
  }
  
}
