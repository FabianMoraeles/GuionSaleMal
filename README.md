# Asesinato en la Mansión España — Guion interactivo

**Ver en línea:** https://fabianmoraeles.github.io/GuionSaleMal/

Guion completo de la obra (páginas 6 a 38) con las anotaciones a mano del director y botones para disparar la música y los efectos de sonido en el momento exacto.

## Cómo usarlo durante el ensayo o la función

- Cada línea con un cue tiene a la derecha un botón **▶**. Al tocarlo suena el audio; al tocarlo de nuevo se detiene.
- Los **efectos** (chan chan, teléfono, disparos, love effect…) se pueden superponer. Las **canciones** se reemplazan entre sí: si empieza una, se detiene la anterior.
- La barra de abajo muestra lo que está sonando. **■ Detener todo** o la tecla **Esc** apaga todo.
- **Resaltar personaje** atenúa las demás líneas para que cada actor siga solo las suyas.
- **Notas a mano** muestra u oculta las anotaciones del director (en azul, letra manuscrita).
- **Cues y audios** abre la lista de todos los cues del guion; tocar uno lleva directo a esa línea.
- Los cues que todavía no tienen archivo dicen **Sin audio asignado**; desde su menú se puede elegir cualquier audio de la biblioteca (la elección se guarda solo en ese navegador).

## Reparto

| Actor / actriz | Personaje |
|---|---|
| Jonathan | Carlos España (el muerto) |
| Roberto | Tomás Colvet |
| Darío | Pérez, el mayordomo |
| Sandra | Florencia Colvet, prometida de Carlos |
| Max | Cecilio España, hermano de Carlos |
| Cristóbal | Inspector Cardeña |
| Ana | Tramoya; desde la pág. 29 hace de Florencia |
| Teodoro | Sonido ("del CD") |

## Audios (`canciones/`)

| Archivo | Uso |
|---|---|
| `chan-chan.mp3` | Chan chan chaaan (varias veces) |
| `chirrido-puerta.mp3` | Puerta, pág. 6 |
| `timbre.mp3` | Llega el inspector, pág. 12 |
| `love-effect.mp3` | Cada vez que se juntan Cecilio y Florencia, págs. 14–17 |
| `telefono.mp3` | Llamada de los contadores, págs. 26–27 |
| `sables-star-wars.mp3` | Pelea con espadas, pág. 28 |
| `disparos.mp3` | Disparos en la biblioteca, pág. 29 |
| `17-anos.mp3` | Entrada musical, pág. 7 |
| `rosa-de-guadalupe.mp3` | Acusación a Tomás, pág. 17 |
| `do-re-mi.mp3` | "Novicia rebelde", pág. 31 |
| `amargura.mp3`, `cafe-con-ron.mp3` | Cues equivocados, pág. 31 |
| `fly-me-to-the-moon.mp3`, `estoy-saliendo-con-un-chabon.mp3`, `bombon-asesino.mp3` | Inicio, junto al Presentador |

**Faltan:** *Despechá* y *El Padrino* (pág. 31). Al agregarlos a `canciones/` hay que registrarlos en `AUDIO` dentro de `index.html`.

### Hacer que un audio empiece en cierto minuto

No hace falta recortar el archivo. En `index.html`, dentro de `AUDIO`, se agrega `start` (y opcionalmente `end`) en segundos:

```js
cafe: { file: "canciones/cafe-con-ron.mp3", name: "Café con ron", kind: "song", start: 70, end: 85 },
```

Eso hace que suene del 1:10 al 1:25.

## Archivos

- `index.html` — la página interactiva (guion, cues y reproductor en un solo archivo).
- `Guion_Asesinato_en_la_Mansion_Espana.md` — la misma transcripción en texto, con las notas a mano marcadas con ✍️.
- `canciones/` — música y efectos.

## Publicar cambios

La página se publica con GitHub Pages desde la rama `main`. Basta con hacer push:

```bash
git push origin master:main
```

En unos minutos se actualiza https://fabianmoraeles.github.io/GuionSaleMal/
