import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://deformity.ai/api/mcp",
  description: "Build AI conversational forms and surveys, and analyze responses.",
  auth: connect("deformity.ai/" + process.env.VERCEL_PROJECT_ID),
});
