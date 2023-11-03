import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTableHeaderComponent } from '../entity/entity-table-header.component';
import { EdgeEvent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/edge.models';
import { EdgeDownlinkTableConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/edge/edge-downlink-table-config';
import * as i0 from "@angular/core";
export declare class EdgeDownlinkTableHeaderComponent extends EntityTableHeaderComponent<EdgeEvent> {
    protected store: Store<AppState>;
    get eventTableConfig(): EdgeDownlinkTableConfig;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeDownlinkTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeDownlinkTableHeaderComponent, "tb-edge-downlink-table-header", never, {}, {}, never, never, false, never>;
}
