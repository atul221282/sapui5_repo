module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 8
    },
    "globals": {
        "sap": true,
        "_": true,
        "$": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};