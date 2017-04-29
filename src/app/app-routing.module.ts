import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspressoJournalComponent } from './espresso-journal/espresso-journal.component';
import { EspressoJournalEntryComponent } from './espresso-journal-entry/espresso-journal-entry.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'espresso-journal', component: EspressoJournalComponent },
  { path: 'espresso-journal-entry', component: EspressoJournalEntryComponent },

  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
