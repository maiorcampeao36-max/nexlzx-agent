import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://tracwell.app/mcp",
  description: "Query website traffic, revenue, goals, funnels, and recorded sessions.",
  auth: connect("tracwell.app/" + process.env.VERCEL_PROJECT_ID),
});
