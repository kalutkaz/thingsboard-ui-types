import * as CanvasGauges from 'canvas-gauges';
import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { TbAnalogueGauge } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-gauge.models';
import { AnalogueLinearGaugeSettings } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-linear-gauge.models';
import LinearGaugeOptions = CanvasGauges.LinearGaugeOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare class TbAnalogueLinearGauge extends TbAnalogueGauge<AnalogueLinearGaugeSettings, LinearGaugeOptions> {
    constructor(ctx: WidgetContext, canvasId: string);
    protected prepareGaugeOptions(settings: AnalogueLinearGaugeSettings, gaugeData: LinearGaugeOptions): void;
    protected createGauge(gaugeData: LinearGaugeOptions): BaseGauge;
}
