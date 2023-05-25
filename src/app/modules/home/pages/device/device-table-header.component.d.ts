import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { DeviceInfo, DeviceInfoFilter } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class DeviceTableHeaderComponent extends EntityTableHeaderComponent<DeviceInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    deviceInfoFilterChanged(deviceInfoFilter: DeviceInfoFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTableHeaderComponent, "tb-device-table-header", never, {}, {}, never, never, false, never>;
}
