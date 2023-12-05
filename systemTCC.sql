-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.33-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para systemtcc
DROP DATABASE IF EXISTS `systemtcc`;
CREATE DATABASE IF NOT EXISTS `systemtcc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `systemtcc`;

-- Copiando estrutura para tabela systemtcc.eletrica
DROP TABLE IF EXISTS `eletrica`;
CREATE TABLE IF NOT EXISTS `eletrica` (
  `cod_eletrica` int(11) NOT NULL AUTO_INCREMENT,
  `voltagem` int(11) NOT NULL DEFAULT '0',
  `comodo` varchar(50) DEFAULT NULL,
  `tempo` datetime DEFAULT NULL,
  `deteccao` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_eletrica`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.eletrica: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `eletrica` DISABLE KEYS */;
REPLACE INTO `eletrica` (`cod_eletrica`, `voltagem`, `comodo`, `tempo`, `deteccao`) VALUES
	(1, 80, 'Sala', '2023-10-06 11:30:48', 'Corrente estável');
/*!40000 ALTER TABLE `eletrica` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.gas
DROP TABLE IF EXISTS `gas`;
CREATE TABLE IF NOT EXISTS `gas` (
  `cod_gas` int(11) NOT NULL AUTO_INCREMENT,
  `deteccao` varchar(100) NOT NULL DEFAULT '0',
  `comodo` varchar(50) NOT NULL DEFAULT '0',
  `tempo` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_gas`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.gas: ~86 rows (aproximadamente)
/*!40000 ALTER TABLE `gas` DISABLE KEYS */;
REPLACE INTO `gas` (`cod_gas`, `deteccao`, `comodo`, `tempo`) VALUES
	(1, 'Vazamento de g??s detectado \r', '0', '2023-09-01 13:51:00'),
	(2, 'Vazamento de g??s detectado \r', '0', '2023-09-01 13:51:00'),
	(3, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:51:00'),
	(4, 'Vazamento de g??s detectado \r', '0', '2023-09-01 13:53:00'),
	(5, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(6, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(7, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(8, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(9, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(10, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(11, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:53:00'),
	(12, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:54:00'),
	(13, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:54:00'),
	(14, 'Vazamento de g??s detectado \r', '0', '2023-09-01 13:55:00'),
	(15, 'Nenhum vazamento detectado \r', '0', '2023-09-01 13:55:00'),
	(16, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:45:00'),
	(17, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:45:00'),
	(18, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:45:00'),
	(19, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:53:00'),
	(20, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:53:00'),
	(21, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:53:00'),
	(22, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:53:00'),
	(23, 'Sensor de G??s: Nenhum vazamento detectado \r', '0', '2023-09-15 13:53:00'),
	(24, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(25, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(26, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(27, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(28, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(29, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(30, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(31, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(32, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(33, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(34, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(35, 'Nenhum vazamento detectado', '0', '2023-09-15 14:23:00'),
	(36, 'Nenhum vazamento detectado', '0', '2023-09-15 14:24:00'),
	(37, 'Nenhum vazamento detectado', '0', '2023-09-15 14:36:00'),
	(38, 'Nenhum vazamento detectado', '0', '2023-10-06 13:42:00'),
	(39, 'Vazamento de gas detectado', '0', '2023-10-06 13:42:00'),
	(40, 'Nenhum vazamento detectado', '0', '2023-10-06 13:46:00'),
	(41, 'Vazamento de gas detectado', '0', '2023-10-06 13:46:00'),
	(42, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(43, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(44, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(45, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(46, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(47, 'Nenhum vazamento detectado', '0', '2023-10-06 13:48:00'),
	(48, 'Vazamento de gas detectado', '0', '2023-10-06 13:48:00'),
	(49, 'Nenhum vazamento detectado', '0', '2023-10-06 13:49:00'),
	(50, 'Nenhum vazamento detectado', '0', '2023-10-06 13:49:00'),
	(51, 'Nenhum vazamento detectado', '0', '2023-10-06 13:49:00'),
	(52, 'Nenhum vazamento detectado', '0', '2023-10-06 13:50:00'),
	(53, 'Nenhum vazamento detectado', '0', '2023-10-17 11:14:00'),
	(54, 'Nenhum vazamento detectado', '0', '2023-10-17 11:14:00'),
	(55, 'Vazamento de gas detectado', '0', '2023-10-17 11:14:00'),
	(56, 'Nenhum vazamento detectado', '0', '2023-10-17 11:16:00'),
	(57, 'Nenhum vazamento detectado', '0', '2023-10-17 11:16:00'),
	(58, 'Vazamento de gas detectado', '0', '2023-10-17 11:16:00'),
	(59, 'Vazamento de gas detectado', '0', '2023-10-17 11:18:00'),
	(60, 'Vazamento de gas detectado', '0', '2023-10-17 11:22:00'),
	(61, 'Nenhum vazamento detectado', '0', '2023-10-17 11:22:00'),
	(62, 'Vazamento de gas detectado', '0', '2023-10-17 11:23:00'),
	(63, 'Vazamento de gas detectado', '0', '2023-10-17 15:00:00'),
	(64, 'Vazamento de gas detectado', '0', '2023-10-17 15:01:00'),
	(65, 'Nenhum vazamento detectado', '0', '2023-10-17 15:02:00'),
	(66, 'Vazamento de gas detectado', '0', '2023-10-17 15:02:00'),
	(67, 'Vazamento de gas detectado', '0', '2023-10-17 15:02:00'),
	(68, 'Nenhum vazamento detectado', '0', '2023-10-17 15:12:00'),
	(69, 'Nenhum vazamento detectado', '0', '2023-10-17 15:12:00'),
	(70, 'Nenhum vazamento detectado', '0', '2023-10-17 15:13:00'),
	(71, 'Nenhum vazamento detectado', '0', '2023-10-17 15:13:00'),
	(72, 'Nenhum vazamento detectado', '0', '2023-10-17 15:17:00'),
	(73, 'Nenhum vazamento detectado', '0', '2023-10-17 15:17:00'),
	(74, 'Nenhum vazamento detectado', '0', '2023-10-17 15:18:00'),
	(75, 'Nenhum vazamento detectado', '0', '2023-10-17 15:18:00'),
	(76, 'Nenhum vazamento detectado', '0', '2023-10-18 10:15:00'),
	(77, 'Vazamento de gas detectado', '0', '2023-10-18 10:15:00'),
	(78, 'Vazamento de gas detectado', '0', '2023-10-18 10:46:00'),
	(79, 'Vazamento de gas detectado', '0', '2023-10-18 10:46:00'),
	(80, 'Nenhum vazamento detectado', '0', '2023-10-18 10:46:00'),
	(81, 'Vazamento de gas detectado', '0', '2023-10-18 14:01:00'),
	(82, 'Nenhum vazamento detectado', '0', '2023-10-18 14:01:00'),
	(83, 'Vazamento de gas detectado', '0', '2023-10-18 14:01:00'),
	(84, 'Vazamento de gas detectado', '0', '2023-10-18 14:02:00'),
	(85, 'Nenhum vazamento detectado', '0', '2023-10-18 14:11:00'),
	(86, 'Vazamento de gas detectado', '0', '2023-10-18 14:11:00');
/*!40000 ALTER TABLE `gas` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.incendio
DROP TABLE IF EXISTS `incendio`;
CREATE TABLE IF NOT EXISTS `incendio` (
  `cod_incendio` int(11) NOT NULL AUTO_INCREMENT,
  `temperatura` double NOT NULL DEFAULT '0',
  `comodo` varchar(50) DEFAULT NULL,
  `tempo` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_incendio`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.incendio: ~117 rows (aproximadamente)
/*!40000 ALTER TABLE `incendio` DISABLE KEYS */;
REPLACE INTO `incendio` (`cod_incendio`, `temperatura`, `comodo`, `tempo`) VALUES
	(1, 27, NULL, '2023-09-14 11:30:00'),
	(2, 27, NULL, '2023-09-14 11:30:00'),
	(3, 28, NULL, '2023-09-14 11:30:00'),
	(4, 27, NULL, '2023-09-14 11:30:00'),
	(5, 27, NULL, '2023-09-14 11:30:00'),
	(6, 27, NULL, '2023-09-14 11:30:00'),
	(7, 27, NULL, '2023-09-14 11:30:00'),
	(8, 27, NULL, '2023-09-14 11:30:00'),
	(9, 28, NULL, '2023-09-14 11:31:00'),
	(10, 26.86, NULL, '2023-09-15 11:43:00'),
	(11, 27.34, NULL, '2023-09-15 11:43:00'),
	(12, 26.86, NULL, '2023-09-15 11:43:00'),
	(13, 26.37, NULL, '2023-09-15 11:43:00'),
	(14, 26.37, NULL, '2023-09-15 11:45:00'),
	(15, 26.37, NULL, '2023-09-15 11:45:00'),
	(16, 26.86, NULL, '2023-09-15 11:45:00'),
	(17, 25.88, NULL, '2023-09-15 11:58:00'),
	(18, 25.88, NULL, '2023-09-15 11:58:00'),
	(19, 25.88, NULL, '2023-09-15 11:58:00'),
	(20, 25.88, NULL, '2023-09-15 11:58:00'),
	(21, 25.39, NULL, '2023-09-15 11:58:00'),
	(22, 25.88, NULL, '2023-09-15 11:58:00'),
	(23, 25.88, NULL, '2023-09-15 11:58:00'),
	(24, 25.88, NULL, '2023-09-15 11:58:00'),
	(25, 25.88, NULL, '2023-09-15 11:58:00'),
	(26, 25.88, NULL, '2023-09-15 11:58:00'),
	(27, 25.88, NULL, '2023-09-15 13:15:00'),
	(28, 24.9, NULL, '2023-09-15 13:15:00'),
	(29, 26.37, NULL, '2023-09-15 13:15:00'),
	(30, 25.88, NULL, '2023-09-15 13:15:00'),
	(31, 24.9, NULL, '2023-09-15 13:15:00'),
	(32, 25.88, NULL, '2023-09-15 13:15:00'),
	(33, 83.5, 'Cozinha', '2023-09-15 13:28:00'),
	(34, 83.01, 'Cozinha', '2023-09-15 13:28:00'),
	(35, 83.98, 'Cozinha', '2023-09-15 13:28:00'),
	(36, 84.47, 'Cozinha', '2023-09-15 13:28:00'),
	(37, 88.38, 'Cozinha', '2023-09-15 13:29:00'),
	(38, 88.87, 'Cozinha', '2023-09-15 13:29:00'),
	(39, 85.45, 'Cozinha', '2023-09-15 13:29:00'),
	(40, 81.54, 'Cozinha', '2023-09-15 13:29:00'),
	(41, 84.96, 'Cozinha', '2023-09-15 13:29:00'),
	(42, 81.54, 'Cozinha', '2023-09-15 13:30:00'),
	(43, 84.96, 'Cozinha', '2023-09-15 13:30:00'),
	(44, 83.01, 'Cozinha', '2023-09-15 13:35:00'),
	(45, 84.47, 'Cozinha', '2023-09-15 13:35:00'),
	(46, 82.03, 'Cozinha', '2023-09-15 13:35:00'),
	(47, 84.47, 'Cozinha', '2023-09-15 13:38:00'),
	(48, 86.91, 'Cozinha', '2023-09-15 13:38:00'),
	(49, 87.89, 'Cozinha', '2023-09-15 13:38:00'),
	(50, 27.34, 'Cozinha', '2023-09-15 14:00:00'),
	(51, 26.86, 'Cozinha', '2023-09-15 14:00:00'),
	(52, 26.37, 'Cozinha', '2023-09-15 14:00:00'),
	(53, 26.86, 'Cozinha', '2023-09-15 14:00:00'),
	(54, 26.37, 'Cozinha', '2023-09-15 14:02:00'),
	(55, 26.37, 'Cozinha', '2023-09-15 14:02:00'),
	(56, 26.86, 'Cozinha', '2023-09-15 14:02:00'),
	(57, 25.88, 'Cozinha', '2023-09-15 14:23:00'),
	(58, 26.86, 'Cozinha', '2023-09-15 14:23:00'),
	(59, 26.86, 'Cozinha', '2023-09-15 14:23:00'),
	(60, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(61, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(62, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(63, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(64, 26.86, 'Cozinha', '2023-09-15 14:23:00'),
	(65, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(66, 26.86, 'Cozinha', '2023-09-15 14:23:00'),
	(67, 26.86, 'Cozinha', '2023-09-15 14:23:00'),
	(68, 26.37, 'Cozinha', '2023-09-15 14:23:00'),
	(69, 25.88, 'Cozinha', '2023-09-15 14:24:00'),
	(70, 26.37, 'Cozinha', '2023-09-15 14:36:00'),
	(71, 25.39, 'Cozinha', '2023-10-06 13:42:00'),
	(72, 25.39, 'Cozinha', '2023-10-06 13:42:00'),
	(73, 25.39, 'Cozinha', '2023-10-06 13:46:00'),
	(74, 25.39, 'Cozinha', '2023-10-06 13:46:00'),
	(75, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(76, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(77, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(78, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(79, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(80, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(81, 25.39, 'Cozinha', '2023-10-06 13:48:00'),
	(82, 25.39, 'Cozinha', '2023-10-06 13:49:00'),
	(83, 25.39, 'Cozinha', '2023-10-06 13:49:00'),
	(84, 24.9, 'Cozinha', '2023-10-06 13:49:00'),
	(85, 25.39, 'Cozinha', '2023-10-06 13:50:00'),
	(86, 24.41, 'Cozinha', '2023-10-17 11:14:00'),
	(87, 24.9, 'Cozinha', '2023-10-17 11:14:00'),
	(88, 24.9, 'Cozinha', '2023-10-17 11:14:00'),
	(89, 23.93, 'Cozinha', '2023-10-17 11:16:00'),
	(90, 24.9, 'Cozinha', '2023-10-17 11:16:00'),
	(91, 24.41, 'Cozinha', '2023-10-17 11:16:00'),
	(92, 23.93, 'Cozinha', '2023-10-17 11:18:00'),
	(93, 29.3, 'Cozinha', '2023-10-17 11:22:00'),
	(94, 28.81, 'Cozinha', '2023-10-17 11:22:00'),
	(95, 28.32, 'Cozinha', '2023-10-17 11:23:00'),
	(96, 25.88, 'Cozinha', '2023-10-17 15:12:00'),
	(97, 25.88, 'Cozinha', '2023-10-17 15:12:00'),
	(98, 26.86, 'Cozinha', '2023-10-17 15:12:00'),
	(99, 25.88, 'Cozinha', '2023-10-17 15:13:00'),
	(100, 25.88, 'Cozinha', '2023-10-17 15:13:00'),
	(101, 25.88, 'Cozinha', '2023-10-17 15:17:00'),
	(102, 25.39, 'Cozinha', '2023-10-17 15:17:00'),
	(103, 26.37, 'Cozinha', '2023-10-17 15:18:00'),
	(104, 25.88, 'Cozinha', '2023-10-17 15:18:00'),
	(105, 24.41, 'Cozinha', '2023-10-18 10:13:00'),
	(106, 24.41, 'Cozinha', '2023-10-18 10:14:00'),
	(107, 24.41, 'Cozinha', '2023-10-18 10:14:00'),
	(108, 24.41, 'Cozinha', '2023-10-18 10:14:00'),
	(109, 23.93, 'Cozinha', '2023-10-18 10:14:00'),
	(110, 24.41, 'Cozinha', '2023-10-18 10:46:00'),
	(111, 24.41, 'Cozinha', '2023-10-18 10:46:00'),
	(112, 23.44, 'Cozinha', '2023-10-18 14:01:00'),
	(113, 23.44, 'Cozinha', '2023-10-18 14:01:00'),
	(114, 23.93, 'Cozinha', '2023-10-18 14:02:00'),
	(115, 29.79, 'Cozinha', '2023-10-18 14:11:00'),
	(116, 108.89, 'Cozinha', '2023-10-18 14:11:00'),
	(117, 25.88, 'Cozinha', '2023-10-18 14:42:00');
/*!40000 ALTER TABLE `incendio` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.proximidade
DROP TABLE IF EXISTS `proximidade`;
CREATE TABLE IF NOT EXISTS `proximidade` (
  `cod_proximidade` int(11) NOT NULL AUTO_INCREMENT,
  `deteccao` varchar(50) NOT NULL DEFAULT '0',
  `comodo` varchar(50) DEFAULT NULL,
  `tempo` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_proximidade`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.proximidade: ~129 rows (aproximadamente)
/*!40000 ALTER TABLE `proximidade` DISABLE KEYS */;
REPLACE INTO `proximidade` (`cod_proximidade`, `deteccao`, `comodo`, `tempo`) VALUES
	(1, 'Movimento detectado', NULL, '2023-09-14 10:53:00'),
	(2, 'Sem movimento', NULL, '2023-09-14 10:54:00'),
	(3, 'Sem movimento', NULL, '2023-09-14 10:54:00'),
	(4, 'Sem movimento', NULL, '2023-09-14 10:54:00'),
	(5, 'Movimento detectado', NULL, '2023-09-14 10:54:00'),
	(6, 'Movimento detectado', NULL, '2023-09-14 10:55:00'),
	(7, 'Sem movimento', NULL, '2023-09-14 10:55:00'),
	(8, 'Sem movimento', NULL, '2023-09-14 11:00:00'),
	(9, 'Sem movimento', NULL, '2023-09-14 11:00:00'),
	(10, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(11, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(12, 'Sem movimento', NULL, '2023-09-14 11:00:00'),
	(13, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(14, 'Sem movimento', NULL, '2023-09-14 11:00:00'),
	(15, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(16, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(17, 'Movimento detectado', NULL, '2023-09-14 11:00:00'),
	(18, 'Sem movimento', NULL, '2023-09-14 11:00:00'),
	(19, 'Sem movimento', NULL, '2023-09-14 11:01:00'),
	(20, 'Sem movimento', NULL, '2023-09-14 11:18:00'),
	(21, 'Sem movimento', NULL, '2023-09-14 11:18:00'),
	(22, 'Sem movimento', NULL, '2023-09-14 11:18:00'),
	(23, 'Sem movimento', NULL, '2023-09-14 11:18:00'),
	(24, 'Sem movimento', NULL, '2023-09-14 11:18:00'),
	(25, 'Sem movimento', NULL, '2023-09-14 11:19:00'),
	(26, 'Sem movimento', NULL, '2023-09-14 11:19:00'),
	(27, 'Sem movimento', NULL, '2023-09-14 11:19:00'),
	(28, 'Sem movimento', NULL, '2023-09-14 11:19:00'),
	(29, 'Sem movimento', NULL, '2023-09-15 11:36:00'),
	(30, 'Movimento detectado', NULL, '2023-09-15 11:36:00'),
	(31, 'Sem movimento', NULL, '2023-09-15 11:36:00'),
	(32, 'Sem movimento', NULL, '2023-09-15 11:36:00'),
	(33, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(34, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(35, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(36, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(37, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(38, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(39, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(40, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(41, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(42, 'Sem movimento', 'quarto', '2023-09-15 11:58:00'),
	(43, 'Sem movimento', 'Entrada de casa', '2023-09-15 13:29:00'),
	(44, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:29:00'),
	(45, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:29:00'),
	(46, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:29:00'),
	(47, 'Sem movimento', 'Entrada de casa', '2023-09-15 13:29:00'),
	(48, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:30:00'),
	(49, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:30:00'),
	(50, 'Sem movimento', 'Entrada de casa', '2023-09-15 13:35:00'),
	(51, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:35:00'),
	(52, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:35:00'),
	(53, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:38:00'),
	(54, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:38:00'),
	(55, 'Movimento detectado', 'Entrada de casa', '2023-09-15 13:38:00'),
	(56, 'Movimento detectado', 'Entrada de casa', '2023-09-15 14:00:00'),
	(57, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:00:00'),
	(58, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:00:00'),
	(59, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:00:00'),
	(60, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:02:00'),
	(61, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:02:00'),
	(62, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:02:00'),
	(63, 'Movimento detectado', 'Entrada de casa', '2023-09-15 14:23:00'),
	(64, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(65, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(66, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(67, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(68, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(69, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(70, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(71, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(72, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(73, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(74, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:23:00'),
	(75, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:24:00'),
	(76, 'Sem movimento', 'Entrada de casa', '2023-09-15 14:36:00'),
	(77, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:42:00'),
	(78, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:42:00'),
	(79, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:46:00'),
	(80, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:46:00'),
	(81, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:48:00'),
	(82, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:48:00'),
	(83, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:48:00'),
	(84, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:48:00'),
	(85, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:48:00'),
	(86, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:48:00'),
	(87, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:48:00'),
	(88, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:49:00'),
	(89, 'Sem movimento', 'Entrada de casa', '2023-10-06 13:49:00'),
	(90, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:49:00'),
	(91, 'Movimento detectado', 'Entrada de casa', '2023-10-06 13:50:00'),
	(92, 'Movimento detectado', 'Entrada de casa', '2023-10-17 11:16:00'),
	(93, 'Sem movimento', 'Entrada de casa', '2023-10-17 11:16:00'),
	(94, 'Sem movimento', 'Entrada de casa', '2023-10-17 11:16:00'),
	(95, 'Sem movimento', 'Entrada de casa', '2023-10-17 11:18:00'),
	(96, 'Movimento detectado', 'Entrada de casa', '2023-10-17 11:22:00'),
	(97, 'Sem movimento', 'Entrada de casa', '2023-10-17 11:22:00'),
	(98, 'Sem movimento', 'Entrada de casa', '2023-10-17 11:23:00'),
	(99, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:12:00'),
	(100, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:12:00'),
	(101, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:12:00'),
	(102, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:13:00'),
	(103, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:13:00'),
	(104, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:17:00'),
	(105, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:17:00'),
	(106, 'Sem movimento', 'Entrada de casa', '2023-10-17 15:18:00'),
	(107, 'Movimento detectado', 'Entrada de casa', '2023-10-17 15:18:00'),
	(108, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:32:00'),
	(109, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:32:00'),
	(110, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:33:00'),
	(111, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:33:00'),
	(112, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:33:00'),
	(113, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:33:00'),
	(114, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:33:00'),
	(115, 'Movimento detectado', 'Entrada de casa', '2023-10-18 10:34:00'),
	(116, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:34:00'),
	(117, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:34:00'),
	(118, 'Movimento detectado', 'Entrada de casa', '2023-10-18 10:35:00'),
	(119, 'Movimento detectado', 'Entrada de casa', '2023-10-18 10:35:00'),
	(120, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:35:00'),
	(121, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:46:00'),
	(122, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:46:00'),
	(123, 'Sem movimento', 'Entrada de casa', '2023-10-18 10:46:00'),
	(124, 'Sem movimento', 'Entrada de casa', '2023-10-18 14:01:00'),
	(125, 'Movimento detectado', 'Entrada de casa', '2023-10-18 14:01:00'),
	(126, 'Sem movimento', 'Entrada de casa', '2023-10-18 14:01:00'),
	(127, 'Sem movimento', 'Entrada de casa', '2023-10-18 14:02:00'),
	(128, 'Sem movimento', 'Entrada de casa', '2023-10-18 14:11:00'),
	(129, 'Movimento detectado', 'Entrada de casa', '2023-10-18 14:11:00');
/*!40000 ALTER TABLE `proximidade` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.registro2
DROP TABLE IF EXISTS `registro2`;
CREATE TABLE IF NOT EXISTS `registro2` (
  `cod_regis` int(11) NOT NULL AUTO_INCREMENT,
  `gas_info` varchar(50) NOT NULL DEFAULT '0',
  `eletrica_info` decimal(10,0) NOT NULL DEFAULT '0',
  `proximidade_info` varchar(50) NOT NULL DEFAULT '0',
  `incendio_info` decimal(10,0) DEFAULT NULL,
  `tempo` datetime NOT NULL,
  PRIMARY KEY (`cod_regis`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.registro2: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `registro2` DISABLE KEYS */;
REPLACE INTO `registro2` (`cod_regis`, `gas_info`, `eletrica_info`, `proximidade_info`, `incendio_info`, `tempo`) VALUES
	(1, 'Vazamento de gas detectado', 88, 'Movimento detectado', 26, '2023-10-18 14:11:00');
/*!40000 ALTER TABLE `registro2` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.registros
DROP TABLE IF EXISTS `registros`;
CREATE TABLE IF NOT EXISTS `registros` (
  `cod_registro` int(11) NOT NULL AUTO_INCREMENT,
  `mensagem` varchar(100) NOT NULL DEFAULT '0',
  `tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `reg_gas_cod` int(11) DEFAULT NULL,
  `reg_incendio_cod` int(11) DEFAULT NULL,
  `reg_proximidade_cod` int(11) DEFAULT NULL,
  `reg_eletrica_cod` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_registro`),
  KEY `FK_registros_gas` (`reg_gas_cod`),
  KEY `FK_registros_proximidade` (`reg_proximidade_cod`),
  KEY `FK_registros_incendio` (`reg_incendio_cod`),
  KEY `FK_registros_eletrica` (`reg_eletrica_cod`),
  CONSTRAINT `FK_registros_eletrica` FOREIGN KEY (`reg_eletrica_cod`) REFERENCES `eletrica` (`cod_eletrica`),
  CONSTRAINT `FK_registros_gas` FOREIGN KEY (`reg_gas_cod`) REFERENCES `gas` (`cod_gas`),
  CONSTRAINT `FK_registros_incendio` FOREIGN KEY (`reg_incendio_cod`) REFERENCES `incendio` (`cod_incendio`),
  CONSTRAINT `FK_registros_proximidade` FOREIGN KEY (`reg_proximidade_cod`) REFERENCES `proximidade` (`cod_proximidade`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.registros: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
REPLACE INTO `registros` (`cod_registro`, `mensagem`, `tempo`, `reg_gas_cod`, `reg_incendio_cod`, `reg_proximidade_cod`, `reg_eletrica_cod`) VALUES
	(1, '0', '2023-10-06 11:31:31', 1, 1, 1, 1);
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.residencia
DROP TABLE IF EXISTS `residencia`;
CREATE TABLE IF NOT EXISTS `residencia` (
  `cod_residencia` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `rua` varchar(50) DEFAULT NULL,
  `tempo` datetime DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `comodos` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_residencia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.residencia: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `residencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `residencia` ENABLE KEYS */;

-- Copiando estrutura para tabela systemtcc.usuario
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `cod_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` int(20) NOT NULL DEFAULT '0',
  `nome` varchar(50) NOT NULL DEFAULT '0',
  `senha` int(11) NOT NULL DEFAULT '0',
  `telefone` int(11) NOT NULL DEFAULT '0',
  `estado` varchar(50) NOT NULL DEFAULT '0',
  `cidade` varchar(50) NOT NULL DEFAULT '0',
  `bairro` varchar(50) NOT NULL DEFAULT '0',
  `rua` varchar(50) NOT NULL DEFAULT '0',
  `numero` int(11) NOT NULL DEFAULT '0',
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela systemtcc.usuario: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
REPLACE INTO `usuario` (`cod_usuario`, `cpf`, `nome`, `senha`, `telefone`, `estado`, `cidade`, `bairro`, `rua`, `numero`, `email`) VALUES
	(1, 56456, 'taks', 123, 45454, 'sp', 'regis', 'asdasd', 'asdasd', 0, 'tak@');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
