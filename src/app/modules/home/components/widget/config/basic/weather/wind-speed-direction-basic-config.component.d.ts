import { Injector } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { BasicWidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { DataKey, Datasource } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import { WindSpeedDirectionLayout } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/weather/wind-speed-direction-widget.models';
import * as i0 from "@angular/core";
export declare class WindSpeedDirectionBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private $injector;
    private fb;
    get datasource(): Datasource;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    windSpeedDirectionLayouts: WindSpeedDirectionLayout[];
    windSpeedDirectionLayoutTranslationMap: Map<WindSpeedDirectionLayout, string>;
    windSpeedDirectionLayoutImageMap: Map<WindSpeedDirectionLayout, string>;
    windSpeedDirectionWidgetConfigForm: UntypedFormGroup;
    centerValuePreviewFn: any;
    get majorTicksFontEnabled(): boolean;
    get minorTicksFontEnabled(): boolean;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, $injector: Injector, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    private _centerValuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<WindSpeedDirectionBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WindSpeedDirectionBasicConfigComponent, "tb-wind-speed-direction-basic-config", never, {}, {}, never, never, false, never>;
}
