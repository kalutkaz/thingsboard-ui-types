import { MatDialogRef } from '@angular/material/dialog';
import { ComponentFactory, OnDestroy, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Router } from '@angular/router';
import { CustomDialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/dialog/custom-dialog.component';
import * as i0 from "@angular/core";
export interface CustomDialogContainerData {
    controller: (instance: CustomDialogComponent) => void;
    data?: any;
    customComponentFactory: ComponentFactory<CustomDialogComponent>;
}
export declare class CustomDialogContainerComponent extends DialogComponent<CustomDialogContainerComponent> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    viewContainerRef: ViewContainerRef;
    dialogRef: MatDialogRef<CustomDialogContainerComponent>;
    data: CustomDialogContainerData;
    height: string;
    private readonly customComponentRef;
    constructor(store: Store<AppState>, router: Router, viewContainerRef: ViewContainerRef, dialogRef: MatDialogRef<CustomDialogContainerComponent>, data: CustomDialogContainerData);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDialogContainerComponent, "tb-custom-dialog-container-component", never, {}, {}, never, never, false, never>;
}
