# Comandos NPM usados

## Instalando os packages usados:

<br>

## 0. NPM Global

```sh
npm install -g commitizen standard-version
```

<br>

---

<br>

## 1. Adicionando e configurando o Prettier

```sh
# Criando o .prettierignore
node_modules
```

```sh
# Criando o .prettierrc.json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

```sh
# Adicionando o Prettier
npm install prettier --save-dev --save-exact
```

```sh
# Adicionando scripts do prettier no package.json
"prettier-write": "npx prettier --write --ignore-unknown ."
"prettier-check": "npx prettier --check ."
```

<br>

---

<br>

## 2. Adicionando e configurando o Lint-staged

```sh
# Criando o .lintstagedrc.json
{
  "*.{js,md,json}": [
    "npm run prettier-write",
    "git add",
    "npm run prettier-check"
  ]
}
```

```sh
# Adicionando o Lint Staged
npm install lint-staged --save-dev
```

<br>

---

<br>

## 3. Adicionando e configurando o Husky

```sh
# Adicionando o Husky
npm install husky --save-dev
npx husky install
```

```sh
# Adicionando scripts para husky no package.json
"pre-commit": "npx --no-install lint-staged"
"postinstall": "npx husky install && chmod ug+x .husky/*"
```

```sh
# Configurando o Husky
npx husky add .husky/pre-commit "npm run pre-commit"
```

<br>

---

<br>

## 4. Adicionando e configurando o Commits

```sh
# Instalando o Commitizen no projeto.
npm install commitizen --save-dev
```

```sh
# Inicializando o configurador do changelog.
commitizen init cz-conventional-changelog --save-dev --save-exact
```

```sh
# Adicionando Commitlint
npm add @commitlint/config-conventional @commitlint/cli --save-dev
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

```sh
# Adicionando os Script no package.json.
"commit": "git-cz"
```

```sh
# Adicionando commmitlint
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

<br>

---

<br>

## 5. Adicionando e configurando o Standard Version

```sh
# Instalando o Standard Version no projeto.
npm install standard-version --save-dev
```

```sh
# Adicionando os Script no package.json.
"release": "standard-version"
```

<br>

---

<br>

## 6. Adicionando e configurando o eslint

```sh
# Instalando o eslint no projeto.
npm install --save-dev eslint
```

```sh
# Configuração usada no .eslintrc.json
{
	"extends": "eslint:recommended",
	"env": {
		"node": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2021
	},
	"rules": {
		"arrow-spacing": ["warn", { "before": true, "after": true }],
		"brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"curly": ["error", "multi-line", "consistent"],
		"dot-location": ["error", "property"],
		"handle-callback-err": "off",
		"indent": ["error", "tab"],
		"keyword-spacing": "error",
		"max-nested-callbacks": ["error", { "max": 4 }],
		"max-statements-per-line": ["error", { "max": 2 }],
		"no-console": "off",
		"no-empty-function": "error",
		"no-floating-decimal": "error",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
		"no-shadow": ["error", { "allow": ["err", "resolve", "reject"] }],
		"no-trailing-spaces": ["error"],
		"no-var": "error",
		"object-curly-spacing": ["error", "always"],
		"prefer-const": "error",
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"yoda": "error"
	}
}
```

<br>

---

<br>

## 7. Adicionando e configurando o dotenv

```sh
# Instalando o dotenv no projeto.
npm install dotenv --save
```

```sh
# Adicionando arquivo .env

# environments
TOKEN=
CLIENT_ID=
GUILD_ID=
```

<br>

---

<br>

## 8. Adicionando o discord.js

```sh
# Instalando o discord.js no projeto.
npm install discord.js
```

[Link discord.js](https://discord.js.org/)

<br>

---

<br>

<br>
<br>

[⬆ Voltar ao topo](#npm-commands)<br>
