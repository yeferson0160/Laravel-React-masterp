-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2018 a las 22:58:45
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: parqueadero
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla empresa
--

CREATE TABLE empresa (
  cempre int(10) UNSIGNED NOT NULL,
  nempre varchar(45) NOT NULL,
  nit varchar(45) NOT NULL,
  direccion varchar(45) NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla migrations
--

CREATE TABLE migrations (
  id int(10) UNSIGNED NOT NULL,
  migration varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  batch int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla movimientos
--

CREATE TABLE movimientos (
  cmovi int(10) UNSIGNED NOT NULL,
  fecha_entrada datetime NOT NULL,
  fecha_salidal datetime DEFAULT NULL,
  tiempo varchar(45) DEFAULT NULL,
  valtotal int(11) DEFAULT NULL,
  placa varchar(20) NOT NULL,
  ifsalida tinyint(4) NOT NULL,
  cvehi int(10) UNSIGNED NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla movimientos
--

INSERT INTO movimientos (cmovi, fecha_entrada, fecha_salidal, tiempo, valtotal, placa, ifsalida, cvehi, created_at, updated_at) VALUES
(1, '2018-05-07 00:00:00', NULL, NULL, NULL, 'XYZ123', 0, 1, NULL, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla parametros
--

CREATE TABLE parametros (
  id int(11) NOT NULL,
  cparam varchar(3) NOT NULL,
  detalle text NOT NULL,
  valtext text,
  valint int(11) DEFAULT NULL,
  valbool tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla tarifas
--

CREATE TABLE tarifas (
  ctarifas int(10) UNSIGNED NOT NULL,
  nomtarifa varchar(45) NOT NULL,
  valhora int(11) NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla tarifas
--

INSERT INTO tarifas (ctarifas, nomtarifa, valhora, created_at, updated_at) VALUES
(1, 'Tarifa Carro', 2000, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla users
--

CREATE TABLE users (
  id int(10) UNSIGNED NOT NULL,
  name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  email varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  password varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  remember_token varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla vehiculos
--

CREATE TABLE vehiculos (
  cvehi int(10) UNSIGNED NOT NULL,
  nvehi varchar(45) NOT NULL,
  ctarifas int(10) UNSIGNED NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla vehiculos
--

INSERT INTO vehiculos (cvehi, nvehi, ctarifas, created_at, updated_at) VALUES
(1, 'Carro', 1, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla empresa
--
ALTER TABLE empresa
  ADD PRIMARY KEY (cempre);

--
-- Indices de la tabla migrations
--
ALTER TABLE migrations
  ADD PRIMARY KEY (id);

--
-- Indices de la tabla movimientos
--
ALTER TABLE movimientos
  ADD PRIMARY KEY (cmovi),
  ADD KEY fk_1 (cvehi);

--
-- Indices de la tabla parametros
--
ALTER TABLE parametros
  ADD PRIMARY KEY (id);

--
-- Indices de la tabla tarifas
--
ALTER TABLE tarifas
  ADD PRIMARY KEY (ctarifas);

--
-- Indices de la tabla users
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- Indices de la tabla vehiculos
--
ALTER TABLE vehiculos
  ADD PRIMARY KEY (cvehi),
  ADD KEY fk_2 (ctarifas);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla empresa
--
ALTER TABLE empresa
  MODIFY cempre int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla migrations
--
ALTER TABLE migrations
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla movimientos
--
ALTER TABLE movimientos
  MODIFY cmovi int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla tarifas
--
ALTER TABLE tarifas
  MODIFY ctarifas int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla users
--
ALTER TABLE users
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla vehiculos
--
ALTER TABLE vehiculos
  MODIFY cvehi int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla movimientos
--
ALTER TABLE movimientos
  ADD CONSTRAINT fk_1 FOREIGN KEY (cvehi) REFERENCES vehiculos (cvehi);

--
-- Filtros para la tabla vehiculos
--
ALTER TABLE vehiculos
  ADD CONSTRAINT fk_2 FOREIGN KEY (ctarifas) REFERENCES tarifas (ctarifas);
COMMIT;