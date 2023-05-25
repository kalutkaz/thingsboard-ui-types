import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DataKeyType } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { WidgetService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/widget.service';
import { IAliasController } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { EntityService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/entity.service';
import * as i0 from "@angular/core";
export declare type RpcRetrieveValueMethod = 'none' | 'rpc' | 'attribute' | 'timeseries';
export interface SwitchRpcSettings {
    initialValue: boolean;
    retrieveValueMethod: RpcRetrieveValueMethod;
    valueKey: string;
    getValueMethod: string;
    setValueMethod: string;
    parseValueFunction: string;
    convertValueFunction: string;
    requestTimeout: number;
    requestPersistent: boolean;
    persistentPollingInterval: number;
}
export declare function switchRpcDefaultSettings(): SwitchRpcSettings;
export declare class SwitchRpcSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private widgetService;
    private entityService;
    private fb;
    keyInput: ElementRef;
    disabled: boolean;
    aliasController: IAliasController;
    targetDeviceAliasId: string;
    dataKeyType: typeof DataKeyType;
    functionScopeVariables: string[];
    private modelValue;
    private propagateChange;
    switchRpcSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, entityService: EntityService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SwitchRpcSettings): void;
    validate(c: UntypedFormControl): {
        switchRpcSettings: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchRpcSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchRpcSettingsComponent, "tb-switch-rpc-settings", never, { "disabled": "disabled"; "aliasController": "aliasController"; "targetDeviceAliasId": "targetDeviceAliasId"; }, {}, never, never, false, never>;
}
