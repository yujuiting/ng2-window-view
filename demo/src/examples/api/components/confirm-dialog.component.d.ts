import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WindowViewContainerComponent, WindowViewHasResult } from '../../';
export declare class ConfirmDialogComponent implements WindowViewHasResult<boolean> {
    title: string;
    confirmString: string;
    denyString: string;
    content: string;
    size: string;
    result: EventEmitter<any>;
    dismiss: EventEmitter<any>;
    windowViewContainer: WindowViewContainerComponent;
    private _result$;
    readonly result$: Observable<boolean>;
    confirm(): void;
    deny(): void;
    private onClose();
}
