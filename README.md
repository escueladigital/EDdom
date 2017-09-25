# EDdom (Experimental)

Librería minimalista para manipular el DOM fácilmente (basada en `jQuery` y `Zepto.js`).


## Prueba EDdom

Clona este repositorio o instala EDdom desde npm:

```bash
$ npm install escueladigital/EDdom
```

Entra en la carpeta `play` del proyecto y empieza a jugar con EDdom dentro del archivo `index.html`.

Puedes comenzar seleccionando elementos:

```js
const $links = $('a')
```

Y luego manipulando sus eventos:

```js
$links.on('click', e => {
  console.log('Click detectado desde EDdom :)')
})
```

## Métodos implementados y por implementar

- [x] **on()**
- [x] **off()**
- [x] **addClass()**
- [x] **toggleClass()**
- [x] **removeClass()**
- [x] **wrap()**
- [x] **hasClass()**
- [x] **attr()**
- [x] **append()**
- [x] **prepend()**
- [ ] **children()**
- [ ] **parent()**
