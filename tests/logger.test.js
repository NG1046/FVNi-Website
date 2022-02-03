const sysPath = require("path");
const logger = require("../lib/Logger").default.createLogger(sysPath.join(__dirname, "/logsTest/test.txt")).log;
const lgrType = require("../lib/Logger").default.logTypes
const lgrTipe = require("../lib/Logger").default.logTIPE