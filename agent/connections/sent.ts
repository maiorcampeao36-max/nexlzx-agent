import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sent.dm/mcp",
  description: "Send SMS, WhatsApp, and RCS messages through one messaging API.",
  auth: connect("mcp.sent.dm/" + process.env.VERCEL_PROJECT_ID),
});
