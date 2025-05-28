# Uno de los cuatro pilares de la programación orientada a objetos

---

## Abstracción

- Dejar de usar objetos complejos y mostrar solo lo esencial
- Crear la clase o molde o prototipo para después crear instancias
- Clase student: crear instancia miguelito, ana, juan, etc.

## encapsulamiento

### ¿Qué es el encapsulamiento?

El encapsulamiento es uno de los pilares fundamentales de la programación orientada a objetos. Se trata de:
- Proteger y organizar los datos y métodos de los objetos
- Limitar el acceso a sus atributos y propiedades
- Actuar como un guardián que asegura que la interacción con los objetos se realice de manera controlada y segura

---
### ¿Por qué es importante?

- **Protección de datos**
  - Protegemos los datos sensibles de cambios no autorizados
  - Mantenemos la integridad de los datos

- **Prevención de errores**
  - Verificamos las operaciones realizadas en un objeto
  - Aseguramos que se efectúen correctamente

- **Modularidad**
  - Hace que las clases sean más modulares
  - Las hace más fáciles de gestionar

- **Facilita el mantenimiento**
  - Los cambios internos no afectan las interacciones externas
  - Mejora la escalabilidad

---

### ¿Cómo se implementa en JavaScript?

En JavaScript, realmente no existen atributos y métodos completamente privados. Sin embargo, hay ciertas técnicas que podemos utilizar para aproximarnos al encapsulamiento:
- Getters y setters
- Closures para proteger datos privados
- Modificadores de acceso (public, private, protected)

Son métodos especiales que permiten controlar el acceso a los atributos de un objeto. Aunque todos los atributos en JavaScript son públicos, los getters y setters permiten manipular cómo se accede y se modifica un atributo, añadiendo una capa de control.
