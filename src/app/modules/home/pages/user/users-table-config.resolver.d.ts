import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { User } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user.model';
import { UserService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user.service';
import { CustomerService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/customer.service';
import { Observable } from 'rxjs';
import { Authority } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/authority.enum';
import { MatDialog } from '@angular/material/dialog';
import { EntityAction } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entity-component.models';
import { AuthState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { AuthService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { TenantService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/tenant.service';
import * as i0 from "@angular/core";
export interface UsersTableRouteData {
    authority: Authority;
}
export declare class UsersTableConfigResolver implements Resolve<EntityTableConfig<User>> {
    private store;
    private userService;
    private authService;
    private tenantService;
    private customerService;
    private translate;
    private datePipe;
    private router;
    private dialog;
    private readonly config;
    private tenantId;
    private customerId;
    private authority;
    private authUser;
    constructor(store: Store<AppState>, userService: UserService, authService: AuthService, tenantService: TenantService, customerService: CustomerService, translate: TranslateService, datePipe: DatePipe, router: Router, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<User>>;
    updateActionCellDescriptors(auth: AuthState): void;
    saveUser(user: User): Observable<User>;
    addUser(): Observable<User>;
    private openUser;
    loginAsUser($event: Event, user: User): void;
    displayActivationLink($event: Event, user: User): void;
    resendActivation($event: Event, user: User): void;
    setUserCredentialsEnabled($event: Event, user: User, userCredentialsEnabled: boolean): void;
    onUserAction(action: EntityAction<User>, config: EntityTableConfig<User>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersTableConfigResolver>;
}
