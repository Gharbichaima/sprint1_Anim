import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { RechercheParRaceComponent } from './recherche-par-race/recherche-par-race.component';

const routes: Routes = [
  {path: "animals", component : AnimalsComponent},
  {path: "add-animal", component :AddAnimalComponent},
  {path: "updateAnimal/:id", component :UpdateAnimalComponent},
  {path: "rechercheParRace", component : RechercheParRaceComponent},
  { path: "", redirectTo: "animals", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
