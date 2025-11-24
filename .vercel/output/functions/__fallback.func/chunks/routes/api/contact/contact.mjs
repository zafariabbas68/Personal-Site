import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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
  try {
    if (event.method === "POST") {
      const body = await readBody(event);
      if (!body.name || !body.email || !body.message) {
        throw createError({
          statusCode: 400,
          statusMessage: "Missing required fields: name, email, message"
        });
      }
      return {
        status: "success",
        message: "Contact form submitted successfully",
        data: {
          id: Math.random().toString(36).substr(2, 9),
          // Temporary ID
          name: body.name,
          email: body.email,
          receivedAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
    }
    return {
      status: "success",
      data: {
        email: "your-email@example.com",
        phone: "+1234567890",
        address: "Your address here",
        businessHours: "Mon-Fri 9AM-5PM"
      },
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    console.error("Contact API error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Internal Server Error"
    });
  }
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
