import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
