import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { AssetInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/asset.models';
import { AssetProfileId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/asset-profile-id';
import * as i0 from "@angular/core";
export declare class AssetTableHeaderComponent extends EntityTableHeaderComponent<AssetInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    assetProfileChanged(assetProfileId: AssetProfileId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetTableHeaderComponent, "tb-asset-table-header", never, {}, {}, never, never, false, never>;
}
