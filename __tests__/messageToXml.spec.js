//
import { XmlRpcMessage } from "../src/index.js";

describe("Fetch XML funtion", () => {
  test("it should fetch XML", () => {
    const method = "MyCall";
    const params = {
      a: 1,
      b: 2,
    };
    const message = new XmlRpcMessage(method, [params]);
    const input = message.xml();

    const output =
      '<?xml version="1.0"?>\n' +
      "<methodCall>\n" +
      "<methodName>MyCall</methodName>\n" +
      "<params>\n" +
      "<param>\n" +
      "<value><struct>\n" +
      "<member>\n" +
      "<name>a</name>\n" +
      "<value><i4>1</i4></value>\n" +
      "</member>\n" +
      "<member>\n" +
      "<name>b</name>\n" +
      "<value><i4>2</i4></value>\n" +
      "</member>\n" +
      "</struct>\n" +
      "</value>\n" +
      "</param>\n" +
      "</params>\n" +
      "</methodCall>";

    expect(input).toEqual(output);
  });
});
