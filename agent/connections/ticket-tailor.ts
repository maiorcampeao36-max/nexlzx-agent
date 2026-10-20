import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.tickettailor.ai/mcp",
  description: "Manage tickets, orders, and attendees.",
  auth: connect("mcp.tickettailor.ai/" + process.env.VERCEL_PROJECT_ID),
});
