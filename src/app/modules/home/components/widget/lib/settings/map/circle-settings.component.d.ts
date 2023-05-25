import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { CircleSettings, ShowTooltipAction } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/maps/map-models';
import { WidgetService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/widget.service';
import { Widget } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class CircleSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private fb;
    disabled: boolean;
    widget: Widget;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    circleSettingsFormGroup: UntypedFormGroup;
    showTooltipActions: ShowTooltipAction[];
    showTooltipActionTranslations: Map<ShowTooltipAction, string>;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CircleSettings): void;
    validate(c: UntypedFormControl): {
        circleSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircleSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircleSettingsComponent, "tb-circle-settings", never, { "disabled": "disabled"; "widget": "widget"; }, {}, never, never, false, never>;
}
