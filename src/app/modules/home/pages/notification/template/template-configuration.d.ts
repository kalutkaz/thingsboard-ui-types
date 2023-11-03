import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ActionButtonLinkType, NotificationDeliveryMethod, NotificationTemplate, NotificationType } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models';
import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare abstract class TemplateConfiguration<T, R = any> extends DialogComponent<T, R> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<T, R>;
    protected fb: FormBuilder;
    templateNotificationForm: FormGroup;
    webTemplateForm: FormGroup;
    emailTemplateForm: FormGroup;
    smsTemplateForm: FormGroup;
    slackTemplateForm: FormGroup;
    microsoftTeamsTemplateForm: FormGroup;
    notificationDeliveryMethods: NotificationDeliveryMethod[];
    notificationDeliveryMethodTranslateMap: Map<NotificationDeliveryMethod, string>;
    notificationTemplateTypeTranslateMap: Map<NotificationType, import("../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models").NotificationTemplateTypeTranslate>;
    actionButtonLinkType: typeof ActionButtonLinkType;
    actionButtonLinkTypes: ActionButtonLinkType[];
    actionButtonLinkTypeTranslateMap: Map<ActionButtonLinkType, string>;
    tinyMceOptions: Record<string, any>;
    protected readonly destroy$: Subject<void>;
    protected deliveryMethodFormsMap: Map<NotificationDeliveryMethod, FormGroup>;
    protected constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<T, R>, fb: FormBuilder);
    ngOnDestroy(): void;
    atLeastOne(): (group: FormGroup) => ValidationErrors | null;
    protected getNotificationTemplateValue(): NotificationTemplate;
    private createButtonConfigForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateConfiguration<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TemplateConfiguration<any, any>, never, never, {}, {}, never, never, false, never>;
}
