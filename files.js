import fs from "node:fs"

const buffer = Buffer.alloc(8)

const fileContents = fs.readFileSync("./file.txt")
console.log(fileContents)



const text = fs.readFileSync("./file.txt", "utf-8")
console.log(text)

buffer.from(text)
console.log(buffer)