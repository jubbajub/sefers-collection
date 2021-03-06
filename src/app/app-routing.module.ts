import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'zahlenraten',
    loadChildren: () => import('./zahlenraten/zahlenraten.module').then( m => m.ZahlenratenPageModule)
  },
  {
    path: 'zahlenraten2',
    loadChildren: () => import('./zahlenraten2/zahlenraten2.module').then( m => m.Zahlenraten2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
