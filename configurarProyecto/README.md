# Creación de un proyecto en Ts

1. Ejecutamos npm init --yes para crear el package.json
   - El aparatdo de scripts debe ser similar a este

   ```
    "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "format": "prettier --write .",
     "lint": "eslint . --ext .ts",
     "test": "vitest run"
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
   - Añadimos export delante d elas funciones que queramos testear
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