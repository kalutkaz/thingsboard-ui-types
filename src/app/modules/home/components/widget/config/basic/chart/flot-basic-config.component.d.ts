import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { BasicWidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { Datasource } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class FlotBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get datasource(): Datasource;
    flotWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getSeries;
    private setSeries;
    private getCardButtons;
    private setCardButtons;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotBasicConfigComponent, "tb-flot-basic-config", never, {}, {}, never, never, false, never>;
}
