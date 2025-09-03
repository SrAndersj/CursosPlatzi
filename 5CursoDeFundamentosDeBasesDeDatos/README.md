# Instalación y Configuración de MySQL

## Actualización del Sistema

```bash
sudo apt update
sudo apt upgrade
```

## Instalación de MySQL Server

```bash
sudo apt install mysql-server
```

## Configuración de Seguridad

Ejecuta el siguiente comando y sigue las instrucciones:

```bash
sudo mysql_secure_installation
```

Durante la configuración:
- Establece una contraseña segura para el usuario root
- Acepta las opciones de seguridad sugeridas

## Conexión al Cliente MySQL

Para conectarte al cliente de MySQL, usa:

```bash
sudo mysql -u root -p
```

Ingresa la contraseña cuando se te solicite.
