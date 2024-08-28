CREATE DATABASE  IF NOT EXISTS `technician_service` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `technician_service`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: technician_service
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `technicians`
--

DROP TABLE IF EXISTS `technicians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technicians` (
  `technician_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `specialization` varchar(150) NOT NULL,
  `rating` float DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`technician_id`),
  CONSTRAINT `technicians_chk_1` CHECK (((`rating` >= 0) and (`rating` <= 5)))
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technicians`
--

LOCK TABLES `technicians` WRITE;
/*!40000 ALTER TABLE `technicians` DISABLE KEYS */;
INSERT INTO `technicians` VALUES (1,'Ravi','https://via.placeholder.com/150','Refrigerator Specialist',4.5,'Expert in refrigerator repair with 10 years of experience.'),(2,'Ashok','https://via.placeholder.com/150','Air Conditioner Specialist',4.7,'Certified AC technician with 8 years of experience.'),(3,'Anusha','https://via.placeholder.com/150','Washing Machine Specialist',4.8,'Certified Washing Machine technician with 8 years of experience.'),(4,'Prudhvi','https://via.placeholder.com/150','Dishwasher Specialist',4.4,'Expert in  Dishwasher repair with 11 years of experience.'),(5,'Ravi','https://via.placeholder.com/150','Refrigerator Specialist',4.5,'Expert in refrigerator repair with 10 years of experience.'),(6,'Ashok','https://via.placeholder.com/150','Air Conditioner Specialist',4.7,'Certified AC technician with 8 years of experience.'),(7,'Anusha','https://via.placeholder.com/150','Washing Machine Specialist',4.8,'Certified Washing Machine technician with 8 years of experience.'),(8,'Prudhvi','https://via.placeholder.com/150','Dishwasher Specialist',4.4,'Expert in  Dishwasher repair with 11 years of experience.');
/*!40000 ALTER TABLE `technicians` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-28 13:43:02
