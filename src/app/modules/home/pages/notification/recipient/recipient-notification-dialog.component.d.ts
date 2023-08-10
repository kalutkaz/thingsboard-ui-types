import { NotificationTarget, NotificationTargetConfigType, NotificationTargetType, SlackChanelType } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/http/notification.service';
import { EntityType } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export interface RecipientNotificationDialogData {
    target?: NotificationTarget;
    isAdd?: boolean;
}
export declare class RecipientNotificationDialogComponent extends DialogComponent<RecipientNotificationDialogComponent, NotificationTarget> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RecipientNotificationDialogComponent, NotificationTarget>;
    data: RecipientNotificationDialogData;
    private fb;
    private notificationService;
    private authState;
    private authUser;
    targetNotificationForm: FormGroup;
    notificationTargetType: typeof NotificationTargetType;
    notificationTargetTypes: NotificationTargetType[];
    notificationTargetTypeTranslationMap: Map<NotificationTargetType, string>;
    notificationTargetConfigType: typeof NotificationTargetConfigType;
    notificationTargetConfigTypes: NotificationTargetConfigType[];
    notificationTargetConfigTypeInfoMap: Map<NotificationTargetConfigType, import("../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models").NotificationTargetConfigTypeInfo>;
    slackChanelTypes: SlackChanelType[];
    slackChanelTypesTranslateMap: Map<SlackChanelType, string>;
    entityType: typeof EntityType;
    isAdd: boolean;
    private readonly destroy$;
    private userFilterFormControls;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RecipientNotificationDialogComponent, NotificationTarget>, data: RecipientNotificationDialogData, fb: FormBuilder, notificationService: NotificationService);
    ngOnDestroy(): void;
    cancel(): void;
    save(): void;
    isSysAdmin(): boolean;
    private allowNotificationTargetConfigTypes;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipientNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipientNotificationDialogComponent, "tb-target-notification-dialog", never, {}, {}, never, never, false, never>;
}
