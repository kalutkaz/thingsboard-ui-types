import { ChangeDetectorRef, Injector } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { BasicWidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { DataKey } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import { ValueCardLayout } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-card-widget.models';
import * as i0 from "@angular/core";
export declare class ValueCardBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private cd;
    private $injector;
    private fb;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    valueCardLayouts: ValueCardLayout[];
    valueCardLayoutTranslationMap: Map<ValueCardLayout, string>;
    valueCardLayoutImageMap: Map<ValueCardLayout, string>;
    horizontal: boolean;
    valueCardWidgetConfigForm: UntypedFormGroup;
    valuePreviewFn: any;
    datePreviewFn: any;
    get dateEnabled(): boolean;
    get iconEnabled(): boolean;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, cd: ChangeDetectorRef, $injector: Injector, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    private _datePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueCardBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueCardBasicConfigComponent, "tb-value-card-basic-config", never, {}, {}, never, never, false, never>;
}
