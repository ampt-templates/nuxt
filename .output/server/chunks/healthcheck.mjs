import { a as defineEventHandler } from './nitro/node.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';

const healthcheck = defineEventHandler((event) => {
  return {
    healthcheck: "OK"
  };
});

export { healthcheck as default };
//# sourceMappingURL=healthcheck.mjs.map
