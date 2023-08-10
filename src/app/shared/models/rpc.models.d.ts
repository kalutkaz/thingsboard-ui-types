import { TenantId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/tenant-id';
import { RpcId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/rpc-id';
import { DeviceId } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/id/device-id';
import { TableCellButtonActionDescriptor } from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/table-widget.models';
export declare enum RpcStatus {
    QUEUED = "QUEUED",
    DELIVERED = "DELIVERED",
    SUCCESSFUL = "SUCCESSFUL",
    TIMEOUT = "TIMEOUT",
    FAILED = "FAILED",
    SENT = "SENT",
    EXPIRED = "EXPIRED"
}
export declare const rpcStatusColors: Map<RpcStatus, string>;
export declare const rpcStatusTranslation: Map<RpcStatus, string>;
export interface PersistentRpc {
    id: RpcId;
    createdTime: number;
    expirationTime: number;
    status: RpcStatus;
    response: any;
    request: {
        id: string;
        oneway: boolean;
        body: {
            method: string;
            params: string;
        };
        retries: null | number;
    };
    deviceId: DeviceId;
    tenantId: TenantId;
    additionalInfo?: string;
}
export interface PersistentRpcData extends PersistentRpc {
    actionCellButtons?: TableCellButtonActionDescriptor[];
    hasActions?: boolean;
}
export interface RequestData {
    method?: string;
    oneWayElseTwoWay?: boolean;
    persistentPollingInterval?: number;
    retries?: number;
    params?: object;
    additionalInfo?: object;
}
