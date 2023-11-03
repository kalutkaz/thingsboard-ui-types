import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { TimewindowStyle } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget-settings.models';
import { TbPopoverComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Timewindow } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class TimewindowStylePanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    timewindowStyle: TimewindowStyle;
    previewValue: Timewindow;
    popover: TbPopoverComponent<TimewindowStylePanelComponent>;
    timewindowStyleApplied: EventEmitter<TimewindowStyle>;
    timewindowStyleFormGroup: UntypedFormGroup;
    previewTimewindowStyle: TimewindowStyle;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyTimewindowStyle(): void;
    private updateTimewindowStyleEnabledState;
    private updatePreviewStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowStylePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowStylePanelComponent, "tb-timewindow-style-panel", never, { "timewindowStyle": "timewindowStyle"; "previewValue": "previewValue"; "popover": "popover"; }, { "timewindowStyleApplied": "timewindowStyleApplied"; }, never, never, false, never>;
}
