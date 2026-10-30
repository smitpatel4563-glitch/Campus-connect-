const assert = require("node:assert/strict");
const { validateServiceRequest } = require("../js/validation");

assert.equal(
  validateServiceRequest("IT Support", "Cannot access campus Wi-Fi"),
  true
);
assert.equal(
  validateServiceRequest(" ", "Cannot access campus Wi-Fi"),
  false
);
assert.equal(
  validateServiceRequest("Maintenance", "short"),
  false
);

console.log("CampusConnect validation tests passed");
