import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { UserComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/pages/user/user.component';
import { Authority } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/authority.enum';
import { ActivationMethod, User } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user.model';
import { UserService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user.service';
import { Observable } from 'rxjs';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface AddUserDialogData {
    tenantId: string;
    customerId: string;
    authority: Authority;
}
export declare class AddUserDialogComponent extends DialogComponent<AddUserDialogComponent, User> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddUserDialogData;
    dialogRef: MatDialogRef<AddUserDialogComponent, User>;
    private userService;
    private dialog;
    detailsForm: UntypedFormGroup;
    user: User;
    activationMethods: string[];
    activationMethodEnum: typeof ActivationMethod;
    activationMethodTranslations: Map<ActivationMethod, string>;
    activationMethod: ActivationMethod;
    userComponent: UserComponent;
    constructor(store: Store<AppState>, router: Router, data: AddUserDialogData, dialogRef: MatDialogRef<AddUserDialogComponent, User>, userService: UserService, dialog: MatDialog);
    ngOnInit(): void;
    cancel(): void;
    add(): void;
    displayActivationLink(activationLink: string): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddUserDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddUserDialogComponent, "tb-add-user-dialog", never, {}, {}, never, never, false, never>;
}
