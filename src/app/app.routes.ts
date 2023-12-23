import { Routes } from '@angular/router';
import { RegisterCommitPageComponent } from './pages/RegisterCommitPage/RegisterCommitPage.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { SaveCommitService } from './services/save-commit';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'register-commit',
    providers: [SaveCommitService],
    component: RegisterCommitPageComponent
  },
];
