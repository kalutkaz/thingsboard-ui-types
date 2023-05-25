import { JsonSettingsSchema } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
export interface JsonFormComponentData extends JsonSettingsSchema {
    model?: any;
    settingsDirective?: string;
}
