import moment from 'moment';

/* tslint:disable:no-console */

const isDev = true;
export function devLog(...args: any) {
    if (!isDev) {
        return;
    }

    Function.apply.call(console.log, console, [`💬 ${moment().format('HH:mm:ss')}`, ...args]);
}

export function successLog(message: string, payload?: any) {
    if (!isDev) {
        return;
    }
    console.log(`%c✅ ${moment().format('HH:mm:ss')} ${message}` + (payload || ''), 'color: green');
}

export function failLog(message: string | Error, payload?: any) {
    if (!isDev) {
        return;
    }
    console.log(`%c🔥 ${moment().format('HH:mm:ss')} ${message}` + (payload || ''), 'color: red; font-style: bold;');
}

export function infoLog(message: string, payload?: any) {
    if (!isDev) {
        return;
    }
    console.log(
        `%cℹ️ ${moment().format('HH:mm:ss')} ${message}` + (payload || ''),
        'color: #e0e0e0; font-style: italic',
    );
}
