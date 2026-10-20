import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.autobound.ai/sse",
  description: "Generate personalized sales outreach and prospect insights with AI.",
  auth: connect("mcp.autobound.ai/" + process.env.VERCEL_PROJECT_ID),
});
