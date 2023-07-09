// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function throwError(message) {
    throw new Error(message);
}

// - Registra el error en un archivo a través de un try...catch
try {
    throwError("Este es mi mensaje de error personalizado");
} catch (error) {
    console.log(error.message);
}

import {
    createLogger,
    format as _format,
    transports as _transports,
} from "winston";

const logger = createLogger({
    level: "info",
    format: _format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new _transports.File({ filename: "error.log", level: "error" }),
        new _transports.File({ filename: "combined.log" }),
    ],
});
