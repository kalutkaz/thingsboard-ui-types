import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Dashboard } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ApiUsageComponent extends PageComponent {
    protected store: Store<AppState>;
    private route;
    apiUsageDashboard: Dashboard;
    constructor(store: Store<AppState>, route: ActivatedRoute);
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiUsageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApiUsageComponent, "tb-api-usage", never, {}, {}, never, never, false, never>;
}
