const assert = require("assert")

const Z = require("../source/index.js")

describe("parseDates", () => {
  it("converts columns to datestamp", () => {
    const df = [
      { label: "A", value: "2010-12-13" },
      { label: "B", value: "2010-12-15" },
      { label: "C", value: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.parseDates(["value"], df), [
      { label: "A", value: 1292198400000 },
      { label: "B", value: 1292371200000 },
      { label: "C", value: 1292544000000 },
    ])
  })
})
