import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
	{ path: 'list', component: ListComponent },
	{ path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);