---
to: "<%= h.packageDir(org, name) %>/tsconfig.json"
---
{
  "extends": "../../tsconfig.base.json",
  "include": ["src"],
  "exclude": [
    "src/tests",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*/*.stories.tsx"
  ]
}
