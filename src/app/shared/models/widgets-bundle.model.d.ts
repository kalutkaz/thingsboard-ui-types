import { BaseData, ExportableEntity } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
import { TenantId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/tenant-id';
import { WidgetsBundleId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/widgets-bundle-id';
export interface WidgetsBundle extends BaseData<WidgetsBundleId>, ExportableEntity<WidgetsBundleId> {
    tenantId: TenantId;
    alias: string;
    title: string;
    image: string;
    description: string;
}
