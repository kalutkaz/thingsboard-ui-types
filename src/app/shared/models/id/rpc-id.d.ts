import { EntityId } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { EntityType } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
export declare class RpcId implements EntityId {
    entityType: EntityType;
    id: string;
    constructor(id: string);
}
