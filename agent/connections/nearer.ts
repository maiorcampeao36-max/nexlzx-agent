import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://nearer.io/mcp",
  description: "Break a goal into small steps and work through them one at a time.",
  auth: connect("nearer.io/" + process.env.VERCEL_PROJECT_ID),
});
