console.log("=== 1) Create + overwrite ===");
const nameBuffer = Buffer.from("Herman");
nameBuffer.write("Franca");
console.log("toString:", nameBuffer.toString());
console.log("buffer:", nameBuffer);
console.log("json:", nameBuffer.toJSON());

console.log("\n=== 2) Encoding conversions ===");
const text = "hello";
const textBuffer = Buffer.from(text, "utf8");
console.log("base64:", textBuffer.toString("base64"));
console.log("hex:", textBuffer.toString("hex"));

console.log("\n=== 3) Allocate fixed-size memory ===");
const fixed = Buffer.alloc(8);
fixed.write("abc");
console.log("alloc(8):", fixed, "as text:", fixed.toString());

console.log("\n=== 4) Read/write numbers in bytes ===");
const numBuffer = Buffer.alloc(4);
numBuffer.writeUInt32BE(305419896, 0); // 0x12345678
console.log("raw bytes:", numBuffer);
console.log("readUInt32BE:", numBuffer.readUInt32BE(0));
console.log("readUInt32LE:", numBuffer.readUInt32LE(0));

console.log("\n=== 5) Slice packet header/payload ===");
const packet = Buffer.from([0xaa, 0xbb, 0x03, 0x48, 0x69, 0x21]);
const header = packet.subarray(0, 3);
const payload = packet.subarray(3);
console.log("header:", header);
console.log("payload text:", payload.toString("utf8"));

console.log("\n=== 6) Merge chunks (like stream data) ===");
const chunk1 = Buffer.from("Node ");
const chunk2 = Buffer.from("Buffer ");
const chunk3 = Buffer.from("rocks");
const merged = Buffer.concat([chunk1, chunk2, chunk3]);
console.log("merged:", merged.toString());