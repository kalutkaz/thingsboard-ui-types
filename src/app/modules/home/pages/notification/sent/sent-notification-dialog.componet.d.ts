import { NotificationDeliveryMethod, NotificationRequest, NotificationRequestPreview, NotificationType } from '@shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '@core/http/notification.service';
import { Observable } from 'rxjs';
import { EntityType } from '@shared/models/entity-type.models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatStepper } from '@angular/material/stepper';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatButton } from '@angular/material/button';
import { TemplateConfiguration } from '@home/pages/notification/template/template-configuration';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface RequestNotificationDialogData {
    request?: NotificationRequest;
    isAdd?: boolean;
}
export declare class SentNotificationDialogComponent extends TemplateConfiguration<SentNotificationDialogComponent, NotificationRequest> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<SentNotificationDialogComponent, NotificationRequest>;
    data: RequestNotificationDialogData;
    private breakpointObserver;
    protected fb: FormBuilder;
    private notificationService;
    private dialog;
    private translate;
    createNotification: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    stepperLabelPosition: Observable<'bottom' | 'end'>;
    isAdd: boolean;
    entityType: typeof EntityType;
    notificationType: typeof NotificationType;
    notificationRequestForm: FormGroup;
    selectedIndex: number;
    preview: NotificationRequestPreview;
    dialogTitle: string;
    showRefresh: boolean;
    private authUser;
    private allowNotificationDeliveryMethods;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SentNotificationDialogComponent, NotificationRequest>, data: RequestNotificationDialogData, breakpointObserver: BreakpointObserver, fb: FormBuilder, notificationService: NotificationService, dialog: MatDialog, translate: TranslateService);
    ngOnDestroy(): void;
    cancel(): void;
    nextStepLabel(): string;
    changeStep($event: StepperSelectionEvent): void;
    backStep(): void;
    nextStep(): void;
    private get maxStepperIndex();
    private add;
    private getPreview;
    private get notificationFormValue();
    private allValid;
    private isSysAdmin;
    private isTenantAdmin;
    minDate(): Date;
    maxDate(): Date;
    createTarget($event: Event, button: MatButton): void;
    getDeliveryMethodsTemplatesControl(deliveryMethod: NotificationDeliveryMethod): AbstractControl;
    getDeliveryMethodsTooltip(deliveryMethod: NotificationDeliveryMethod): string;
    allowConfigureDeliveryMethod(deliveryMethod: NotificationDeliveryMethod): boolean;
    isInteractDeliveryMethod(deliveryMethod: NotificationDeliveryMethod): boolean;
    configurationPage(deliveryMethod: NotificationDeliveryMethod): "/settings/outgoing-mail" | "/settings/notifications";
    refreshAllowDeliveryMethod(): void;
    private updateDeliveryMethodsDisableState;
    static ɵfac: i0.ɵɵFactoryDeclaration<SentNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SentNotificationDialogComponent, "tb-sent-notification-dialog", never, {}, {}, never, never, false, never>;
}
