import { d as defineEventHandler, g as getHeader, c as createError } from '../../../nitro/nitro.mjs';
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

const admin = defineEventHandler(async (event) => {
  try {
    const authHeader = getHeader(event, "authorization");
    return {
      status: "success",
      message: "Admin API endpoint",
      endpoints: {
        users: "/api/admin/users",
        settings: "/api/admin/settings",
        analytics: "/api/admin/analytics"
      },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    console.error("Admin API error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error"
    });
  }
});

export { admin as default };
//# sourceMappingURL=admin.mjs.map
