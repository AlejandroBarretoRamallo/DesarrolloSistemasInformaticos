# Creación de un proyecto en Ts

1. Ejecutamos npm init --yes para crear el package.json

2. Ejecutamos tsc --init para crear la configuracion del compilador

3. Instalamos el modo observador: npm install --save-dev tsc watch

4. Instalamos el eslint npm i -g eslint

5. npm i --save-dev prettier eslint-config-prettier
   - echo {}> prettierrc
   - touch .prettierignore
   - npx prettier --write

6. Pruebas unitarias: npm i --save-dev vitest
   - npx vitest (para ejecutar)

7. Typedoc: npm i --save-dev typedoc eslint-plugin-tsdoc
   - npx typedoc (ejecutar)