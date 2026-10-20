import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.openstatus.dev/mcp",
  description: "Monitor uptime, manage incidents, and publish status page updates.",
  auth: connect("api.openstatus.dev/" + process.env.VERCEL_PROJECT_ID),
});
