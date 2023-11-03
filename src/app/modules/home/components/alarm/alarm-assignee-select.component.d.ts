import { OnInit, ViewContainerRef } from '@angular/core';
import { UtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { Overlay } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UserId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/user-id';
import { UserService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user.service';
import { User, UserEmailInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user.model';
import { AlarmAssigneeOption } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/alarm.models';
import * as i0 from "@angular/core";
export declare class AlarmAssigneeSelectComponent implements OnInit, ControlValueAccessor {
    private utilsService;
    private overlay;
    private fb;
    private userService;
    private viewContainerRef;
    private translateService;
    disabled: boolean;
    inline: boolean;
    userMode: boolean;
    assigneeFormGroup: UntypedFormGroup;
    assignee?: User | UserEmailInfo;
    assigneeOption?: AlarmAssigneeOption;
    private propagateChange;
    constructor(utilsService: UtilsService, overlay: Overlay, fb: UntypedFormBuilder, userService: UserService, viewContainerRef: ViewContainerRef, translateService: TranslateService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value?: UserId | AlarmAssigneeOption): void;
    private getAssignee;
    private getAssigneeOption;
    private getUserDisplayName;
    getUserInitials(): string;
    getAvatarBgColor(): string;
    openAlarmAssigneeSelectPanel($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmAssigneeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmAssigneeSelectComponent, "tb-alarm-assignee-select", never, { "disabled": "disabled"; "inline": "inline"; "userMode": "userMode"; }, {}, never, never, false, never>;
}
