import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.arcjet.com/mcp",
  description: "Discover AI agents and enforce security policy on their actions.",
  auth: connect("api.arcjet.com/" + process.env.VERCEL_PROJECT_ID),
});
