import { EntityTableHeaderComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entity-table-header.component';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EdgeInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/edge.models';
import * as i0 from "@angular/core";
export declare class EdgeTableHeaderComponent extends EntityTableHeaderComponent<EdgeInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    edgeTypeChanged(edgeType: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeTableHeaderComponent, "tb-edge-table-header", never, {}, {}, never, never, false, never>;
}
