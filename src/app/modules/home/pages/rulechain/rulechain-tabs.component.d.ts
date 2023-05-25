import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { RuleChain } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export declare class RuleChainTabsComponent extends EntityTabsComponent<RuleChain> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainTabsComponent, "tb-rulechain-tabs", never, {}, {}, never, never, false, never>;
}
