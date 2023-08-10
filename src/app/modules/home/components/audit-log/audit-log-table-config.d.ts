import { EntityTableConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { AuditLog, AuditLogMode } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/audit-log.models';
import { AuditLogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/audit-log.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TimePageLink } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { UserId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/user-id';
import { CustomerId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/customer-id';
export declare class AuditLogTableConfig extends EntityTableConfig<AuditLog, TimePageLink> {
    private auditLogService;
    private translate;
    private datePipe;
    private dialog;
    private auditLogMode;
    entityId: EntityId;
    userId: UserId;
    customerId: CustomerId;
    constructor(auditLogService: AuditLogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, auditLogMode?: AuditLogMode, entityId?: EntityId, userId?: UserId, customerId?: CustomerId, updateOnInit?: boolean, pageMode?: boolean);
    fetchAuditLogs(pageLink: TimePageLink): Observable<PageData<AuditLog>>;
    showAuditLogDetails(entity: AuditLog): void;
}
