import { AnalogueGaugeSettings } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/analogue-gauge.models';
export interface AnalogueRadialGaugeSettings extends AnalogueGaugeSettings {
    startAngle: number;
    ticksAngle: number;
    needleCircleSize: number;
}
