import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DashboardPageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-page.component';
import { BreadCrumbLabelFunction } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/breadcrumb';
import { Observable } from 'rxjs';
import { Dashboard } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { DashboardService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/dashboard.service';
import { DashboardUtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dashboard-utils.service';
import { UserSettingsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user-settings.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class DashboardResolver implements Resolve<Dashboard> {
    private store;
    private dashboardService;
    private userSettingService;
    private dashboardUtils;
    constructor(store: Store<AppState>, dashboardService: DashboardService, userSettingService: UserSettingsService, dashboardUtils: DashboardUtilsService);
    resolve(route: ActivatedRouteSnapshot): Observable<Dashboard>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardResolver>;
}
export declare const dashboardBreadcumbLabelFunction: BreadCrumbLabelFunction<DashboardPageComponent>;
export declare class DashboardRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DashboardRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DashboardRoutingModule>;
}
