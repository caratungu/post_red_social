# post_red_social

Este repositoria emula la interacción con comentarios y respuesta a un post de una red social.

Para asegurar su funcionamiento cuando clone el repositorio en su equipo windows, tenga en cuenta:

1. Asegurese de tener instalada la versión 3.12.6 de python en su máquina.
2. Clone el respositorio en su equipo, en la ruta deseada.
3. Inicie Visual Studio Code dentro de la carpeta raiz del proyecto y abra dos terminales.
4. En una de las terminales. Verifique que se encuentra en la carpeta raíz del proyecto, cree y active un entorno virtual:
   1. Si es necesario, use el comando ```pip install virtualenv``` para instalar un paquete que permite la creación de entornos virtuales.
   2. Use el comando ```python -m venv venv``` para crear el entorno virtual **venv**.
   3. Use el comando ```venv/Scripts/activate``` para activar el entorno virtual.
5. Instale las dependencias correspondientes con el comando ```pip install -r requirements.txt```.
6. Ejecute el proyecto con el comando ```python manage.py runserver```.
7. En la otra terminalubiquese en la carpeta Front con el comando ```cd Front```.
8. Instale las dependencias correspondientes con el comando ```npm i```.
9. Inicie el proyecto con el comando ```npm run dev```.