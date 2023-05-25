import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { DynamicComponentFactoryService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/services/dynamic-component-factory.service';
import { CustomDialogComponent } from './custom-dialog.component';
import * as i0 from "@angular/core";
export declare class CustomDialogService {
    private translate;
    private authService;
    private dynamicComponentFactoryService;
    private sharedModule;
    private sharedHomeComponentsModule;
    private homeComponentsModule;
    dialog: MatDialog;
    private customModules;
    constructor(translate: TranslateService, authService: AuthService, dynamicComponentFactoryService: DynamicComponentFactoryService, sharedModule: Type<any>, sharedHomeComponentsModule: Type<any>, homeComponentsModule: Type<any>, dialog: MatDialog);
    setAdditionalModules(modules: Array<Type<any>>): void;
    customDialog(template: string, controller: (instance: CustomDialogComponent) => void, data?: any, config?: MatDialogConfig): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomDialogService>;
}
