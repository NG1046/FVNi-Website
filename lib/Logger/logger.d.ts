import * as fs from "fs";
declare enum logTypes {
    log = "Log",
    warn = "Warn",
    error = "Error",
    debug = "Debug"
}
declare enum logTIPE {
    log = "LOG",
    warn = "WRN",
    error = "ERR",
    debug = "DBG"
}
declare class Logger {
    private LPath;
    constructor(logPath: fs.PathLike);
    log: (data: string, typex?: logTypes | undefined, tipex?: logTIPE | undefined) => void;
}
declare function createLogger(Path: fs.PathLike): Logger;
declare const _default: {
    createLogger: typeof createLogger;
    logTIPE: typeof logTIPE;
    logTypes: typeof logTypes;
};
export default _default;
