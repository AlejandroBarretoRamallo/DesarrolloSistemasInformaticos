# Cosas a tener en cuenta a la hora de crear un proyecto

1. Crear los directirios dist y source
2. Copiarr la configuración de los siguientes archivos:
   - .prettierrc
   - .prettierignore
   - eslint.config.mjs
   - package-lock.json
   - package.json
   - tsconfig.json

3. En script podemos indicar cosas que queremos que se hagan al hacer npm run "nombrePersonalizado"

4. Ejecutar

   ```
   npm install
   ```

   para instalar las dependencias

5. Configurar un .gitignore de la siguiente manera en la raíz de la máquina

   ```
   $ touch .gitignore_global
   cat .gitignore_global 
   node_modules/
   ale@Asusbarreto:~$ git config --global core.excludesfile ~/.gitignore_global
   ale@Asusbarreto:~$ 
   ```

   Comprobamos que se haya definido correctamente

   ```
   ale@Asusbarreto:~$ git config --global core.excludesfile
   /home/ale/.gitignore_global
   ````

