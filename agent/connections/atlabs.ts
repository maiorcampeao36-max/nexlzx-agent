import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.atlabs.ai/mcp",
  description: "Generate story videos, images, and music with consistent characters and styles.",
  auth: connect("mcp.atlabs.ai/" + process.env.VERCEL_PROJECT_ID),
});
