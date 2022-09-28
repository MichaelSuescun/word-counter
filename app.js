/**
 * Contador de frecuencia de palabras
 * para la limpieza se ha usado el latin basico unicode: https://unicode-table.com/es/blocks/basic-latin/
 * pasos:
 *  + Limpiar espacios en blanco al comienzo
 *  + Limpiar espacios en blanco al final
 *  + Limpiar espacios en blanco dentro del texto mayor o igual a 2
 *  + Limpieza de simbolos y signos de puntuación
 */

let text = '    Saber qué  palabras  son  las más frecuentes de un texto resulta interesante para diferentes fines. Podemos estar investigando una obra literaria y querer saber qué unidades léxicas usa más frecuentemente el autor. O podremos estar analizando lingüísticamente una entrevista o una grabación y querer saber qué palabras se han repetido más. ¿Qué palabras repite más un político en un discurso importante? ¿Cuáles son los temas más repetidos de un tipo concreto de poesía? ¿Qué país se menciona más veces en un texto de historia? En fin, consideramos que los análisis estadísticos del léxico resultan muy interesantes.     '

// /^\s+/: Limpia espacios en blanco al comienzo
// /\s+$/: Limpia espacios en blanco al final
// /\s{2,}/: Limpia espacios en blanco >= 2
text = text.replace(/\s+$|^\s+/g, '')
text = text.replace(/\s{2,}/g, ' ')

// Descomposición de las regex:
// \u0021-\u002F: ! " # $ % & ' ( ) * + , - . /
// \u0030-\u0039: 0 1 2 3 4 5 6 7 8 9
// \u003A-\u0040: : ; < = > ? @
// \u005B-\u0060: [ \ ] ^ _ `
// \u007B-\u007E: { | } ~
// \u00BF: ¿
const regex = /[\u0021-\u002F\u0030-\u0039\u003A-\u0040\u005B-\u0060\u007B-\u007E]|\u00BF/ug
text = text.replace(regex, '')

text = text.toLowerCase()

const words = text.split(' ')
const wordsCount = {}

for (const word of words) {
  if (wordsCount[word]) {
    wordsCount[word] += 1 
  } else {
    wordsCount[word] = 1 
  }
}

console.table(wordsCount)