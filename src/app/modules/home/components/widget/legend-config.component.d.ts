import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LegendConfig, LegendDirection, LegendPosition } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class LegendConfigComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private fb;
    disabled: boolean;
    legendConfigForm: UntypedFormGroup;
    legendDirection: typeof LegendDirection;
    legendDirections: string[];
    legendDirectionTranslations: Map<LegendDirection, string>;
    legendPosition: typeof LegendPosition;
    legendPositions: string[];
    legendPositionTranslations: Map<LegendPosition, string>;
    private legendSettingsFormChanges$;
    private legendSettingsFormDirectionChanges$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    private onDirectionChanged;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(legendConfig: LegendConfig): void;
    private legendConfigUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<LegendConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegendConfigComponent, "tb-legend-config", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
