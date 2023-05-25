import { ComplexFilterPredicateInfo, EntityKeyValueType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
export interface ComplexFilterPredicateDialogData {
    complexPredicate: ComplexFilterPredicateInfo;
    key: string;
    readonly: boolean;
    isAdd: boolean;
    valueType: EntityKeyValueType;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
}
