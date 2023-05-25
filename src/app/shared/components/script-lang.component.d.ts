import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { ScriptLanguage } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class TbScriptLangComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    private fb;
    scriptLangFormGroup: UntypedFormGroup;
    scriptLanguage: typeof ScriptLanguage;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(scriptLang: ScriptLanguage): void;
    updateView(scriptLang: ScriptLanguage): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbScriptLangComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbScriptLangComponent, "tb-script-lang", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
