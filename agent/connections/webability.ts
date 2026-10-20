import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.webability.io/mcp",
  description: "Scan web pages for WCAG accessibility issues, get code fixes, and verify them.",
  auth: connect("mcp.webability.io/" + process.env.VERCEL_PROJECT_ID),
});
