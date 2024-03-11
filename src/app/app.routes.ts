import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewComponent } from './components/new/new.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: "",component: HomepageComponent},
    { path: "new",component: NewComponent},
    { path: "details",component: DetailsComponent}






];
