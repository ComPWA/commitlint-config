module.exports = {
  extends: ["@commitlint/config-conventional@v18.4.4"],
  rules: {
    "header-max-length": [2, "always", 72],
    "type-case": [2, "always", ["upper-case"]],
    "type-enum": [
      2,
      "always",
      ["BEHAVIOR", "BREAK", "DOC", "DX", "ENH", "FEAT", "FIX", "MAINT"],
    ],
  },
};
