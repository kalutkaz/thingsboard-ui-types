import { AliasEntityType, EntityType } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { HasUUID } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/has-uuid';
export interface EntityId extends HasUUID {
    entityType: EntityType | AliasEntityType;
}
export declare function entityIdEquals(entityId1: EntityId, entityId2: EntityId): boolean;
