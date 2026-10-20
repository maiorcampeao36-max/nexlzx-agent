import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.adrio.ai",
  description: "Create and launch Meta ad creatives and manage media buying.",
  auth: connect("api.adrio.ai/" + process.env.VERCEL_PROJECT_ID),
});
