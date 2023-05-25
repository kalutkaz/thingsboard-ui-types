import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { AttributeScope } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { AttributeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/attribute.service';
import * as i0 from "@angular/core";
export interface AddAttributeDialogData {
    entityId: EntityId;
    attributeScope: AttributeScope;
}
export declare class AddAttributeDialogComponent extends DialogComponent<AddAttributeDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddAttributeDialogData;
    private attributeService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddAttributeDialogComponent, boolean>;
    fb: UntypedFormBuilder;
    attributeFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddAttributeDialogData, attributeService: AttributeService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddAttributeDialogComponent, boolean>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddAttributeDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddAttributeDialogComponent, "tb-add-attribute-dialog", never, {}, {}, never, never, false, never>;
}
