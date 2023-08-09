"use strict";
function InitModule(ctx, logger, nk, initializer) {
    logger.info('InitModule - template!');
}
function rpcHealthcheck(ctx, logger, nk, payload) {
    logger.info('rpcHealthcheck - !');
    return JSON.stringify({ succes: true });
}
