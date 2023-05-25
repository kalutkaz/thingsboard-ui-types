import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Dashboard } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class DashboardTabsComponent extends EntityTabsComponent<Dashboard> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardTabsComponent, "tb-dashboard-tabs", never, {}, {}, never, never, false, never>;
}
