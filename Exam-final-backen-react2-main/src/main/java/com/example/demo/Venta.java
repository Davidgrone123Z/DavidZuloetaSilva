package com.example.demo;

import java.util.Objects;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Venta {

	private @Id @GeneratedValue Long id;
	private String nombre;

	private Venta() {}

	public Venta(String nombre) {
		this.nombre = nombre;
	}



	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Venta venta = (Venta) o;
		return Objects.equals(id, venta.id) &&
			Objects.equals(nombre, venta.nombre);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre);
	}


	@Override
	public String toString() {
		return "Venta{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
