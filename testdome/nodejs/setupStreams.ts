const stream = require("stream");

function setupStreams(
  dataInputStream: any,
  dataOutputStream: any,
  callback: any
) {
  // Write your code here
  let idx = 0;
  dataInputStream.on("data", (data: any) => {
    const obj = JSON.parse(data);
    obj.id = idx;
    dataOutputStream.write(obj, null, () => idx++);
  });
  dataOutputStream.on("end", () => {
    callback();
  });
}

let readable = new stream.Readable();
let writable = new stream.Writable({
  objectMode: true,
  write: (chunk: any, encoding: any, callback: any) => {
    console.log(chunk);
    callback(null, true);
  },
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;
