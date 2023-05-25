import { BaseData, ExportableEntity } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
import { TenantId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/tenant-id';
import { CustomerId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/customer-id';
import { EntityViewId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-view-id';
import { EntityId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { EntitySearchQuery } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/relation.models';
export interface AttributesEntityView {
    cs: Array<string>;
    ss: Array<string>;
    sh: Array<string>;
}
export interface TelemetryEntityView {
    timeseries: Array<string>;
    attributes: AttributesEntityView;
}
export interface EntityView extends BaseData<EntityViewId>, ExportableEntity<EntityViewId> {
    tenantId: TenantId;
    customerId: CustomerId;
    entityId: EntityId;
    name: string;
    type: string;
    keys: TelemetryEntityView;
    startTimeMs: number;
    endTimeMs: number;
    additionalInfo?: any;
}
export interface EntityViewInfo extends EntityView {
    customerTitle: string;
    customerIsPublic: boolean;
}
export interface EntityViewSearchQuery extends EntitySearchQuery {
    entityViewTypes: Array<string>;
}
