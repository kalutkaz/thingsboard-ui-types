import { Resolve, Router } from '@angular/router';
import { TenantInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/tenant.model';
import { EntityTableConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { TenantService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/tenant.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entity-component.models';
import * as i0 from "@angular/core";
export declare class TenantsTableConfigResolver implements Resolve<EntityTableConfig<TenantInfo>> {
    private tenantService;
    private translate;
    private datePipe;
    private router;
    private readonly config;
    constructor(tenantService: TenantService, translate: TranslateService, datePipe: DatePipe, router: Router);
    resolve(): EntityTableConfig<TenantInfo>;
    private openTenant;
    manageTenantAdmins($event: Event, tenant: TenantInfo): void;
    onTenantAction(action: EntityAction<TenantInfo>, config: EntityTableConfig<TenantInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantsTableConfigResolver>;
}
