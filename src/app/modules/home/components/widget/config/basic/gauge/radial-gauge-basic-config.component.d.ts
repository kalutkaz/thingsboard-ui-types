import { UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { GaugeBasicConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/basic/gauge/analog-gauge-basic-config.component';
import { WidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class RadialGaugeBasicConfigComponent extends GaugeBasicConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    protected fb: UntypedFormBuilder;
    gaugeType: string;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadialGaugeBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadialGaugeBasicConfigComponent, "tb-radial-gauge-basic-config", never, {}, {}, never, never, false, never>;
}
