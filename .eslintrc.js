module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   extends: [
      // '@react-native-community',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'standard',
      'standard-jsx',
      'standard-react',
   ],
   rules: {
      'no-use-before-define': 'off',
      camelcase: 'off',
      indent: 'off',
      'max-len': [2, { code: 170, tabWidth: 2, ignoreUrls: true }],
      '@typescript-eslint/indent': ['error', 2],
   },
   settings: {
      'import/resolver': {
         node: {
            paths: ['src'],
         },
      },
   },
};
