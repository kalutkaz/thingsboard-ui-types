import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeDashboard } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { DashboardService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class HomeDashboardResolver implements Resolve<HomeDashboard> {
    private dashboardService;
    private store;
    constructor(dashboardService: DashboardService, store: Store<AppState>);
    resolve(): Observable<HomeDashboard>;
    private updateDeviceActivityKeyFilterIfNeeded;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeDashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HomeDashboardResolver>;
}
export declare class HomeLinksRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeLinksRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HomeLinksRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HomeLinksRoutingModule>;
}
