import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IceCreameComponent } from './components/ice-creame/ice-creame.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {
        path:'ice-creame',component:IceCreameComponent
    }
];
