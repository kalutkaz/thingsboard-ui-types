import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { DeviceProfile, DeviceTransportType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileTabsComponent extends EntityTabsComponent<DeviceProfile> {
    protected store: Store<AppState>;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models").TransportType, string>;
    deviceTransportTypeHints: Map<import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models").TransportType, string>;
    isTransportTypeChanged: boolean;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileTabsComponent, "tb-device-profile-tabs", never, {}, {}, never, never, false, never>;
}
