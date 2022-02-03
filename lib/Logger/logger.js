//import fs = require("fs");
//import * as fs from "fs";
const fs = require("fs");
var logTypes;
(function (logTypes) {
    logTypes["log"] = "Log";
    logTypes["warn"] = "Warn";
    logTypes["error"] = "Error";
    logTypes["debug"] = "Debug";
})(logTypes || (logTypes = {}));
var logTIPE;
(function (logTIPE) {
    logTIPE["log"] = "LOG";
    logTIPE["warn"] = "WRN";
    logTIPE["error"] = "ERR";
    logTIPE["debug"] = "DBG";
})(logTIPE || (logTIPE = {}));
class Logger {
    constructor(logPath) {
        this.log = (data, typex, tipex) => {
            if (!typex && !tipex)
                throw Error("Typex or Tipex is required.");
            var trype = typex || tipex;
            if (!fs.existsSync(this.LPath)) {
                fs.mkdirSync(this.LPath.toString().substring(0, this.LPath.toString().lastIndexOf("/")), { recursive: true });
                let det = (new Date()).toISOString().split('T')[1]
                let dato = `\n[${trype}] [${det}]: ${data}`;
                fs.writeFileSync(this.LPath, dato);
                return;
            }
            let det = new Date().toISOString();
            let dato = `\n[${trype}] [${det}]: ${data}`;
            fs.appendFileSync(this.LPath, dato);
            return;
        };
        this.LPath = logPath;
    }
    ;
}
function createLogger(Path) {
    return new Logger(Path);
}
;/*
export default {
    createLogger: createLogger,
    logTIPE: logTIPE,
    logTypes: logTypes
};
*/

exports.default = {
    createLogger: createLogger,
    logTIPE: logTIPE,
    logTypes: logTypes
};