# 🛍️ Aura Design E-commerce

## 📌 Descripción
Este proyecto corresponde a la **primera pre-entrega** de la materia **React JS** en **CoderHouse**, dentro de la carrera de **Desarrollador Fullstack**.

Se trata de una aplicación web básica de e-commerce para **Aura Design**, un emprendimiento que crea y vende pasacalles, remeras y banderas pintadas a mano. El proyecto implementa los primeros componentes de React, incluyendo:

- Una barra de navegación
- Un widget de carrito
- Un contenedor para el catálogo de productos

Todo utilizando **props** para personalizar mensajes y sentar las bases de una homepage funcional.

---

## 🛠️ Tecnologías Utilizadas
- **React**: Librería principal para construir la interfaz de usuario
- **JavaScript (ES6+)**
- **HTML/CSS** (con posibilidad de usar Bootstrap)
- **Node.js y npm**
- **Git & GitHub**

---

## 🚀 Instalación y Ejecución

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/baezajessica/mi-landingpage.git
   cd mi-landingpage

src/
├── components/
│   ├── CartWidget.js          # Ícono del carrito + contador
│   ├── ItemListContainer.js   # Mensaje de bienvenida (usa props)
│   └── NavBar.js              # Logo, enlaces y CartWidget
├── App.js                     # Renderiza NavBar e ItemListContainer
├── index.js                   # Punto de entrada
└── App.css                    # Estilos 

Funcionalidades
NavBar : Barra de navegación con el logo de "Aura Design", enlaces a secciones (Inicio, Productos, Contacto) y el widget del carrito.
CartWidget : Muestra un ícono de carrito y un contador de artículos (inicialmente 0). Se renderiza dentro de NavBar.
ItemListContainer : Contenedor que recibe un prop greetingpara mostrar un mensaje de bienvenida personalizado. En el futuro, aquí se mostrará el catálogo de productos.
Props : Se utiliza un prop en ItemListContainer para enviar una cadena con el mensaje de bienvenida, cumpliendo con los requisitos de la consigna.

Autor
Nombre : Jessica Baeza
Curso : React JS - CoderHouse
Carrera : Desarrollador Fullstack
Contacto : baezajessicajohana@gmail.com