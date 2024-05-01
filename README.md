# XML-RPC Parser

[![npm version](https://badge.fury.io/js/xmlrpc-parser.svg)](https://badge.fury.io/js/xmlrpc-parser) [![npm downloads](https://img.shields.io/npm/dt/xmlrpc-parser.svg)](https://www.npmjs.com/package/xmlrpc-parser)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)

Platform independent XML-RPC parser

## Installation

```bash
npm install xmlrpc-parser
```

## Example

```javascript
//
import fetch from "cross-fetch";
import { XmlRpcMessage, XmlRpcResponse } from "xmlrpc-parser";
//
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
console.log(result);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
