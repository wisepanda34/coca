// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  // @ts-ignore
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'max-len': ['error', { code: 120 }],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
          trailingComma: 'none',
          bracketSpacing: true,
          bracketSameLine: false,
          endOfLine: 'crlf'
        }
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off',
      // Включаем правила конфигурации Prettier для устранения конфликтов
      ...eslintConfigPrettier.rules
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  }
).prepend()
