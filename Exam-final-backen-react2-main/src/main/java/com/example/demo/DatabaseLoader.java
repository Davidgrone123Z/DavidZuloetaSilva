package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	 
	private final ProductoRepository repositoryP;
	private final VentaRepository repositoryV;
	private final VentadetalleRepository repositoryVD;

	@Autowired
	public DatabaseLoader(
		
		ProductoRepository repositoryP,
		VentaRepository repositoryV,
		VentadetalleRepository repositoryVD) {
		
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
		this.repositoryVD = repositoryVD;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Producto huevo = new Producto("Huevo", 6.20f);
		Producto pan = new Producto("Pan", 2.00f);
		Producto arroz = new Producto("arroz", 5.20f);
		Producto leche = new Producto("Leche", 4.50f);
		Producto lenteja = new Producto("Lenteja", 5.50f);

		
		this.repositoryP.save(huevo);
		this.repositoryP.save(pan);
		this.repositoryP.save(arroz);
		this.repositoryP.save(leche);
		this.repositoryP.save(lenteja);

		Venta david = new Venta("Ventas David");
		this.repositoryV.save(david);

		
		this.repositoryVD.save(new Ventadetalle(david, arroz));
		this.repositoryVD.save(new Ventadetalle(david, leche));
		this.repositoryVD.save(new Ventadetalle(david, lenteja));
	}
}