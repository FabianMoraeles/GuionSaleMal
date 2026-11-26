# Asesinato en la Mansión España — Guion interactivo

**Ver en línea:** https://fabianmoraeles.github.io/GuionSaleMal/

Guion completo de la obra (páginas 6 a 46) con las anotaciones a mano del director y botones para disparar la música y los efectos de sonido en el momento exacto.

## Cómo usarlo durante el ensayo o la función

- Cada línea con un cue tiene a la derecha un botón **▶**. Al tocarlo suena el audio; al tocarlo de nuevo se detiene.
- Los **efectos** (chan chan, teléfono, disparos, love effect…) se pueden superponer. Las **canciones** se reemplazan entre sí: si empieza una, se detiene la anterior.
- **Al abrir la página se descargan todos los audios** (unos 120 MB) y **quedan guardados en el dispositivo**. Abajo se ve el avance; cuando dice **✓ audios listos · guardados en este dispositivo**, cada botón suena al instante.
- Desde la segunda vez, la página y los audios cargan del dispositivo en un par de segundos, **aunque no haya internet**. Recomendado: abrirla una vez con wifi antes del ensayo general, en el mismo navegador y aparato que se usará en la función.
- Si se reemplaza un audio en GitHub, la copia guardada se actualiza sola en la siguiente visita con internet.
- Mientras la página está abierta, la pantalla no se apaga sola (para que el navegador no la suspenda).
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
| `chan-chan.mp3` | Chan chan chaaan (varias veces, también en "Tomás Colvet", pág. 25) |
| `chirrido-puerta.mp3` | Puerta, pág. 6 |
| `timbre.mp3` | Llega el inspector, pág. 12; llega la policía, pág. 43 — empieza en 0:01.0 |
| `love-effect.mp3` | Cada vez que se juntan Cecilio y Florencia, págs. 14–17 — empieza en 0:05.5 |
| `telefono.mp3` | Llamada de los contadores, págs. 26–27 |
| `sables-star-wars.mp3` | Pelea con espadas, pág. 28 |
| `disparos.mp3` | Disparos en la biblioteca, pág. 29 (luego blackout e intermedio) |
| `disparo.mp3` | El arma le explota a Roberto en la mano, pág. 45 — empieza en 0:03.25 |
| `17-anos.mp3` | Entrada musical, pág. 7 |
| `rosa-de-guadalupe.mp3` | Acusación a Tomás, pág. 17 — empieza en 0:01.8 |
| `do-re-mi.mp3` | Inicio (Presentador) y "Novicia rebelde", pág. 31 — empieza en 4:39 |
| `amargura.mp3`, `cafe-con-ron.mp3` | Cues equivocados, pág. 31 |
| `quinta-sinfonia-beethoven.mp3` | Entrada musical cuando Carlos aparece vivo, pág. 39 |
| `fly-me-to-the-moon.mp3`, `estoy-saliendo-con-un-chabon.mp3`, `bombon-asesino.mp3` | Inicio, junto al Presentador; *Bombón asesino* también al final |
| `primera-llamada.mp3`, `segunda-llamada.mp3` | Al inicio, antes del mix (cortadas de `Intermedio.ogg`: 0:00.3–0:15.3 y 0:16.8–0:22.5) |
| `intermedio.mp3`, `intermedio-segunda-llamada.mp3`, `intermedio-tercera-llamada.mp3` | Intermedio, después de "¡Disparos en la biblioteca!", pág. 29 (0:26.3–0:44.3, 0:45.7–0:51.0, 0:55.5–final) |
| `teatro-mix.mp3` | Mix de entrada (56 min), al inicio de la página — recodificado a 128 kbps para que pese menos de 100 MB |
| `despecha-rosalia.mp3`, `el-padrino.mp3` | Ana "¡Sí, yo!" y "¿Cecilio está muerto?", pág. 31 — El Padrino empieza en 0:02.6 |
| `dont-cry-for-me-argentina.mp3` | "Yuls interrumpe", págs. 23 y 38 — empieza en 2:47 (estribillo) |

Para agregar un audio nuevo: ponerlo en `canciones/` y registrarlo en `AUDIO` dentro de `index.html`.

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
- `sw.js` — guarda la página para abrirla sin internet.

## Publicar cambios

La página se publica con GitHub Pages desde la rama `main`. Basta con hacer push:

```bash
git push origin main
```

En unos minutos se actualiza https://fabianmoraeles.github.io/GuionSaleMal/
