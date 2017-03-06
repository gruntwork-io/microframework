import {MicroframeworkBootstrapSettings} from "../../src/MicroframeworkBootstrapSettings";
const winston = require("winston");

export function winstonModule(settings: MicroframeworkBootstrapSettings) {
    winston.configure({
        transports: [
            new winston.transports.File({
                filename: __dirname + "../logs/logs.log"
            })
        ]
    });


    // btw we can retrieve express app instance here to make some winston-specific manipulations on it
    const expressApp = settings.getData("express_app");
}