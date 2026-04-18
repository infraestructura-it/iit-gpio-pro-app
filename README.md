# IIT GPIO PRO — App móvil PWA

Aplicación móvil Progressive Web App para control del firmware **ESP32 GPIO PRO** (ESP32-S3).  
Funciona directamente desde el navegador del celular sin instalación.

---

## Características

| Módulo | Estado |
|--------|--------|
| Login con token y sesión persistente | ✅ |
| Control GPIO — toggle, PWM slider, read digital/ADC | ✅ |
| WebSocket tiempo real (PIN_CHANGE automático) | ✅ |
| Scheduler — crear, editar, eliminar eventos | ✅ |
| Historial de eventos | ✅ |
| Panel Admin — usuarios, OTA | ✅ |
| Instalable (Add to Home Screen) | ✅ |
| Conexión dual WiFi local + Relay externo | 🔜 v2 |

---

## Uso

### Opción A — GitHub Pages (recomendado)
```
https://infraestructura-it.github.io/iit-gpio-pro-app/
```

### Opción B — Local
Abrir `index.html` directamente en el navegador del celular desde la misma red WiFi.

### Instalación en Android
1. Abrir la URL en Chrome
2. Menú → **Agregar a pantalla de inicio**
3. La app queda instalada como app nativa

---

## Conexión

Al abrir la app:
1. Ingresar la **IP del ESP32** (ej. `192.168.1.20`)
2. Puerto: `80` (default)
3. Usuario y contraseña configurados en el provisioning
4. Presionar **CONECTAR**

La sesión queda guardada — no requiere login en cada apertura.

---

## Repositorio del firmware

[infraestructura-it/esp32-gpio-pro](https://github.com/infraestructura-it/esp32-gpio-pro)

---

## Autor

**Jairo Sepúlveda** — Director General IIT (Infraestructura-IT)  
Bogotá, Colombia · 2026
