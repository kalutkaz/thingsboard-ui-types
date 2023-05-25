import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import * as CanvasGauges from 'canvas-gauges';
import { AnalogueCompassSettings } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-compass.models';
import { TbBaseGauge } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-gauge.models';
import RadialGaugeOptions = CanvasGauges.RadialGaugeOptions;
import BaseGauge = CanvasGauges.BaseGauge;
export declare class TbAnalogueCompass extends TbBaseGauge<AnalogueCompassSettings, RadialGaugeOptions> {
    constructor(ctx: WidgetContext, canvasId: string);
    protected createGaugeOptions(gaugeElement: HTMLElement, settings: AnalogueCompassSettings): RadialGaugeOptions;
    protected createGauge(gaugeData: RadialGaugeOptions): BaseGauge;
}
