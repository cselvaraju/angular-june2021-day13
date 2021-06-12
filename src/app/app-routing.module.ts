import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'blog', component: BlogComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
