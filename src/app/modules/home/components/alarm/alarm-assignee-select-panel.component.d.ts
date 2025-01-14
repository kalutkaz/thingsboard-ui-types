import { AfterViewInit, ElementRef, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserEmailInfo } from '@shared/models/user.model';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@core/http/user.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare const ALARM_ASSIGNEE_SELECT_PANEL_DATA: InjectionToken<any>;
export interface AlarmAssigneeSelectPanelData {
    assigneeId?: string;
}
export declare class AlarmAssigneeSelectPanelComponent implements OnInit, AfterViewInit, OnDestroy {
    data: AlarmAssigneeSelectPanelData;
    overlayRef: OverlayRef;
    translate: TranslateService;
    private userService;
    private fb;
    private utilsService;
    private dirty;
    assigneeId?: string;
    assigneeNotSetText: string;
    selectUserFormGroup: FormGroup;
    userInput: ElementRef;
    filteredUsers: Observable<Array<UserEmailInfo>>;
    searchText: string;
    userSelected: boolean;
    result?: UserEmailInfo;
    private destroy$;
    constructor(data: AlarmAssigneeSelectPanelData, overlayRef: OverlayRef, translate: TranslateService, userService: UserService, fb: FormBuilder, utilsService: UtilsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    displayUserFn(user?: User): string | undefined;
    selected(event: MatAutocompleteSelectedEvent): void;
    fetchUsers(searchText?: string): Observable<Array<UserEmailInfo>>;
    onFocus(): void;
    clear(): void;
    getUserDisplayName(entity: UserEmailInfo): string;
    getUserInitials(entity: UserEmailInfo): string;
    getFullName(entity: UserEmailInfo): string;
    getAvatarBgColor(entity: UserEmailInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmAssigneeSelectPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmAssigneeSelectPanelComponent, "tb-alarm-assignee-select-panel", never, {}, {}, never, never, false, never>;
}
