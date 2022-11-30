-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2022 a las 02:28:37
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fs_juzgado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acusado`
--

CREATE TABLE `acusado` (
  `id_acusado` int(11) NOT NULL,
  `nombre_acusado` varchar(255) NOT NULL,
  `foto_acusado` varchar(255) NOT NULL,
  `edad` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `acusado`
--

INSERT INTO `acusado` (`id_acusado`, `nombre_acusado`, `foto_acusado`, `edad`) VALUES
(123, 'Dario, Alias \"Donald trump\"', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl03292D8Kw18UZvdFSwfzLwaWnbR9CrxqSA&usqp=CAU', 78),
(231, 'Mauro, alias \"Malone\"', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr0OMgvawXANfOtxdJPUFZXfNpaNz46ZcyA&usqp=CAU', 50),
(8568, 'Marlon, Alias \"El miura\"', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSb-09OEUwGMrESiyLszMa0eGZv77FDV2nqQ&usqp=CAU', 200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caso`
--

CREATE TABLE `caso` (
  `id_caso` int(11) NOT NULL,
  `id_juez` int(50) NOT NULL,
  `id_acusado` int(50) NOT NULL,
  `nombre_caso` varchar(255) NOT NULL,
  `veredicto` tinyint(4) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `caso`
--

INSERT INTO `caso` (`id_caso`, `id_juez`, `id_acusado`, `nombre_caso`, `veredicto`, `fecha`) VALUES
(1, 54656, 123, '\"Peluca hecha en china\" Usada en rueda de prensa', 0, '2022-11-28 16:55:46'),
(2, 574534, 8568, '\"Insultos personales a firgura de autoridad racatateo\" al coordinador', 0, '2022-11-29 07:33:01'),
(3, 574534, 8568, '\"Vino en mocho al auditorio\" de la UTS', 0, '2022-11-28 16:55:46'),
(4, 54656, 231, '\"Dijo CONGRATULATIONS !!\" cuando fallecio un individuo', 0, '2022-11-28 16:57:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juez`
--

CREATE TABLE `juez` (
  `id_juez` int(11) NOT NULL,
  `nombre_juez` varchar(255) NOT NULL,
  `id_juzgado` int(11) NOT NULL,
  `foto_Juez` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juez`
--

INSERT INTO `juez` (`id_juez`, `nombre_juez`, `id_juzgado`, `foto_Juez`) VALUES
(5657, 'Keanu revees', 1, 'https://i.guim.co.uk/img/media/20b1ed84a85590f6ef2ef8ec4e083ededcbcb75a/445_367_3662_4578/master/3662.jpg?width=465&quality=85&dpr=1&s=none'),
(54656, 'Chuchito', 2, 'https://images.theconversation.com/files/346421/original/file-20200708-3995-5ulgxa.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip'),
(574534, 'Omar lengerke', 3, 'https://www.uts.edu.co/sitio/wp-content/uploads/2020/04/rector-noticia.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juzgado`
--

CREATE TABLE `juzgado` (
  `id_juzgado` int(11) NOT NULL,
  `nombre_juzgado` varchar(50) NOT NULL,
  `ciudad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juzgado`
--

INSERT INTO `juzgado` (`id_juzgado`, `nombre_juzgado`, `ciudad`) VALUES
(1, 'Manhatan', 'Manhatan'),
(2, 'El Cielo', 'Celestial'),
(3, 'UTS', 'Real De Minas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id_prueba` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `veracidad` varchar(255) NOT NULL,
  `foto_prueba` varchar(255) NOT NULL,
  `id_caso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id_prueba`, `descripcion`, `veracidad`, `foto_prueba`, `id_caso`) VALUES
(1, 'Se ve claramente cuando el individuo bailar y grita \"racatateo\"', 'Las fotos muestran al acusado cometiendo el crimen', 'https://elambito.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-07-at-9.51.49-AM.jpeg', 2),
(2, 'loremp ipsum is simply dummy text,loremp ipsum is simply dummy text,loremp ipsum is simply dummy text', 'loremp ipsum is simply dummy text', 'https://thecancunpost.com/wp-content/uploads/sites/9/2021/03/investigacion-de-la-escena-del-crimen-arrojo-una-jeringa-en-el-suelo.jpg', 2),
(3, 'hola', 'hola', 'https://thecancunpost.com/wp-content/uploads/sites/9/2021/03/investigacion-de-la-escena-del-crimen-arrojo-una-jeringa-en-el-suelo.jpg', 2),
(5, 'hola', 'hola', 'gola', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acusado`
--
ALTER TABLE `acusado`
  ADD PRIMARY KEY (`id_acusado`),
  ADD UNIQUE KEY `id_acusado` (`id_acusado`);

--
-- Indices de la tabla `caso`
--
ALTER TABLE `caso`
  ADD PRIMARY KEY (`id_caso`),
  ADD UNIQUE KEY `id_caso` (`id_caso`),
  ADD KEY `id_juez` (`id_juez`),
  ADD KEY `id_acusado` (`id_acusado`);

--
-- Indices de la tabla `juez`
--
ALTER TABLE `juez`
  ADD PRIMARY KEY (`id_juez`),
  ADD UNIQUE KEY `id_juez` (`id_juez`),
  ADD UNIQUE KEY `id_juzgado` (`id_juzgado`),
  ADD UNIQUE KEY `id_juez_2` (`id_juez`);

--
-- Indices de la tabla `juzgado`
--
ALTER TABLE `juzgado`
  ADD PRIMARY KEY (`id_juzgado`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id_prueba`),
  ADD KEY `id_caso` (`id_caso`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caso`
--
ALTER TABLE `caso`
  MODIFY `id_caso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `juzgado`
--
ALTER TABLE `juzgado`
  MODIFY `id_juzgado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `prueba`
--
ALTER TABLE `prueba`
  MODIFY `id_prueba` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `caso`
--
ALTER TABLE `caso`
  ADD CONSTRAINT `caso_ibfk_1` FOREIGN KEY (`id_juez`) REFERENCES `juez` (`id_juez`) ON DELETE CASCADE,
  ADD CONSTRAINT `caso_ibfk_2` FOREIGN KEY (`id_acusado`) REFERENCES `acusado` (`id_acusado`) ON DELETE CASCADE;

--
-- Filtros para la tabla `juez`
--
ALTER TABLE `juez`
  ADD CONSTRAINT `juez_ibfk_1` FOREIGN KEY (`id_juzgado`) REFERENCES `juzgado` (`id_juzgado`) ON DELETE CASCADE;

--
-- Filtros para la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD CONSTRAINT `prueba_ibfk_1` FOREIGN KEY (`id_caso`) REFERENCES `caso` (`id_caso`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
