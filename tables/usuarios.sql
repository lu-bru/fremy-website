-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2019 at 11:24 PM
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
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(5) NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(30) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `registro` datetime NOT NULL DEFAULT current_timestamp(),
  `permisos` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `mail`, `password`, `registro`, `permisos`) VALUES
(1, 'Admin', 'Fremy', 'admin@fremy.com', 'AdminFremy', '2019-11-07 14:35:05', 1),
(2, 'Chester', 'Leonard', 'chesterleonard@gmail.com', 'festerBarren5', '2019-11-07 14:35:06', 0),
(3, 'Herman', 'Paul', 'hermanpaul@yahoo.com', '42hastilyEnraged', '2019-11-07 14:35:14', 0),
(4, 'Megan', 'Stephens', 'meganstephens@gmail.com', 'midgetWalrus', '2019-11-07 14:35:36', 0),
(5, 'Julio', 'Greer', 'juliogreer@hotmail.com', 'hazyRevere9', '2019-11-07 14:35:50', 0),
(6, 'Caroline', 'Murray', 'carolinemurray@yahoo.com', '4sorrowsPiggy8', '2019-11-07 14:36:02', 0),
(7, 'Kristin', 'Wood', 'kristinwood@gmail.com', '00gazedOlives', '2019-11-07 14:36:05', 0),
(8, 'Carol', 'West', 'carolwest@hotmail.com', 'tiradeAirlock', '2019-11-07 14:36:10', 0),
(9, 'Diana', 'Alexander', 'dianaalexander@gmail.com', '41redeemTanned', '2019-11-07 14:36:18', 0),
(10, 'Spencer', 'Fox', 'spencerfox@gmail.com', 'buggersOutcast68', '2019-11-07 14:36:20', 0),
(11, 'Conrad', 'Sparks', 'conradsparks@gmail.com', 'neuron6Flicks', '2019-11-07 14:36:26', 0),
(12, 'Evan', 'Chavez', 'evanchavez@hotmail.com', '87accrueTunisia', '2019-11-07 14:37:24', 0),
(13, 'Molly', 'Mills', 'mollymills@gmail.com', 'polled1Basset', '2019-11-07 14:48:54', 0),
(14, 'Rafael', 'Bryant', 'rafaelbryant@gmail.com', 'uproarWeakly', '2019-11-07 14:48:54', 0),
(15, 'Nicole', 'Green', 'nicolegreen@hotmail.com', 'broth5Slur', '2019-11-07 14:48:54', 0),
(16, 'Charlie', 'Knight', 'charlieknight@gmail.com', 'warpingDries22', '2019-11-10 16:51:52', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
