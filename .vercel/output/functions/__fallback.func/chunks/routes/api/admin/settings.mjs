import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';

const settings = defineEventHandler(async (event) => {
  return {
    status: "success",
    message: "Site settings endpoint",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
});

export { settings as default };
//# sourceMappingURL=settings.mjs.map
