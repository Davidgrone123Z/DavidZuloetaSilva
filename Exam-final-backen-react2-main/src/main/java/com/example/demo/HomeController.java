package com.example.demo;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {


	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/ventas/{id}/formacion")
	public @ResponseBody List<Map <String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT ventadetalle.id as ID, producto.nombre as PRODUCTO, producto.precio as PRECIO FROM ventadetalle JOIN producto ON ventadetalle.id_producto=producto.id  WHERE ventadetalle.id_venta = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;


	}
}