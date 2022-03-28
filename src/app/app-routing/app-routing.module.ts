import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SwitchboardComponent} from "../switchboard/switchboard.component";
import {WeatherComponent} from "../weather/weather.component";

const routes: Routes = [
  {path: '', redirectTo: 'switchboard', pathMatch: 'full'},
  {path: 'switchboard', component: SwitchboardComponent},
  {path: 'weather', component: WeatherComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
