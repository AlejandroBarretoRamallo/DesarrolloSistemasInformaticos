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
        Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-52-generic x86_64)

         * Documentation:  https://help.ubuntu.com
         * Management:     https://landscape.canonical.com
         * Support:        https://ubuntu.com/pro

         System information as of sáb 01 feb 2025 17:13:21 UTC

          System load:  0.0               Processes:             193
          Usage of /:   8.3% of 31.81GB   Users logged in:       1
          Memory usage: 3%                IPv4 address for ens3: 10.6.129.150
          Swap usage:   0%

         * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
           just raised the bar for easy, resilient and secure K8s cluster deployment.

           https://ubuntu.com/engage/secure-kubernetes-at-the-edge

        El mantenimiento de seguridad expandido para Applications está desactivado

        Se pueden aplicar 193 actualizaciones de forma inmediata.
        Para ver estas actualizaciones adicionales, ejecute: apt list --upgradable

        Active ESM Apps para recibir futuras actualizaciones de seguridad adicionales.
        Vea https://ubuntu.com/esm o ejecute «sudo pro status»


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
    /usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/ale/.ssh/id_ed25519.pub"
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
11. 



