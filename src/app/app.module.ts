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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
