import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { DateFormatSettings } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget-settings.models';
import { TbPopoverComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import { UntypedFormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class DateFormatSettingsPanelComponent extends PageComponent implements OnInit {
    private date;
    protected store: Store<AppState>;
    dateFormat: DateFormatSettings;
    popover: TbPopoverComponent<DateFormatSettingsPanelComponent>;
    dateFormatApplied: EventEmitter<DateFormatSettings>;
    dateFormatFormControl: UntypedFormControl;
    previewText: string;
    constructor(date: DatePipe, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyDateFormat(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFormatSettingsPanelComponent, "tb-date-format-settings-panel", never, { "dateFormat": "dateFormat"; "popover": "popover"; }, { "dateFormatApplied": "dateFormatApplied"; }, never, never, false, never>;
}
