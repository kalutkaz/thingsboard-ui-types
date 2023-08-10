import { CustomerId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/customer-id';
import { ContactBased } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/contact-based.model';
import { TenantId } from './id/tenant-id';
import { ExportableEntity } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
export interface Customer extends ContactBased<CustomerId>, ExportableEntity<CustomerId> {
    tenantId: TenantId;
    title: string;
    additionalInfo?: any;
}
export interface ShortCustomerInfo {
    customerId: CustomerId;
    title: string;
    public: boolean;
}
