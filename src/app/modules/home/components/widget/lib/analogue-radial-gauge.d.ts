import * as CanvasGauges from 'canvas-gauges';
import { AnalogueRadialGaugeSettings } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-radial-gauge.models';
import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { TbAnalogueGauge } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-gauge.models';
import RadialGaugeOptions = CanvasGauges.RadialGaugeOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare class TbAnalogueRadialGauge extends TbAnalogueGauge<AnalogueRadialGaugeSettings, RadialGaugeOptions> {
    constructor(ctx: WidgetContext, canvasId: string);
    protected prepareGaugeOptions(settings: AnalogueRadialGaugeSettings, gaugeData: RadialGaugeOptions): void;
    protected createGauge(gaugeData: RadialGaugeOptions): BaseGauge;
}
