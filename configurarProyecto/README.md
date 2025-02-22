# Creación de un proyecto en Ts

1. Ejecutamos npm init --yes para crear el package.json
   - El apartado de scripts debe ser similar a este

   ```
    "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "format": "prettier --write .",
     "lint": "eslint . --ext .ts",
     "test:ej1": "vitest run ./tests/ej1.spec.ts",
     "doc": "npx typedoc",
     "coverage": "vitest run --coverage --coverage.include src/*",
     "run:ej1": "tsc-watch --onSuccess \"node dist/complejos.js\"",
     "run:ej2": "tsc-watch --onSuccess \"node dist/ej2.js\"",
     "run:ej3": "tsc-watch --onSuccess \"node dist/ej3.js\"",
     "run:ej4": "tsc-watch --onSuccess \"node dist/ej4.js\"",
     "run:ej5": "tsc-watch --onSuccess \"node dist/ej5.js\"",
     "run:ej6": "tsc-watch --onSuccess \"node dist/ej6.js\"",
     "run:ej7": "tsc-watch --onSuccess \"node dist/ej7.js\"",
     "run:ej8": "tsc-watch --onSuccess \"node dist/ej8.js\"",
     "run:ej9": "tsc-watch --onSuccess \"node dist/ej9.js\"",
     "run:ej10": "tsc-watch --onSuccess \"node dist/ej10.js\""
    },
   ```

2. Ejecutamos tsc --init para crear la configuracion del compilador
   - Debemos activar: outDir y poner ./dist
   - Root dir y poner ./src
   - Activar la opcion "declaration": true
   - Debemos añadir al principio : 
     
     ```
     "exclude": [
      "./tests",
      "./node_modules",
      "./dist"
     ],

3. Instalamos el modo observador: npm install --save-dev tsc watch

4. Instalamos el eslint npm i -g eslint
   - Creamos el directorio eslint.config.mjs y debe contener lo siguiente
     
     ```
     import globals from "globals";
     import pluginJs from "@eslint/js";
     import tseslint from "typescript-eslint";
     import eslintConfigPrettier from "eslint-config-prettier";
     import tsdoc from "eslint-plugin-tsdoc"

     /** @type {import('eslint').Linter.Config[]} */
     export default [
       { files: ["**/*.{js,mjs,cjs,ts}"] },
       { languageOptions: { globals: globals.node } },
       pluginJs.configs.recommended,
       ...tseslint.configs.recommended,
       eslintConfigPrettier,
       {
         plugins:
         {
            tsdoc
         }
       },
       {
         rules: {
            "tsdoc/syntax": "warn"
         }
       },
       { ignores: [
         "dist/*",
         "docs/*",
         "eslint.config.mjs"
       ]
       },
     ];
     ```

5. npm i --save-dev prettier eslint-config-prettier
   - echo {}> .prettierrc
   - touch .prettierignore
   Metemos lo siguiente en el ignore

   ```
   dist
   node_modules
   .prettierrc
   .eslint.config.mjs
   package --log.json
   pacjage.json
   tsconfig.json
   ```

6. Pruebas unitarias: npm i --save-dev vitest
   - Añadimos export delante de las funciones que queramos testear
   - Creamos el directorio tests
   - Hacemos un fichero.spec.ts por cada codigo fuente en test
   - Importamos lo siguiente: 

     ```
     import {describe, expect, test} "from vitest"
     ```

   - Tambien importamos las funciones que vamos a testear
     
     ```
     import {add} from "../src/basicFunctions"
     ```
   
   - Para agrupar pruebas tenemos describe

   ```
   describe("add function test", () => {
      test("add(1,8) returns the value 9", () => {
         expect(add(1, 8)).toBe(9)
      })

      test("add(-9, 7) returns the value -2", () => {
         expect(add(-9, 7)).toBe(-2)
      })
   })
   ```

   - npx vitest (para ejecutar)
   - npx vitest run(se ejcutan las pruebas solo una vez)

7. Typedoc: npm i --save-dev typedoc eslint-plugin-tsdoc
   - npx typedoc (ejecutar)
   - Añadimos comentarios con el siguiente formato
     
     ```
     /**
       * Description of the function
       * @param - firstNumber First operand of the aditon
       * @param - secondNumber Second operand of the adition
       * @returns The adition of the two above numbers
       * ```typescript
       * add(1, 7) = 8
       * ```
       */
      myfunction()
      ```
   
   - Creamos un fichero typedic.json, que se debe ver así:
     
     ```
     {
       "entrypoints": ["src/*.ts"],
       "out": "./docs"
     }
     ```

8. Añadir un .gitignore con 
   - dist
   - node_modules

9. Cambair el target del compilador a ES2024 y añadir la norma de strict a true

10. Configurar github actions
    
    - Creamos un directorio .github/workflows
    - Creamos un archivo dentro de dicho directorio: ci.yml
    - Debe tener el siguiente contenido: 

      ```
      name: CI tests

      on:
        push:
          branches: [ "main" ]
        pull_request:
          branches: [ "main" ]
      
      jobs:
        build:
      
          runs-on: ubuntu-latest
      
          strategy:
            matrix:
              node-version: [18.x, 20.x, 22.x, 23.x]
      
          steps:
          - name: Cloning repo
            uses: actions/checkout@v4
          - name: Use Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v4
            with:
              node-version: ${{ matrix.node-version }}
          - name: Installing dependencies
            run: npm ci
          - name: Running tests
            run: npm test
      ```

      - Ahora cada vez que hagamos push se ejecutan las pruebas.En github, podemos obtener un enlace que podemos pegar en nuestro
        readme para adjuntar un enlace a las Pruebas.

11. Nota: docs debe estar siempre en la raíz del repo para que pueda ser encontrado por github pages