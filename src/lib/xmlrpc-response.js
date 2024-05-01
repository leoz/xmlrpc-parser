//
import XmlRpcParser from "./xmlrpc-parser.js";

function XMLRPCResponse() {
  return this;
}

XMLRPCResponse.prototype.parse = function (str) {
  return new Promise(function (resolve, reject) {
    const parser = new XmlRpcParser({
      onDone: function (data) {
        resolve(data);
      },
      onError: function (err) {
        reject(err);
      },
    });
    return parser.parseString(str).finish();
  });
};

export default XMLRPCResponse;
