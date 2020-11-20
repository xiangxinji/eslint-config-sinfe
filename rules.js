

module.exports = {
    // poossible
    'require-atomic-updates' : 0 ,
    'no-compare-neg-zero' : 2 ,
    'no-cond-assign' : 0 ,
    'no-constant-condition' : 2 ,
    'no-dupe-args' : 2 ,
    'no-dupe-keys' : 2 ,
    'no-duplicate-case' : 2 ,
    'no-empty' : 2 ,
    'no-ex-assign' : 2 ,
    'no-func-assign' : 2 ,
    'no-obj-calls' : 2 ,
    'no-irregular-whitespace' : 2 ,
    'no-template-curly-in-string' : 2 ,
    'use-isnan' : 2 ,

    'no-unexpected-multiline' : 0 ,
    'no-extra-parens' : 0 ,
    'no-extra-semi' : 0 ,
    'no-extra-boolean-cast' : 0 ,
    'no-control-regex' : 0 ,
    'no-debugger' : 0 ,
    'no-await-in-loop' : 0 ,
    'no-empty-character-class' : 0 ,
    'no-inner-declarations' : 0 ,
    'no-invalid-regexp': 0 ,
    'no-misleading-character-class' : 0 ,
    'no-prototype-builtins' : 0 ,
    'no-regex-spaces': 0 ,
    'no-sparse-arrays' : 0 ,
    'no-unsafe-finally' : 0 ,
    'no-unsafe-negation' : 0 ,

    'eqeqeq' : 2 ,
    'no-alert' : 0 ,
    // base
    'no-console' : 0 ,
    'no-caller'  : 2 ,
    'no-empty-pattern' : 2 ,
    'no-unreachable' : 2 ,
    'valid-typeof' : 2 ,
    'array-callback-return' : 2 ,
    'block-scoped-var' : 2 ,
    'class-methods-use-this':2 ,
    'complexity' : [2 , 10] ,
    'default-case' : 2 ,
    'dot-notation' : 2 ,
    'no-case-declarations' : 2 ,
    'no-div-regex' : 2,
    'no-else-return' : 2 ,
    'no-eval' : 2,
    'no-extend-native' : 2 ,
    'no-extra-bind' : 2 ,
    'no-extra-label' : 2 ,
    'no-global-assign' : 2 ,
    'no-implied-eval' : 2 ,
    'no-iterator' : 2,
    'no-labels':2,
    'no-lone-blocks':2,
    'no-new-func' : 2 ,
    'no-script-url' : 2 ,
    'no-self-assign' : 2 ,
    'no-self-compare' : 2 ,
    'no-sequences' : 2 ,
    'no-unmodified-loop-condition' : 2 ,
    'no-unused-labels' : 2 ,
    'no-useless-call' : 2 ,
    'no-useless-return' : 0 ,
    'no-void' : 2 ,
    'no-with' : 2 ,
    'no-floating-decimal' : 1 ,
    'no-implicit-coercion' : 1,
    'no-loop-func'  : 1 ,
    'no-multi-spaces' : 2 ,
    'no-multi-str' : 1 ,
    'no-new-wrappers' : 1 ,
    'no-octal' : 1 ,
    'no-octal-escape' : 1  ,
    'no-return-await' : 1 ,
    'no-useless-escape'  :1 ,
    'no-new': 0 ,
    'dot-location' : 0 ,
    'no-empty-function' : 0 ,
    'consistent-return' : 0 ,
    'guard-for-in' : 0 ,
    'max-classes-per-file' : 0 ,
    'curly' : 0 ,
    'no-eq-null': 0 ,
    'no-fallthrough' : 0 , // 允许 switch 中落空
    'no-implicit-globals' : 0 ,
    'no-invalid-this' : 0 ,
    'no-magic-numbers' : 0 ,
    'no-param-reassign' : 0 ,
    'no-proto' : 0 ,
    'no-redeclare' : 0 ,
    'no-restricted-properties' : 0 ,
    'no-return-assign' : 0 ,
    'no-throw-literal' : 0,
    'no-unused-expressions' : 0 ,
    'no-useless-catch' : 0 ,
    'no-useless-concat' : 0 ,
    'no-warning-comments' : 0 ,
    'prefer-named-capture-group' : 0 ,
    'prefer-promise-reject-errors' : 0 ,
    'radix' : 0 ,
    'require-await' : 0 ,
    'require-unicode-regexp' : 0 ,
    'vars-on-top' : 0 ,
    // stylistic

    'array-bracket-newline' : 0 ,
    'array-bracket-spacing' :  0 ,
    'array-element-newline' : 0 ,
    'block-spacing' : [2 ,"always"] ,
    'brace-style' : [2 , "1tbs"] ,
    'camelcase' : 0 ,
    'capitalized-comments' : 0 ,
    'comma-dangle' : [
        2 , {
            arrays : "always" ,
            objects : "always" ,
            imports : "never" ,
            functions : "never"
        }
    ],
    'comma-spacing' : [
        2 , {
            after : true ,
            before : false
        }
    ],
    'computed-property-spacing' : 0 ,
    'consistent-this' : [2 , 'self'] ,
    'eol-last' : 0 ,
    'func-call-spacing' : [2 , 'never'] ,
    'func-name-matching' : 0 ,
    'func-names' : 0 ,
    'func-style' : 0 ,
    'indent' : [2 , 2 , { SwitchCase : 1 }] ,
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing' : [2 , { before : false , after : true } ] ,
    'line-comment-position' : 0 ,
    'linebreak-style' : [2 , "unix"] ,  // \n
    'lines-between-class-members' : 0 ,
    'max-len' : [2 , 200] ,
    'max-lines' : [2 , 10000] ,
    'new-parens' :[2 , "always"] ,

}
