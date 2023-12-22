import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Commit } from '../../../../models/commit';
import { CommitType } from '../../../../interfaces/CommitType';

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

  ngOnInit() {
    console.log('RegisterCommitFormComponent.ngOnInit()')
    console.log(this.commit)
  }
  
}
