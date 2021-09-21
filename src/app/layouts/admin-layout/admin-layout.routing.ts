import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ConfiguracionComponent } from 'src/app/views/configuracion/configuracion.component';
import { CustodiaComponent } from 'src/app/views/custodia/custodia.component';
import { InversionComponent } from 'src/app/views/inversion/inversion.component';
import { OrdenesComponent } from 'src/app/views/ordenes/ordenes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'configuracion',   component: ConfiguracionComponent },
    { path: 'custodia',         component: CustodiaComponent },
    { path: 'inversion',          component: InversionComponent },
    { path: 'ordenes',          component: OrdenesComponent }
];
