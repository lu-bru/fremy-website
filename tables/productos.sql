-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 10:49 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fremy_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(5) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ingredientes` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `categoria` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `img` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `ingredientes`, `precio`, `categoria`, `img`) VALUES
(1, 'Dona de limón', 'Dona de vainilla bañada en glaseado de limón y grana, con relleno de pasta de limón.', 'harina, azúcar, manteca, extracto de vainilla, jugo de limón.', 50, 'Donas', 'dona-limon-sm.jpg'),
(2, 'Dona de arándanos', 'Dona de vainilla bañada en glaseado de frutilla y chocolate blanco, con arándanos.', 'harina, azúcar, manteca, extracto de vainilla, esencia de frutilla, chocolate blanco, arándanos.', 55, 'Donas', 'dona-arandanos-sm.jpg'),
(3, 'Dona de nuez moscada', 'Dona de vainilla bañada en glaseado de frutilla, con nuez moscada.', 'harina, azúcar, manteca, extracto de vainilla, esencia de frutilla, nuez.', 50, 'Donas', 'dona-nuez-sm.jpg'),
(4, 'Dona azucarada', 'Dona de vainilla bañada en glaseado de frutilla, con lluvia de azúcar.', 'harina, azúcar, manteca, extracto de vainilla, esencia de frutilla.', 50, 'Donas', 'dona-azucarada-sm.jpg'),
(5, 'Dona de crema rellena', 'Dona de vainilla bañada en glaseado de frutilla y azúcar, con relleno de crema pastelera.', 'harina, azúcar, manteca, extracto de vainilla, esencia de frutilla, leche, huevos.', 50, 'Donas', 'dona-crema-sm.jpg'),
(6, 'Dona de frutilla rellena', 'Dona de vainilla bañada en glaseado de frutilla y azúcar, con relleno de dulce de frutilla.', 'harina, azúcar, manteca, extracto de vainilla, esencia de frutilla, frutillas, maicena.', 50, 'Donas', 'dona-frutilla-sm.jpg'),
(7, 'Conito de frutilla', 'Helado de frutilla con crema en cucurucho.', 'azúcar, leche, crema, frutillas.', 45, 'Helados', 'conito-frutilla-sm.jpg'),
(8, 'Conito de limón', 'Helado de limón al agua en cucurucho.', 'azúcar, huevo, jugo de limón, maicena.', 45, 'Helados', 'conito-limon-sm.jpg'),
(9, 'Conito de menta', 'Helado de menta en cucurucho.', 'azúcar, huevo, crema, hojas de menta.', 45, 'Helados', 'conito-menta-sm.jpg'),
(10, 'Helado de banana', 'Helado en palito de banana, cubierto de crema.', 'azúcar, leche condensada, gelatina, banana, crema, colorante artificial.', 60, 'Helados', 'helado-banana-sm.jpg'),
(11, 'Helado de chicle', 'Helado en palito de chicle, cubierto de crema.', 'azúcar, leche condensada, gelatina, esencia sabor chicle, esencia sabor frutilla, colorante artificial.', 60, 'Helados', 'helado-chicle-sm.jpg'),
(12, 'Helado de crema', 'Helado en palito relleno de crema.', 'azúcar, leche condensada, gelatina, esencia de vainilla, esencia sabor frutilla, colorante artificial.', 60, 'Helados', 'helado-crema-sm.jpg'),
(13, 'Helado de frutilla', 'Helado en palito de frutilla, cubierto de crema.', 'azúcar, leche condensada, gelatina, frutillas, colorante artificial.', 60, 'Helados', 'helado-frutilla-sm.jpg'),
(14, 'Cookie de chocolate', 'Galleta de chocolate con chips de chocolate con leche.', 'harina, azúcar, manteca, huevos, café, chocolate con leche, cacao.', 40, 'Cookies', 'cookie-chocolate-sm.jpg'),
(15, 'Cookie de chocolate amargo', 'Galleta de vainilla con chips de chocolate amargo.', 'harina, azúcar, manteca, extracto de vainilla, huevos, café, chocolate amargo.', 40, 'Cookies', 'cookie-amargo-sm.jpg'),
(16, 'Cookie integral', 'Galleta integral con chips de chocolate con leche.', 'harina integral, azúcar moreno, manteca, huevos, chocolate con leche.', 40, 'Cookies', 'cookie-integral-sm.jpg'),
(17, 'Cookie de vainilla', 'Galleta de vainilla con chips de chocolate con leche.', 'harina, azúcar, manteca, extracto de vainilla, huevos, café, chocolate con leche.', 40, 'Cookies', 'cookie-vainilla-sm.jpg'),
(18, 'Cupcake de chocolate', 'Cupcake de chocolate relleno de dulce de leche, con mousse de chocolate y nueces.', 'harina, azúcar, sal, leche, manteca, huevos, chocolate con leche, cacao, nueces.', 70, 'Cupcakes', 'cupcake-chocolate-sm.jpg'),
(19, 'Cupcake de frutilla', 'Cupcake de vainilla con crema sabor frutilla.', 'harina, azúcar, sal, leche, manteca, extracto de vainilla, huevos, frutillas, esencia sabor frutilla.', 70, 'Cupcakes', 'cupcake-frutilla-sm.jpg'),
(20, 'Cupcake de limón', 'Cupcake de vainilla con crema sabor limón.', 'harina, azúcar, sal, leche, manteca, extracto de vainilla, huevos, jugo de limón.', 70, 'Cupcakes', 'cupcake-limon-sm.jpg'),
(21, 'Cupcake de cumpleaños', 'Cupcake de chocolate relleno de dulce de leche, con crema y vela festiva.', 'harina, azúcar, sal, leche, dulce de leche, manteca, huevos, cacao, crema.', 80, 'Cupcakes', 'cupcake-birthday-sm.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
