import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://modelslab.com/mcp/v7",
  description: "Generate and edit images, video, speech, music, and sound with AI models.",
  auth: connect("modelslab.com/" + process.env.VERCEL_PROJECT_ID),
});
