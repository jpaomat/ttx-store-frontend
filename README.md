# Techtronix Store App

_Esta App se encarga mostrar los diferentes productos tecnológicos que se ofrecen en la tienda online Techtronix, y de esta ofrecer a los clientes la mejor experiencia a la hora de realizar sus compras._

---
## Empecemos 🚀

_Se deben ejecutar los siguientes comandos para obtener una copia local del proyecto, para desarrollo y pruebas._

### Instalación 🔧

_Inicialmente se debe clonar el proyecto e ingresar al mismo usando los comandos:_
```
git clone https://github.com/jpaomat/techtronix-app.git
cd techtronix-app
```
_Adicional debe ejecutar el comando `npm install` para instalar todas las dependencias necesarias para ejecutar el proyecto localmente._
```
npm install
```

### Scripts Disponibles ⌨️

_En el directorio del proyecto, puede ejecutar los siguientes comandos para correr el proyecto localmente, las pruebas unitarias y el linter:_

#### Ejecutar el App en modo desarrollo ⚙️

```
npm start
```
_Este comando por default ejecuta la App en el navegador en el puerto 3000 [http://localhost:3000](http://localhost:3000)._

#### Ejecutar test unitarios ⚙️
_Para garantizar que cada vez que se haga un nuevo cambio en el proyecto y se quiera agregar el `commit` correspondiente, se implementó `husky` con el hook pre-commit que se encarga de ejecutar automaticamente los tests antes de crear el commit, y en caso de presentarse algún error en las pruebas no permite crear commit. Para ejecutar los tests unitarios manualmente use el comando:_
```
npm run test
```

#### Ejecutar Linter ⚙️

_Para analizar la calidad del código y ver si existe un problema de sintaxis ejecute:_
```
npm run lint
```
_Este comando tambien se ejecuta automaticamente en el hook `pre-commit` de `husky`._

### Despliegue 📦

#### Creación del build de producción ⚙️
_Se crea el hook `pre-push` de `husky` para validar que se crear correctamente el `build` del proyecto antes de subir los cambios al repositorio y que de esta manera no se presenten problemas a la hora del despliegue_

```
npm run build
```
_Crea la aplicación para producción en la carpeta `build`.<br />_
_Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento._