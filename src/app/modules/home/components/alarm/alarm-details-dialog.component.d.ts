import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { AlarmInfo, AlarmStatus } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/alarm.models';
import { AlarmService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/alarm.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AlarmCommentComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alarm/alarm-comment.component';
import { MillisecondsToTimeStringPipe } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/pipe/milliseconds-to-time-string.pipe';
import { UtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import * as i0 from "@angular/core";
export interface AlarmDetailsDialogData {
    alarmId?: string;
    alarm?: AlarmInfo;
    allowAcknowledgment: boolean;
    allowClear: boolean;
    displayDetails: boolean;
    allowAssign: boolean;
}
export declare class AlarmDetailsDialogComponent extends DialogComponent<AlarmDetailsDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private datePipe;
    private millisecondsToTimeStringPipe;
    private translate;
    data: AlarmDetailsDialogData;
    private alarmService;
    private utils;
    dialogRef: MatDialogRef<AlarmDetailsDialogComponent, boolean>;
    fb: UntypedFormBuilder;
    alarmId: string;
    alarmFormGroup: UntypedFormGroup;
    allowAcknowledgment: boolean;
    allowClear: boolean;
    displayDetails: boolean;
    allowAssign: boolean;
    loadAlarmSubject: ReplaySubject<AlarmInfo>;
    alarm$: Observable<AlarmInfo>;
    alarmSeverityColorsMap: Map<import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/alarm.models").AlarmSeverity, string>;
    alarmStatuses: typeof AlarmStatus;
    alarmUpdated: boolean;
    alarmCommentComponent: AlarmCommentComponent;
    constructor(store: Store<AppState>, router: Router, datePipe: DatePipe, millisecondsToTimeStringPipe: MillisecondsToTimeStringPipe, translate: TranslateService, data: AlarmDetailsDialogData, alarmService: AlarmService, utils: UtilsService, dialogRef: MatDialogRef<AlarmDetailsDialogComponent, boolean>, fb: UntypedFormBuilder);
    loadAlarm(): void;
    loadAlarmFields(alarm: AlarmInfo): void;
    ngOnInit(): void;
    close(): void;
    acknowledge(): void;
    clear(): void;
    onReassign(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmDetailsDialogComponent, "tb-alarm-details-dialog", never, {}, {}, never, never, false, never>;
}
