# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Qué vas a encontrar en el protecto](#3-Qué-vas-a-encontrar-en-este-proyecto)

***

## 1. Preámbulo

Cifrar significa ocultar el contenido de un mensaje a simple vista, de manera
que sólo las partes autorizadas pueden descifrar un texto cifrado.
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Este proyecto está dirigido a quienes utilicen Wifi en sus casas y que quieran compartir sólo a personas de su confianza, con la seguridad de que no vayan a robar sus datos, a través de la conexión al Wifi y para que tú decidas cuántas personas pueden estar conectadas y así no ralentizar la velocidad de tu internet.
## 2. Resumen del proyecto

En este proyecto de Laboratoria creamos una aplicación web que para que el usuario
pueda cifrar y descifrar su clave Wifi, indicando un desplazamiento
específico de caracteres a través de un rango que hará que las letras se desplacen según sea el valor de ésta. 



### Los objetivos generales de este proyecto son los siguientes

* Conseguir Encriptar tu clave de Wifi a través del Cifrado Cesar
* Desencriptar tu clave de Wifi para cuando necesites usarla y compartirla con alguien




## 3. Qué vas a encontrar en este proyecto

* **Cifrar un mensaje**
  - Una interfaz donde se permite insertar la clave que deseas para tu Wifi.  
  - Elegir el número de desplazamiento indicando cuántas posiciones deseas que el cifrado desplace cada caracter en el alfabeto.
  - Ver el resultado de tu clave cifrada.


* **Descifrar un mensaje**
  - Insertar la clave ya cifrada de tu Wifi
  - Elegir un numero desplazamiento (_offset_, que corresponda al que usamos
    para cifrar) indicando cuántas posiciones quieres que
    el cifrado desplace cada caracter en el alfabeto. 
  - Ver el resultado de tu clave descifrada.

