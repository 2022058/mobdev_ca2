import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
          }
        ]
      },
      {
        path: 'species',
        children: [
          {
            path: '',
            loadChildren: () => import('../species/species.module').then( m => m.SpeciesPageModule)
          },
          {
            path: ':id',
          loadChildren: () => import('../species-details/species-details.module').then( m => m.SpeciesDetailsPageModule)
        }
      ]
    },
    {
        path: 'starships',
        children: [
          {
            path: '',
            loadChildren: () => import('../starships/starships.module').then( m => m.StarshipsPageModule)
          },
          {
            path: ':id',
          loadChildren: () => import('../starships-details/starships-details.module').then( m => m.StarshipsDetailsPageModule)
        }
      ]
    },
    {
      path: 'specimen-details',
      children: [
        {
          path: '',
          loadChildren: () => import('../specimen-details/specimen-details.module').then( m => m.Specimen-detailsPageModule)
        },
        {
          path: ':id',
        loadChildren: () => import('../specimen-details-details/specimen-details-details.module').then( m => m.Specimen-detailsDetailsPageModule)
      }
    ]
  },
  {
    path: 'starships-details',
    children: [
      {
        path: '',
        loadChildren: () => import('../starships-details/starships-details.module').then( m => m.Spaceship-detailsPageModule)
      },
      {
        path: ':id',
      loadChildren: () => import('../starships-details-details/starships-details-details.module').then( m => m.Spaceship-detailsDetailsPageModule)
    }
  ]
},  
{
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
