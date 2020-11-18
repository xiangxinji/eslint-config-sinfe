const rules = require('./rules')

module.exports = {
    root : true ,
    env : {
        node : true ,
        browser: true
    },
    parserOptions : {
        ecmaVersion : 6 ,
        sourceType: 'module' ,
        ecmaFeatures:{
            jsx : true,
            experimentalObjectRestSpread : true
        }
    },
    rules
}
