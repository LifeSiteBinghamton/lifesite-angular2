import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AppState {

    private _data = new Subject<Object>();
    private _dataStream$ = this._data.asObservable();

    private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    constructor() {
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }

    notifyDataChanged(event, value) {
        let current = this._data[event];
        if (current !== value) {
            this._data[event] = value;

            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    }

    subscribe(event: string, callback: Function) {
        let subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);

        this._subscriptions.set(event, subscribers);

        // Call the callback immediately in case we need it
        callback.call(null, this._data[event]);
    }

    getAsync(event: string) {
        return this._data[event];
    }

    _onEvent(data: any) {
        let subscribers = this._subscriptions.get(data.event) || [];

        subscribers.forEach((callback) => {
            callback.call(null, data.data);
        });
    }
}
