import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { CustodiaComponent } from './views/custodia/custodia.component';
import { InversionComponent } from './views/inversion/inversion.component';
import { OrdenesComponent } from './views/ordenes/ordenes.component';
import { ClientesComponent } from './views/configuracion/clientes/clientes.component';
import { TasaComponent } from './views/configuracion/tasa/tasa.component';
import { PortafolioComponent } from './views/configuracion/portafolio/portafolio.component';
import { ParametrosComponent } from './views/configuracion/parametros/parametros.component';
import { BlottersComponent } from './views/configuracion/blotters/blotters.component';
import { AuditoriaComponent } from './views/configuracion/auditoria/auditoria.component';
import { CalendarioComponent } from './views/configuracion/calendario/calendario.component';
import { BeneficiariosComponent } from './views/configuracion/beneficiarios/beneficiarios.component';
import { CamposDinamicosComponent } from './views/configuracion/campos-dinamicos/campos-dinamicos.component';
import { IndicadoresComponent } from './views/configuracion/indicadores/indicadores.component';
import { PaisesComponent } from './views/configuracion/paises/paises.component';
import { OficinasComponent } from './views/configuracion/oficinas/oficinas.component';
import { InstrumentosFinancierosComponent } from './views/configuracion/instrumentos-financieros/instrumentos-financieros.component';
import { FechavalorComponent } from './views/configuracion/fechavalor/fechavalor.component';
import { GeneralesComponent } from './views/configuracion/generales/generales.component';
import { RecompraComponent } from './views/configuracion/recompra/recompra.component';
import { TitulosComponent } from './views/configuracion/titulos/titulos.component';
import { TransaccionesfijasComponent } from './views/configuracion/transaccionesfijas/transaccionesfijas.component';
import { UsuariosespecialesComponent } from './views/configuracion/usuariosespeciales/usuariosespeciales.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ConfiguracionComponent,
    CustodiaComponent,
    InversionComponent,
    OrdenesComponent,
    ClientesComponent,
    TasaComponent,
    PortafolioComponent,
    ParametrosComponent,
    BlottersComponent,
    AuditoriaComponent,
    CalendarioComponent,
    BeneficiariosComponent,
    CamposDinamicosComponent,
    IndicadoresComponent,
    PaisesComponent,
    OficinasComponent,
    InstrumentosFinancierosComponent,
    FechavalorComponent,
    GeneralesComponent,
    RecompraComponent,
    TitulosComponent,
    TransaccionesfijasComponent,
    UsuariosespecialesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
