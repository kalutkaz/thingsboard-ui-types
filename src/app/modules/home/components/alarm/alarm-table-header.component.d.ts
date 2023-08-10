import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTableHeaderComponent } from '../entity/entity-table-header.component';
import { AlarmInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/alarm.models';
import { AlarmTableConfig } from './alarm-table-config';
import { AlarmFilterConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class AlarmTableHeaderComponent extends EntityTableHeaderComponent<AlarmInfo> {
    protected store: Store<AppState>;
    get alarmTableConfig(): AlarmTableConfig;
    constructor(store: Store<AppState>);
    alarmFilterChanged(alarmFilterConfig: AlarmFilterConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableHeaderComponent, "tb-alarm-table-header", never, {}, {}, never, never, false, never>;
}
