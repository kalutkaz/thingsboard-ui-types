import { BaseData, HasId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
import { EntityTableConfig } from './entities-table-config.models';
export interface AddEntityDialogData<T extends BaseData<HasId>> {
    entitiesTableConfig: EntityTableConfig<T>;
}
export interface EntityAction<T extends BaseData<HasId>> {
    event: Event;
    action: string;
    entity: T;
}
