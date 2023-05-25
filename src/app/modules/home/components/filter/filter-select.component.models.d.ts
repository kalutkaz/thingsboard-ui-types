import { Observable } from 'rxjs';
import { Filter } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
export interface FilterSelectCallbacks {
    createFilter: (filter: string) => Observable<Filter>;
}
