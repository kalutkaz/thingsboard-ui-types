import { BaseData, ExportableEntity } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
import { AssetId } from './id/asset-id';
import { TenantId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/tenant-id';
import { CustomerId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/customer-id';
import { EntitySearchQuery } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/relation.models';
import { AssetProfileId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/asset-profile-id';
import { RuleChainId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/rule-chain-id';
import { DashboardId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/dashboard-id';
import { EntityInfoData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/entity.models';
export declare const TB_SERVICE_QUEUE = "TbServiceQueue";
export interface AssetProfile extends BaseData<AssetProfileId>, ExportableEntity<AssetProfileId> {
    tenantId?: TenantId;
    name: string;
    description?: string;
    default?: boolean;
    image?: string;
    defaultRuleChainId?: RuleChainId;
    defaultDashboardId?: DashboardId;
    defaultQueueName?: string;
    defaultEdgeRuleChainId?: RuleChainId;
}
export interface AssetProfileInfo extends EntityInfoData {
    tenantId?: TenantId;
    image?: string;
    defaultDashboardId?: DashboardId;
}
export interface Asset extends BaseData<AssetId>, ExportableEntity<AssetId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    label: string;
    assetProfileId?: AssetProfileId;
    additionalInfo?: any;
}
export interface AssetInfo extends Asset {
    customerTitle: string;
    customerIsPublic: boolean;
    assetProfileName: string;
}
export interface AssetSearchQuery extends EntitySearchQuery {
    assetTypes: Array<string>;
}
