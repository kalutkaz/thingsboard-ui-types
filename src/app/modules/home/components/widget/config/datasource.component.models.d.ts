import { EntityAliasSelectCallbacks } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/entity-alias-select.component.models';
import { FilterSelectCallbacks } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-select.component.models';
import { DataKeysCallbacks } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/data-keys.component.models';
export type DatasourceCallbacks = EntityAliasSelectCallbacks & FilterSelectCallbacks & DataKeysCallbacks;
