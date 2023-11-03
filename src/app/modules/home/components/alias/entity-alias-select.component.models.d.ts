import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { EntityAlias } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/alias.models';
export interface EntityAliasSelectCallbacks {
    createEntityAlias: (alias: string, allowedEntityTypes: Array<EntityType>) => Observable<EntityAlias>;
}
