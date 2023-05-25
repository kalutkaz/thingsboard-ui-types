import { DataKeyType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { DataKey, JsonSettingsSchema } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { Observable } from 'rxjs';
export interface DataKeysCallbacks {
    generateDataKey: (chip: any, type: DataKeyType, datakeySettingsSchema: JsonSettingsSchema) => DataKey;
    fetchEntityKeys: (entityAliasId: string, types: Array<DataKeyType>) => Observable<Array<DataKey>>;
}
