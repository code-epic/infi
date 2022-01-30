import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ConfiguracionComponent } from 'src/app/views/configuracion/configuracion.component';
import { CustodiaComponent } from 'src/app/views/custodia/custodia.component';
import { InversionComponent } from 'src/app/views/inversion/inversion.component';
import { OrdenesComponent } from 'src/app/views/ordenes/ordenes.component';
import { ClientesComponent } from 'src/app/views/configuracion/clientes/clientes.component';
import { TasaComponent } from 'src/app/views/configuracion/tasa/tasa.component';
import { PortafolioComponent } from 'src/app/views/configuracion/portafolio/portafolio.component';
import { ParametrosComponent } from 'src/app/views/configuracion/parametros/parametros.component';
import { BlottersComponent } from 'src/app/views/configuracion/blotters/blotters.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'configuracion',   component: ConfiguracionComponent },
    { path: 'custodia',         component: CustodiaComponent },
    { path: 'inversion',          component: InversionComponent },
    { path: 'ordenes',          component: OrdenesComponent },
    { path: 'clientes',          component: ClientesComponent },
    { path: 'tasa',          component: TasaComponent },
    { path: 'portafolio',          component: PortafolioComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: 'blotters', component: BlottersComponent}
];
