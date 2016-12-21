module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "no-undef": "off",
    "semi": [1, "always"], // require or disallow use of semicolons instead of ASI
    "semi-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after semicolons
    "space-before-function-paren": "off"
  }
};
