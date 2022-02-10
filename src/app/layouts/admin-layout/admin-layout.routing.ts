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
import { DocumentosComponent } from 'src/app/views/configuracion/documentos/documentos.component';
import { AuditoriaComponent } from 'src/app/views/configuracion/auditoria/auditoria.component';
import { CalendarioComponent } from 'src/app/views/configuracion/calendario/calendario.component';
import { BeneficiariosComponent } from 'src/app/views/configuracion/beneficiarios/beneficiarios.component';
import { CamposDinamicosComponent } from 'src/app/views/configuracion/campos-dinamicos/campos-dinamicos.component';
import { IndicadoresComponent} from 'src/app/views/configuracion/indicadores/indicadores.component'
import { PaisesComponent } from 'src/app/views/configuracion/paises/paises.component';
import { OficinasComponent } from 'src/app/views/configuracion/oficinas/oficinas.component';
import { InstrumentosFinancierosComponent } from 'src/app/views/configuracion/instrumentos-financieros/instrumentos-financieros.component';
import { OficinaDetallesComponent } from 'src/app/views/configuracion/oficina-detalles/oficina-detalles.component';
import { FechavalorComponent } from 'src/app/views/configuracion/fechavalor/fechavalor.component';
import { GeneralesComponent } from 'src/app/views/configuracion/generales/generales.component';
import { RecompraComponent } from 'src/app/views/configuracion/recompra/recompra.component';
import { TitulosComponent } from 'src/app/views/configuracion/titulos/titulos.component';
import { TransaccionesfijasComponent } from 'src/app/views/configuracion/transaccionesfijas/transaccionesfijas.component';
import { UsuariosespecialesComponent } from 'src/app/views/configuracion/usuariosespeciales/usuariosespeciales.component';
import { OficinasComercialesComponent } from 'src/app/views/configuracion/oficinas-comerciales/oficinas-comerciales.component';
import { TransaccionComponent } from 'src/app/views/custodia/transaccion/transaccion.component';
import { TituloComponent } from 'src/app/views/custodia/titulo/titulo.component';
import { DetalleTituloComponent } from 'src/app/views/custodia/detalle-titulo/detalle-titulo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: 'custodia', component: CustodiaComponent },
    { path: 'inversion', component: InversionComponent },
    { path: 'ordenes', component: OrdenesComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'tasa', component: TasaComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: 'blotters', component: BlottersComponent},
    { path: 'documentos' , component: DocumentosComponent},
    { path: 'auditoria', component: AuditoriaComponent},
    { path: 'calendario', component: CalendarioComponent},
    { path: 'beneficiarios', component: BeneficiariosComponent},
    { path: 'dinamicos', component: CamposDinamicosComponent},
    { path: 'indicadores', component:IndicadoresComponent},
    { path: 'paises', component:PaisesComponent},
    { path: 'oficinas', component:OficinasComponent},
    { path: 'instFinancieros', component:InstrumentosFinancierosComponent},
    { path: 'ofidetalle', component:OficinaDetallesComponent},
    { path: 'fechavalor', component: FechavalorComponent},
    { path: 'generales', component: GeneralesComponent},
    { path: 'recompra', component: RecompraComponent},
    { path: 'titulos', component: TitulosComponent},
    { path: 'transaccionesfijas', component: TransaccionesfijasComponent},
    { path: 'usuariosespeciales', component: UsuariosespecialesComponent},
    { path:'oficinasComerciales', component:OficinasComercialesComponent},
    { path:'transaccion', component:TransaccionComponent},
    { path: 'custodiaTitulo', component:TituloComponent },
    { path: 'custodiaDetalleTitulo', component:DetalleTituloComponent} 
];
