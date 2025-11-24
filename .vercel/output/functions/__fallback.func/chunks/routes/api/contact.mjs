import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const contact = defineEventHandler(async (event) => {
  return {
    status: "success",
    message: "Contact API endpoint",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
