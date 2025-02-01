# Informe primera práctica: configuración de maquina virtual

## Tareas previas a la configuración del iaas

### Realización de encuestas

- Realizamos la encuesta sobre expectativas de la asignatura
![EncuestaEspectativas](./images/EncuestaExpectativas.png)
- Realizamos la encuesta para crear un grupo
![Grupo_R](./images/Grupo.png)

### Aceptamos la tarea en el github clasroom
![](./images/repo.png)

### Creación de cuenta de github
En nuestro caso, ya disponemos de una cuenta de github

```
ale@Asusbarreto:~/DesarrolloSistemasInformaticos$ cat ../.gitconfig 
[user]
        email = alu0101552774@ull.edu.es
        name = AlejandroBarretoRamallo
        mail = alu0101552774@ull.edu.es
[credential]
        helper = cache
[push]
        default = matching
[branch]
        autosetuprebase = always
[init]
        defaultBranch = main
```

### Github Education
En nuestro caso ya hemos solicitado previamente para otras asignaturas
estos beneficios
![](./images/Github%20education.png)
### Aceptamos el Github classroom
Completamos la asignación al classroom de github
![](./images/Classroom.png)
### Introducción a makrdown
Los conocimientos basicos para poder desarrollar en markdonw son:
- #_Titulo nos permite crear titulos
- ##-###-###... para anidar niveles de 
- Utilizar guiones para listas no enumeradas
- Utilizar numeros(1. 2. 3.) para crear una lista enumerada
- Utilizar comillas (```) entre bloques de codigo
- Utilizar [] y parentesis() para añadir imagenes o enlaces
## Configuración de la máquina

1. Acceso al servicio Iaas de la ull 

   ![](./images/AccesoIaas.png)

2. Tomamos la máquina virtual y la encendemos

   ![](./images/maquina.png)

3. Introducimos el nombre de usuario y la contraseña(usuario en ambos casos) y cambiamos la contraseña por defecto a una nueva

   ![](./images/password.png)

4. Ahora debemos abrir la temrinal a traves de la consola VNC.

   Debemos instalar las net-tools y obtener la dirección de nuestra máquina 
   con los siguientes comandos: 

   ```
   sudo apt install net-tools
   ...
   ifconfig -a
   ```

   Al ejecutar con sudo, nos pedirá la contraseña para poder ejecutar dicho comando.Podemos ver que
   la direccioó IP es 10.6.129.150

   ![](./images/IP.png)

5. Una vez obtenemos la IP, podemos establecer una conexión ssh desde nuestra terminal de linux
   Ademas de pedirnos la contraseña, al ser la primera vez nos preguntará si queremos guardar este 
   host, y pondremos 'yes'

   ```
   ale@Asusbarreto:~$ ssh usuario@10.6.129.150
   The authenticity of host '10.6.129.150 (10.6.129.150)' can't be established.
   XXXXX key fingerprint is SHA256:ODy4ctkBDwulQhf8LRdj79LykH6poMMuOt/6EbWaCro.
   This host key is known by the following other names/addresses:
       ~/.ssh/known_hosts:1: [hashed name]
   Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
   Warning: Permanently added '10.6.129.150' (XXXXX) to the list of known hosts.
   usuario@10.6.129.150's password:
   Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-52-generic x86_6 
    * Documentation:  https://help.ubuntu.com
    * Management:     https://landscape.canonical.com
    * Support:        https://ubuntu.com/p 
    System information as of sáb 01 feb 2025 17:13:21 U 
     System load:  0.0               Processes:             193
     Usage of /:   8.3% of 31.81GB   Users logged in:       1
     Memory usage: 3%                IPv4 address for ens3: 10.6.129.150
     Swap usage:    
    * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
      just raised the bar for easy, resilient and secure K8s cluster deploymen 
      https://ubuntu.com/engage/secure-kubernetes-at-the-ed 
   El mantenimiento de seguridad expandido para Applications está desactiva 
   Se pueden aplicar 193 actualizaciones de forma inmediata.
   Para ver estas actualizaciones adicionales, ejecute: apt list --upgradab 
   Active ESM Apps para recibir futuras actualizaciones de seguridad adicionales.
   Vea https://ubuntu.com/esm o ejecute «sudo pro statu 
   Last login: Mon Jul 15 12:20:52 2024 from 10.107.1.25
   ```

6. Modificamos el nombre de host de la máquina virtual, modificando
   dos ficheros: /etc/hostname y /etc/hosts

   */etc/hostname*

   ```
   usuario@ubuntu:~$ cat /etc/hostname
   ubuntu
   usuario@ubuntu:~$ sudo vi /etc/hostname
   [sudo] password for usuario:
   usuario@ubuntu:~$ cat /etc/hostname
   DSI
   usuario@ubuntu:~$
   ```

   */etc/hosts*

   ```
   usuario@ubuntu:~$ cat /etc/hosts
   127.0.0.1 localhost
   127.0.1.1 ubuntu
   
   # The following lines are desirable for IPv6 capable hosts
   ::1     ip6-localhost ip6-loopback
   fe00::0 ip6-localnet
   ff00::0 ip6-mcastprefix
   ff02::1 ip6-allnodes
   ff02::2 ip6-allrouters
   usuario@ubuntu:~$ sudo vi /etc/hosts
   usuario@ubuntu:~$ cat /etc/hosts
   127.0.0.1 localhost
   127.0.1.1 DSI
   
   # The following lines are desirable for IPv6 capable hosts
   ::1     ip6-localhost ip6-loopback
   fe00::0 ip6-localnet
   ff00::0 ip6-mcastprefix
   ff02::1 ip6-allnodes
   ff02::2 ip6-allrouters
   usuario@ubuntu:~$
   ```

7. Reiniciamos la máquina virtual

   ```
   usuario@ubuntu:~$ sudo reboot

   Broadcast message from root@ubuntu on pts/1 (Sat 2025-02-01 17:41:23 UTC):
   
   The system will reboot now!
   
   usuario@ubuntu:~$ Connection to 10.6.129.150 closed by remote host.
   Connection to 10.6.129.150 closed.
   ```

8. Ponemos la máquina virtual en la lista de hosts de la maquina local

    ```
    ale@Asusbarreto:~$ cat /etc/hosts
    # This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.wsl.conf:
    # [network]
    # generateHosts = false
    127.0.0.1       localhost
    127.0.1.1       Asusbarreto.    Asusbarreto
    
    # The following lines are desirable for IPv6 capable hosts
    ::1     ip6-localhost ip6-loopback
    fe00::0 ip6-localnet
    ff00::0 ip6-mcastprefix
    ff02::1 ip6-allnodes
    ff02::2 ip6-allrouters
    ale@Asusbarreto:~$ sudo vi /etc/hosts
    [sudo] password for ale:
    ale@Asusbarreto:~$ cat /etc/hosts
    # This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.    conf:
    # [network]
    # generateHosts = false
    127.0.0.1       localhost
    127.0.1.1       Asusbarreto.    Asusbarreto
    10.6.129.150       DSI
    
    # The following lines are desirable for IPv6 capable hosts
    ::1     ip6-localhost ip6-loopback
    fe00::0 ip6-localnet
    ff00::0 ip6-mcastprefix
    ff02::1 ip6-allnodes
    ff02::2 ip6-allrouters
    ```
9. Comprobamos que ya teniamos generada la clave de par publica-privada

    ```
    ale@Asusbarreto:~$ cd .ssh/
    ale@Asusbarreto:~/.ssh$ ls
    id_XXXXX  id_XXXXX.pub  known_hosts  known_hosts.old
    ```

10. Agregamos la clave a la máquina virtual usando como argumento usuario@DSI

    ```
    ale@Asusbarreto:~$ ssh-copy-id usuario@DSI
    /usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/ale/.ssh/id_XXXXXX.pub"
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    usuario@dsi's password:
    
    Number of key(s) added: 1
    
    Now try logging into the machine, with:   "ssh 'usuario@DSI'"
    and check to make sure that only the key(s) you wanted were added.
    ```

    Ahora podemos comprobar que nos permite acceder a la máquina sin necesidad de indicar la contraseña

    ```
    ale@Asusbarreto:~$ ssh usuario@DSI
    Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-52-generic x86_64)
    
     * Documentation:  https://help.ubuntu.com
     * Management:     https://landscape.canonical.com
     * Support:        https://ubuntu.com/pro
    
     System information as of sáb 01 feb 2025 17:58:39 UTC
    
      System load:  0.0               Processes:             189
      Usage of /:   8.3% of 31.81GB   Users logged in:       0
      Memory usage: 2%                IPv4 address for ens3: 10.6.129.150
      Swap usage:   0%
    
     * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
       just raised the bar for easy, resilient and secure K8s cluster deployment.
    
       https://ubuntu.com/engage/secure-kubernetes-at-the-edge
    
    El mantenimiento de seguridad expandido para Applications está desactivado
    
    Se pueden aplicar 193 actualizaciones de forma inmediata.
    Para ver estas actualizaciones adicionales, ejecute: apt list --upgradable
    
    Active ESM Apps para recibir futuras actualizaciones de seguridad adicionales.
    Vea https://ubuntu.com/esm o ejecute «sudo pro status»
    
    
    Last login: Sat Feb  1 17:49:53 2025 from 10.20.51.7
    usuario@DSI:~$
    ```
11. En mi caso, como voy a trabajar con VSCode, no me importa tener que añadir
    la palabra usuario, por tanto omitiremos este paso

12. Generamos una clave público-privada en la máquina virtual
    
    ```
    usuario@DSI:~$ ssh-keygen
    Generating public/private XXXXX key pair.
    Enter file in which to save the key (/home/usuario/.ssh/id_XXXXX):
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /home/usuario/.ssh/id_XXXXX
    Your public key has been saved in /home/usuario/.ssh/id_XXXXX.pub
    The key fingerprint is: ------------
    ...
    usuario@DSI:~$ cd .ssh/
    usuario@DSI:~/.ssh$ ls
    authorized_keys  id_edXXXXX  id_edXXXXX.pub
    ```

## Instalación de Git y Node

### Git

- Instalamos git en nuestra máquina virtual
  
  ```
  usuario@DSI:~$ sudo apt install git
  [sudo] password for usuario:
  Leyendo lista de paquetes... Hecho
  Creando árbol de dependencias... Hecho
  Leyendo la información de estado... Hecho
  git ya está en su versión más reciente (1:2.43.0-1ubuntu7.2).
  fijado git como instalado manualmente.
  0 actualizados, 0 nuevos se instalarán, 0 para eliminar y 188 no actualizados.
  ```

  Como podemos ver, git ya estaba descargado en su ultima versión

- Configuramos git con algunos datos con nuestro nombre y nuestro correo,
  utilizaremos el nombre de nuestra cuenta de github(AlejandroBarretoRamallo)
  y nuestro correo asociaod a la cuenta(alu0101552774@ull.edu.es)

  ```
  usuario@DSI:~$ git config --global user.name "AlejandroBarretoRamallo"
  usuario@DSI:~$ git config --global user.email "alu0101552774@ull.edu.es"
  usuario@DSI:~$ git config --list
  user.name=AlejandroBarretoRamallo
  user.email=alu0101552774@ull.edu.es
  usuario@DSI:~$
  ```

- Cambiamos el prompt para que nos indique la rama actual
  Para ello debemos de descarrgar un archivo, ponerlo en oculto
  añadiendo un . al princpio del nombre del archivo,
  y modificando el .bashrc

  ```
  usuario@DSI:~$ wget https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
  --2025-02-01 18:39:04--  https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
  Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 185.199.109.133, 185.199.111.133, 185.199.110.133, ...
  Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|185.199.109.133|:443... connected.
  HTTP request sent, awaiting response... 200 OK
  Length: 21338 (21K) [text/plain]
  Saving to: ‘git-prompt.sh’
  
  git-prompt.sh                 100%[=================================================>]  20,84K  --.-KB/s    in 0,005s
  
  2025-02-01 18:39:04 (4,18 MB/s) - ‘git-prompt.sh’ saved [21338/21338]
  
  usuario@DSI:~$ mv git-prompt.sh .git-prompt.sh
  usuario@DSI:~$ vi .bashrc
  usuario@DSI:~$ vi .bashrc
  usuario@DSI:~$ exec bash -l
  usuario@DSI:~~ $
  ```

- Ahora copiamos la clave ssh para añadirla al github
  ```
  usuario@DSI:~~ $ cat .ssh/id_XXXXX.pub
  ssh-XXXXX AAAAC3NzaC1lZDI1NTE5AAAAIGm1ss7DRHNmPx1loqjrI2djJL20VOrrjNmpLc7RX9t/ usuario@DSI
  ```

  Comprobamos que nos deja clonar el repositorio compartido
  y nos aparece la rama main

  ```
  usuario@DSI:~~ $ git clone git@github.com:ULL-ESIT-INF-DSI-2425/prct01-iaas-AlejandroBarretoRamallo.git
  Cloning into 'prct01-iaas-AlejandroBarretoRamallo'...
  The authenticity of host 'github.com (140.82.121.4)' can't be established.
  XXXXX key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
  This key is not known by any other names.
  Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
  Warning: Permanently added 'github.com' (XXXXX) to the list of known hosts.
  remote: Enumerating objects: 3, done.
  remote: Counting objects: 100% (3/3), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
  Receiving objects: 100% (3/3), done.
  usuario@DSI:~~ $ cd prct01-iaas-AlejandroBarretoRamallo/
  usuario@DSI:~/prct01-iaas-AlejandroBarretoRamallo~/prct01-iaas-AlejandroBarretoRamallo (main) $
  ```
  
  Efectivamente vemos que al final del prompt podemos ver que estamos en la rama main

### Node.js

- Primero debemos de descargar un archivo, ejecutar bash y comprobar la versión de 
  nvm, que es el gestor de versiones de Node

  ```
  usuario@DSI:~~ $ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  => Downloading nvm from git to '/home/usuario/.nvm'
  => Cloning into '/home/usuario/.nvm'...
  remote: Enumerating objects: 380, done.
  remote: Counting objects: 100% (380/380), done.
  remote: Compressing objects: 100% (323/323), done.
  remote: Total 380 (delta 43), reused 178 (delta 29), pack-reused 0 (from 0)
  Receiving objects: 100% (380/380), 382.75 KiB | 1.93 MiB/s, done.
  Resolving deltas: 100% (43/43), done.
  * (HEAD detached at FETCH_HEAD)
    master
  => Compressing and cleaning up git repository
  
  => Appending nvm source string to /home/usuario/.bashrc
  => Appending bash_completion source string to /home/usuario/.bashrc
  => Close and reopen your terminal to start using nvm or run the following to use it now:
  
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  usuario@DSI:~~ $ exec bash -l
  usuario@DSI:~~ $ nvm --version
  0.39.1
  usuario@DSI:~~ $
  ```

  Podemos comrpobar que s einstaló correctamente ya que tenemos la version 0.39.1

- A continuación, instalamos la version más reciente de Node y del gestor de paquetes
  de Node(npm)

  ```
  usuario@DSI:~~ $ nvm install node
  Downloading and installing node v23.7.0...
  Downloading https://nodejs.org/dist/v23.7.0/node-v23.7.0-linux-x64.tar.xz...
  ################################################################################################################# 100.0%
  Computing checksum with sha256sum
  Checksums matched!
  Now using node v23.7.0 (npm v10.9.2)
  Creating default alias: default -> node (-> v23.7.0)
  usuario@DSI:~~ $ node --version
  v23.7.0
  usuario@DSI:~~ $ npm --version
  10.9.2
  ```

  En efecto podemos comprobar que tenemos la ultima version de Node(23.7.0)
  y de npm(10.9.2)

- Finalmente, si quisieramos cambair de versión
  podemos comprobar las disponibles asi

  ```
  usuario@DSI:~~ $ nvm list
  ->      v23.7.0
  default -> node (-> v23.7.0)
  iojs -> N/A (default)
  unstable -> N/A (default)
  node -> stable (-> v23.7.0) (default)
  stable -> 23.7 (-> v23.7.0) (default)
  lts/* -> lts/jod (-> N/A)
  lts/argon -> v4.9.1 (-> N/A)
  lts/boron -> v6.17.1 (-> N/A)
  lts/carbon -> v8.17.0 (-> N/A)
  lts/dubnium -> v10.24.1 (-> N/A)
  lts/erbium -> v12.22.12 (-> N/A)
  lts/fermium -> v14.21.3 (-> N/A)
  lts/gallium -> v16.20.2 (-> N/A)
  lts/hydrogen -> v18.20.6 (-> N/A)
  lts/iron -> v20.18.2 (-> N/A)
  lts/jod -> v22.13.1 (-> N/A)
  ```

