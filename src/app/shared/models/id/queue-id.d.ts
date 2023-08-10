import { EntityId } from './entity-id';
import { EntityType } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
export declare class QueueId implements EntityId {
    entityType: EntityType;
    id: string;
    constructor(id: string);
}
