import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FcRuleNode, RuleNodeType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-node.models';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { RuleNodeConfigComponent } from './rule-node-config.component';
import { Router } from '@angular/router';
import { RuleChainType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export declare class RuleNodeDetailsComponent extends PageComponent implements OnInit, OnChanges {
    protected store: Store<AppState>;
    private fb;
    private router;
    ruleNodeConfigComponent: RuleNodeConfigComponent;
    ruleNode: FcRuleNode;
    ruleChainId: string;
    ruleChainType: RuleChainType;
    disabled: boolean;
    isAdd: boolean;
    initRuleNode: EventEmitter<void>;
    changeScript: EventEmitter<void>;
    ruleNodeType: typeof RuleNodeType;
    entityType: typeof EntityType;
    ruleNodeFormGroup: UntypedFormGroup;
    private ruleNodeFormSubscription;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, router: Router);
    private buildForm;
    private updateRuleNode;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(): void;
    openRuleChain($event: Event): void;
    isSingletonEditAllowed(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeDetailsComponent, "tb-rule-node", never, { "ruleNode": "ruleNode"; "ruleChainId": "ruleChainId"; "ruleChainType": "ruleChainType"; "disabled": "disabled"; "isAdd": "isAdd"; }, { "initRuleNode": "initRuleNode"; "changeScript": "changeScript"; }, never, never, false, never>;
}
