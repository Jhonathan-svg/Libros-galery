// Para agregar un libro: copia un bloque {...}, cambia los datos y sube su carpeta a /libros/
// Cada libro necesita: portada.jpg y libro.pdf dentro de su carpeta.
const LIBROS = [
  {
    id: "el-guardian",
    titulo: "El guardián que se ganó mi corazón",
    autor: "Tu nombre aquí",
    genero: "Novela romántica",
    anio: 2026,
    portada: "libros/el-guardian/portada.jpg",
    pdf: "libros/el-guardian/libro.pdf",
    sinopsis: "James no tiene estudios, ni dinero, ni apellido. Tiene las manos de quien aprendió a defenderse solo y una promesa que le hizo a su madre antes de que muriera. Una noche de lluvia salva a Valentina de un asalto, y ella, hija de una familia acomodada y sola entre muros altos, publica un anuncio buscando guardaespaldas."
  }
  // , { id: "otro-libro", titulo: "…", autor: "…", genero: "Cuento", anio: 2026,
  //     portada: "libros/otro-libro/portada.jpg", pdf: "libros/otro-libro/libro.pdf", sinopsis: "…" }
];
