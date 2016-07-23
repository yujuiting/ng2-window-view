import { Observable } from 'rxjs/Observable';
export interface WindowViewHasResult<T> {
    /**
     * Auto close window after complete result$.
     *
     * Default: false
     */
    preventAutoCloseWindow?: boolean;
    result$: Observable<T>;
}
