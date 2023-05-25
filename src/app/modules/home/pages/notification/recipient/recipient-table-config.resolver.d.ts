import { EntityTableConfig } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { NotificationTarget } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models';
import { NotificationService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class RecipientTableConfigResolver implements Resolve<EntityTableConfig<NotificationTarget>> {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationTarget>;
    private configureCellActions;
    private editTarget;
    private onTargetAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipientTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecipientTableConfigResolver>;
}
