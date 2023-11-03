import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { IDynamicWidgetComponent, WidgetContext } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { HttpErrorResponse } from '@angular/common/http';
import { RafService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/raf.service';
import { NotificationHorizontalPosition, NotificationType, NotificationVerticalPosition } from '../../../../../../../thingsboard/ui-ngx/src/app/core/notification/notification.models';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DynamicWidgetComponent extends PageComponent implements IDynamicWidgetComponent, OnInit, OnDestroy {
    raf: RafService;
    protected store: Store<AppState>;
    fb: UntypedFormBuilder;
    readonly $injector: Injector;
    readonly ctx: WidgetContext;
    readonly errorMessages: string[];
    readonly widgetTitlePanel: TemplateRef<any>;
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse;
    [key: string]: any;
    validators: typeof Validators;
    constructor(raf: RafService, store: Store<AppState>, fb: UntypedFormBuilder, $injector: Injector, ctx: WidgetContext, errorMessages: string[], widgetTitlePanel: TemplateRef<any>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    clearRpcError(): void;
    showSuccessToast(message: string, duration?: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showErrorToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showToast(type: NotificationType, message: string, duration: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicWidgetComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicWidgetComponent, never, never, {}, {}, never, never, false, never>;
}
