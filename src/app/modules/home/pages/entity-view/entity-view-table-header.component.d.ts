import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { EntityViewInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-view.models';
import * as i0 from "@angular/core";
export declare class EntityViewTableHeaderComponent extends EntityTableHeaderComponent<EntityViewInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    entityViewTypeChanged(entityViewType: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityViewTableHeaderComponent, "tb-entity-view-table-header", never, {}, {}, never, never, false, never>;
}
