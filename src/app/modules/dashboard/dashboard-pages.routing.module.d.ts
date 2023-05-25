import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Dashboard } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { DashboardService } from '../../../../../thingsboard/ui-ngx/src/app/core/http/dashboard.service';
import { DashboardUtilsService } from '../../../../../thingsboard/ui-ngx/src/app/core/services/dashboard-utils.service';
import { UtilsService } from '../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class WidgetEditorDashboardResolver implements Resolve<Dashboard> {
    private dashboardService;
    private dashboardUtils;
    private utils;
    constructor(dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, utils: UtilsService);
    resolve(route: ActivatedRouteSnapshot): Dashboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetEditorDashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetEditorDashboardResolver>;
}
export declare class DashboardPagesRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardPagesRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DashboardPagesRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DashboardPagesRoutingModule>;
}
