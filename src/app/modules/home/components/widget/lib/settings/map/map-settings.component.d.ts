import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MapProviders, UnitedMapSettings } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/maps/map-models';
import { IAliasController } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { Widget } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class MapSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    aliasController: IAliasController;
    widget: Widget;
    routeMap: boolean;
    mapProvider: typeof MapProviders;
    private modelValue;
    private propagateChange;
    mapSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: UnitedMapSettings): void;
    validate(c: UntypedFormControl): {
        mapSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    displayEditorSettings(): boolean;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapSettingsComponent, "tb-map-settings", never, { "disabled": "disabled"; "aliasController": "aliasController"; "widget": "widget"; "routeMap": "routeMap"; }, {}, never, never, false, never>;
}
