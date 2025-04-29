# Creación de un proyecto en Ts

1. Ejecutamos npm init --yes para crear el package.json
   - El apartado de scripts debe ser similar a este

   ```
    "scripts": {
     "test": "vitest run",
     "format": "prettier --write .",
     "lint": "eslint . --ext .ts",
     "test:ej1": "vitest run ./tests/ej1.spec.ts",
     "doc": "npx typedoc",
     "coverage": "vitest run --coverage --coverage.include src/*",
     "run:ej1": "tsc-watch --onSuccess \"node dist/complejos.js\"",
     "test": "vitest run --coverage"
    },
    "type": "commonjs" | "module",
   ```

   En type podemos poner commonjs(como lo hemos hecho normalmente) o module si vamos a usar node16.
   Si vamos a usar el otro, debemos especificar en los imports .js

2. Ejecutamos tsc --init para crear la configuracion del compilador
   - Debemos activar: outDir y poner ./dist
   - Root dir y poner ./src
   - Activar la opcion "declaration": true
   - Cambair el target a ES2024
   - Si cambiamos el type, debemos cambiar tambien el module por node16
   - Debemos añadir al principio : 
     
     ```
     "exclude": [
      "./tests",
      "./node_modules",
      "./dist",
      "./vitest.config.ts"
     ],
     ```

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
       "out": "./docs",
       "readme": "README.md"
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

      - Ahora cada vez que hagamos push se ejecutan las pruebas.En github, podemos obtener un enlace que podemos pegar en nuestro readme para adjuntar un enlace a las Pruebas.

11. Nota: docs debe estar siempre en la raíz del repo para que pueda ser encontrado por github pages

12. Uso del coveralls
    - Creamos el archivo vitest.config.ts 
    - Copiamos lo siguiente

      ```
      import { defineConfig } from 'vitest/config'

      export default defineConfig({
        test: {
          include: ['tests/**/*.spec.ts'],  // Aquí especificamos tus archivos de       prueba .spec.ts
          coverage: {
            provider: 'v8',  // Usar el recolector de cobertura V8
            reporter: ['text', 'html', 'lcov', 'cobertura'],  // Agregar 'lcov' y       'cobertura'
            include: ['src/**/*.ts', 'src/*.ts'],  
            exclude: ['**/*.spec.ts'],  
          },
        },
      })

      ```

13. Poner un coverage en github actions:
    - Clonamos el ci.yml y cambiamos unicamente el nombre del archivo a coverals
    - Copiamos lo siguiente:
      
      ```
      name: Coveralls

      on:
        push:
          branches: [ "main" ]
        pull_request:
          branches: [ "main" ]
      
      jobs:
        build:
          runs-on: ubuntu-latest
      
          steps:
            - name: Cloning repo
              uses: actions/checkout@v4
      
            - name: Use Node.js 23.x
              uses: actions/setup-node@v4
              with:
                node-version: 23.x
      
            - name: Installing dependencies
              run: npm ci
      
            - name: Generating coverage information
              run: npm run coverage
      
            - name: Coveralls Github Action
              uses: coverallsapp/github-action@v2.3.6
              with:
                github-token: ${{ secrets.GITHUB_TOKEN }}
      
      ```

14. Si queremos hacer peticiones https:
    
    ```
    $npm i request
    $npm i @types/request
    ```

# Activar sonarqube

- Ejecutamos touch sonarqube-cloud.yml
- Copiamos el siguiente contenido: 
  
  ```
  name: SonarQube-Cloud 

  on:
    push:
      branches: [ main ]
    pull_request:
      branches: [ main ]
  
  jobs:
    sonarqube-cloud:
      name: SonarQube Cloud
      runs-on: ubuntu-latest
      steps:
        - name: Cloning repo
          uses: actions/checkout@v4
          with:
            fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
        - name: SonarQube Scan
          uses: SonarSource/sonarqube-scan-action@v5
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
            SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
  ```

- Iniciar sesion en sonar qube
- Crear una organizacion si no esta ya creada
- Elegimos el repo deseado
- Ajustes>administracion>metodoDeAnalisis
- Elegimos wiht github actions
- Nos saldran los pasos a seguir
- Añadimos el archiivo que nos genere en lso workflows
- Añadimos el segundo archivo que nos va a generar en la raiz del proyecto
- Descomentamos la parte de .sources y le ponemos src
- Añadir el badge al readme


# Cosas a realizar por cada push

- Ejecutar prettier
- Ejecutar npm run doc
- Hacer el push
- Configurar el pages para que coga el /docs
- Una vez hecho el push, actualizar el README con las pruebas superadas
- Generar de nuevo la documentación
- Registrar nuestro repo en coveralls.io(debemos tenerlo publico)
- Elegimos el repo en el apartado de mis repos
- Hacemos un push, y cuando se realice el github actions, vovlemos a la pagina
- Copiamos el badge en markdown y lo pegamos en el readme
- Volvemos a generar la documentacion
- Ejecutar push

# Creacion de una API Rest usando express y mongodb

- Instalación de express
  
  ```
  npm i express
  npm i --save-dev @types/express
  ```

- Instalamos MONGODB
  
  ```
  wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2404-8.0.8.tgz
  ```

- Ahora debemos descomprimir el arhcivo y renombrarlo usando:
  
  ```
  tar xzvf mongodb-linux-x86_64-ubuntu2404-8.0.8.tgz 
  rm mongodb-linux-x86_64-ubuntu2404-8.0.8.tgz
  mv mongodb-linux-x86_64-ubuntu2404-8.0.8/ mongodb
  ```

- Para ejecutarlo, creamos una carpeta para almacenar la info del servidor y arrancarlo
  
  ```
  mkdir mongodb-data
  sudo /home/usuario/mongodb/bin/mongod --dbpath /home/usuario/mongodb-data/
  ```

- También es conveniente instalar su extension para el visual

- Instalamos el modulo
  
  ```
  npm i mongodb
  ```

- Esa carpeta de mongoDb lo razonable seria incluirla ene l src del proyecto, y ademas debemos
  crear un archivo.ts en el /src/db que se llame mongoose.ts y contenga algo similar a esto:

  ```
  import mongoose from 'mongoose';

  // Crear conexiones separadas para cada base de datos
  export const assetsDB = mongoose.createConnection('mongodb://127.0.0.1:27017/assets');
  
  export const clientsDB = mongoose.createConnection('mongodb://127.0.0.1:27017/clients');
  
  export const tradersDB = mongoose.createConnection('mongodb://127.0.0.1:27017/traders');
  
  // Manejo de eventos de conexión
  assetsDB.on('connected', () => console.log('Connected to assets database'));
  clientsDB.on('connected', () => console.log('Connected to clients database'));
  tradersDB.on('connected', () => console.log('Connected to traders database'));
  ```

