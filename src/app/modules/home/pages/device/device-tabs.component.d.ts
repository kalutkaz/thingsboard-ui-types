import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { DeviceInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import * as i0 from "@angular/core";
export declare class DeviceTabsComponent extends EntityTabsComponent<DeviceInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTabsComponent, "tb-device-tabs", never, {}, {}, never, never, false, never>;
}
