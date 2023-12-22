import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommitType } from '../../interfaces/CommitType';
import { Commit } from '../../models/commit';
import { RegisterCommitFormComponent } from './components/register-commit-form/register-commit-form.component';

@Component({
  selector: 'app-register-commit-page',
  standalone: true,
  imports: [
    CommonModule,
    RegisterCommitFormComponent
  ],
  templateUrl: './RegisterCommitPage.component.html',
  styleUrl: './RegisterCommitPage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RegisterCommitPageComponent {
  public commits: Commit[] = [
    new Commit(CommitType.CLOSED_YESTERDAY, ['ITBUILD-1234', 'ITBUILD-1235']),
  ]
 }
