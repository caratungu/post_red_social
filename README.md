# post_red_social

Este repositoria emula la interacción con comentarios y respuesta a un post de una red social.

Para asegurar su funcionamiento cuando clone el repositorio en su equipo windows, tenga en cuenta:

1. Asegurese de tener instalada la versión 3.12.6 de python en su máquina.
2. Asegurese de tener instalado NodeJS en su máquina.
3. Clone el respositorio en su equipo, en la ruta deseada.
4. Inicie Visual Studio Code dentro de la carpeta raiz del proyecto y abra dos terminales.
5. En una de las terminales. Verifique que se encuentra en la carpeta raíz del proyecto, cree y active un entorno virtual:
   1. Si es necesario, use el comando ```pip install virtualenv``` para instalar un paquete que permite la creación de entornos virtuales.
   2. Use el comando ```python -m venv venv``` para crear el entorno virtual **venv**.
   3. Use el comando ```venv/Scripts/activate``` para activar el entorno virtual.
6. Instale las dependencias correspondientes con el comando ```pip install -r requirements.txt```.
7. Ejecute el proyecto con el comando ```python manage.py runserver```.
8. En la otra terminalubiquese en la carpeta Front con el comando ```cd Front```.
9. Instale las dependencias correspondientes con el comando ```npm i```.
10. Inicie el proyecto con el comando ```npm run dev```.


## Comentarios
En el back quedó implementada la posibilidad de crear post, pero aún hace falta la lógica del front para el correcto funcionamiento.