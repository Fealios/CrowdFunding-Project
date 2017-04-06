import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { Project } from './project.model';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'medical',
  //   component: ProjectComponent
  // },
  // {
  //   path: 'emergency',
  //   component: ProjectComponent
  // },
  // {
  //   path: 'education',
  //   component: ProjectComponent
  // },
  // {
  //   path: 'event',
  //   component: ProjectComponent
  // },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path:'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
