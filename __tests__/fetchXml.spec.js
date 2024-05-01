//
import fetch from "cross-fetch";
import { XmlRpcMessage, XmlRpcResponse } from "../src/index.js";

describe("Fetch and parse XML funtion", () => {
  test("It should fetch and parse XML", async () => {
    const method = "examples.getStateName";
    const params = 23;
    const message = new XmlRpcMessage(method, [params]);
    const input = message.xml();
    const URL = "http://betty.userland.com/RPC2";
    //
    const res = await fetch(URL, { method: "post", body: input });
    const xml = await res.text();
    //
    const response = new XmlRpcResponse();
    const result = await response.parse(xml);
    //
    expect("Minnesota").toBe(result.params[0]);
  });
});
