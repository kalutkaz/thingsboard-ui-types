import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimePageLink } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { PageData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { AuditLog } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/audit-log.models';
import { EntityId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class AuditLogService {
    private http;
    constructor(http: HttpClient);
    getAuditLogs(pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<AuditLog>>;
    getAuditLogsByCustomerId(customerId: string, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<AuditLog>>;
    getAuditLogsByUserId(userId: string, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<AuditLog>>;
    getAuditLogsByEntityId(entityId: EntityId, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<AuditLog>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuditLogService>;
}
