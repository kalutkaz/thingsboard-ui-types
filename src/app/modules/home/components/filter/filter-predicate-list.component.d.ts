import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ComplexOperation, EntityKeyValueType, KeyFilterPredicateInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare class FilterPredicateListComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    private complexFilterPredicateDialogComponent;
    private dialog;
    disabled: boolean;
    valueType: EntityKeyValueType;
    key: string;
    operation: ComplexOperation;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    filterListFormGroup: UntypedFormGroup;
    valueTypeEnum: typeof EntityKeyValueType;
    complexOperationTranslations: Map<ComplexOperation, string>;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, complexFilterPredicateDialogComponent: ComponentType<any>, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get predicatesFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(control: AbstractControl): ValidationErrors | null;
    writeValue(predicates: Array<KeyFilterPredicateInfo>): void;
    removePredicate(index: number): void;
    addPredicate(complex: boolean): void;
    private openComplexFilterDialog;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterPredicateListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterPredicateListComponent, "tb-filter-predicate-list", never, { "disabled": "disabled"; "valueType": "valueType"; "key": "key"; "operation": "operation"; "displayUserParameters": "displayUserParameters"; "allowUserDynamicSource": "allowUserDynamicSource"; "onlyUserDynamicSource": "onlyUserDynamicSource"; }, {}, never, never, false, never>;
}
