import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.twelfth.ai",
  description: "Read sales, inventory, product, and supplier data from a workspace.",
  auth: connect("api.twelfth.ai/" + process.env.VERCEL_PROJECT_ID),
});
