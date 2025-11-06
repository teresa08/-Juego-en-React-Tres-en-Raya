# 🇩🇴 Tres en Raya: Taino vs Caribe

## Nombre del Desarrollador
**Maria Teresa Soriano Tavarez**
**100564584**

<img width="2884" height="1809" alt="Screenshot 2025-11-04 081510" src="https://github.com/user-attachments/assets/c4575983-0174-4486-a21f-d936ccd85a97" />
<img width="2014" height="1668" alt="Screenshot 2025-11-04 081609" src="https://github.com/user-attachments/assets/8f303826-2cf3-4186-9d9a-65cf920ef8ad" />

## 📜 Breve Descripción del Juego
"Taino vs Caribe" es una versión personalizada del clásico juego "Tres en Raya" (Tic-Tac-Toe), desarrollado con **React.js**. El juego permite a dos jugadores alternar turnos, detecta automáticamente al ganador o el empate, y ofrece la opción de reiniciar la partida.

**Personalización Dominicana:**
* **Jugadores:** Renombrados como **'T' (Cacique Taino)** y **'C' (Capitán Caribe)**.
* **Estilo:** Colores inspirados en la bandera dominicana (Azul, Rojo y Blanco).
* **Mensajes:** Uso de frases y términos locales en los mensajes de estado y victoria.
* **Persistencia:** El estado del juego se guarda en el navegador usando `localStorage`, permitiendo reanudar la partida donde se dejó.

## 🎓 Qué Aprendí
* **Manejo del Estado con `useState`:** Implementación del estado para el tablero (`squares`) y el turno (`isXNext`), esencial para la interactividad.
* **Turnos Alternados:** Lógica para cambiar de 'T' a 'C' después de cada movimiento.
* **Detección de Ganador:** Creación de la función `calculateWinner` para verificar las 8 combinaciones ganadoras.
* **Efectos Secundarios con `useEffect` (Opcional):** Utilización para la sincronización del estado del juego con el `localStorage` del navegador.
* **Componentización en React:** Dividir la UI en componentes reutilizables (`App`, `Board`, `Square`).

## ⚠️ Qué Parte Fue Más Difícil

La parte más desafiante fue **la función `calculateWinner` y la lógica de detección de empate**. Asegurar que la función cubriera de manera eficiente todas las posibles líneas ganadoras (filas, columnas, diagonales) y manejar el caso de un tablero lleno sin ganador requirió un pensamiento lógico y una revisión cuidadosa de los índices del array. También fue un reto **integrar y sincronizar correctamente `localStorage`** con `useState` para que el juego se cargara correctamente al refrescar la página.
