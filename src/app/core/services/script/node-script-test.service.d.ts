import { Observable } from 'rxjs';
import { RuleChainService } from '../../../../../../thingsboard/ui-ngx/src/app/core/http/rule-chain.service';
import { MatDialog } from '@angular/material/dialog';
import { ScriptLanguage } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class NodeScriptTestService {
    private ruleChainService;
    dialog: MatDialog;
    constructor(ruleChainService: RuleChainService, dialog: MatDialog);
    testNodeScript(script: string, scriptType: string, functionTitle: string, functionName: string, argNames: string[], ruleNodeId: string, helpId?: string, scriptLang?: ScriptLanguage): Observable<string>;
    private openTestScriptDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeScriptTestService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NodeScriptTestService>;
}
