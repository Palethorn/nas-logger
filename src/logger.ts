export class Logger {
    debug: boolean;
    context: string;

    constructor(context: string, debug: boolean = false) {
        this.debug = debug;
        this.context = context;
    }

    d(message: any) {
        if(this.debug) {
            console.debug(this.context, 'DEBUG:' + (new Date()).toJSON() + ':', message);
        }
    }

    i(message: any) {
        console.info(this.context, 'INFO:' + (new Date()).toJSON() + ':', message);
    }

    e(message: any) {
        console.error(this.context, '- ERROR:' + (new Date()).toJSON() + ':', message);
    }

    w(message: any) {
        console.warn(this.context, 'WARN:' + (new Date()).toJSON() + ':', message);
    }

    trace() {
        console.trace();
    }
}