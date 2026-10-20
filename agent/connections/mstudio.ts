import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mstudio.ai/mcp",
  description: "Turn a story or screenplay into a film with scripts, shots, stills, video, and sound.",
  auth: connect("mstudio.ai/" + process.env.VERCEL_PROJECT_ID),
});
