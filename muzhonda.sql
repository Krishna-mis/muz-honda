-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2025 at 06:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muzhonda`
--

-- --------------------------------------------------------

--
-- Table structure for table `amc`
--

CREATE TABLE `amc` (
  `id` int(11) NOT NULL,
  `model` varchar(255) DEFAULT NULL,
  `year_of_purchase` year(4) DEFAULT NULL,
  `registration_number` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amc`
--

INSERT INTO `amc` (`id`, `model`, `year_of_purchase`, `registration_number`, `name`, `email`, `contact_number`, `message`) VALUES
(1, 'honda-activa-6g', '2019', 'up6623e', 'honda_db', '54676567@gmail.com', '9864739642', 'this is a dummy message');

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `id` int(11) NOT NULL,
  `nameImg` varchar(255) DEFAULT NULL,
  `bikeIcon` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `engine` varchar(100) NOT NULL,
  `power` varchar(100) NOT NULL,
  `transmission` varchar(100) NOT NULL,
  `document` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bikes`
--

INSERT INTO `bikes` (`id`, `nameImg`, `bikeIcon`, `image`, `engine`, `power`, `transmission`, `document`, `created_at`) VALUES
(22, '/uploads/1739272563691-660034182.webp', '/uploads/1739272563691-561922412.webp', '/uploads/1739272563693-936681841.webp', '184.40 cc', '12.7 kW @ 8500 rpm', '5 Gears', '/uploads/1739272563694-626244038.pdf', '2025-02-11 11:16:03'),
(23, '/uploads/1739272711094-364607343.webp', '/uploads/1739272711095-995813014.webp', '/uploads/1739272711096-612713009.webp', '110 cc', '8.01 PS @ 7500 rpm', '4 Gears', '/uploads/1739272711097-69611246.pdf', '2025-02-11 11:18:31'),
(24, '/uploads/1739272893708-26428884.webp', '/uploads/1739272893709-568801108.webp', '/uploads/1739272893709-16505548.webp', '162.71 cc', '12.9 PS @ 8000 rpm', '5 Gears', '/uploads/1739272893710-319736215.pdf', '2025-02-11 11:21:33'),
(25, '/uploads/1739272946617-350856787.webp', '/uploads/1739272946618-232562328.webp', '/uploads/1739272946619-926202483.webp', '124 cc', '10.7 PS @ 7500 rpm', '5 Gears', '/uploads/1739272946620-773096094.pdf', '2025-02-11 11:22:26'),
(26, '/uploads/1739272978637-649356670.webp', '/uploads/1739272978638-906465715.webp', '/uploads/1739272978638-48174531.webp', '124 cc', '10.7 PS @ 7500 rpm', '5 Gears', '/uploads/1739272978640-38905016.pdf', '2025-02-11 11:22:58'),
(27, '/uploads/1739273029806-308541691.webp', '/uploads/1739273029807-652797326.webp', '/uploads/1739273029807-303016501.webp', '110 cc', '8.01 PS @ 7500 rpm', '4 Gears', '/uploads/1739273029810-690041465.pdf', '2025-02-11 11:23:49'),
(28, '/uploads/1739273054776-249585600.webp', '/uploads/1739273054777-545425775.webp', '/uploads/1739273054777-715828539.webp', '110 cc', '8.01 PS @ 7500 rpm', '4 Gears', '/uploads/1739273054778-379109307.pdf', '2025-02-11 11:24:14'),
(29, '/uploads/1739273108772-144782776.webp', '/uploads/1739273108772-269226432.webp', '/uploads/1739273108772-70679361.webp', '159 cc', '12.7 PS @ 8500 rpm', '5 Gears', '/uploads/1739273108776-240800762.pdf', '2025-02-11 11:25:08'),
(30, '/uploads/1739273165310-683630285.webp', '/uploads/1739273165311-938123153.webp', '/uploads/1739273165311-417147542.webp', '110 cc', '8.01 PS @ 7500 rpm', '4 Gears', '/uploads/1739273165312-339932895.pdf', '2025-02-11 11:26:05'),
(31, '/uploads/1739273200791-328221132.webp', '/uploads/1739273200792-960768576.webp', '/uploads/1739273200792-740097894.webp', '100 cc', '8.01 PS @ 7500 rpm', '4 Gears', '/uploads/1739273200793-266983038.pdf', '2025-02-11 11:26:40'),
(32, '/uploads/1739273247260-287586414.webp', '/uploads/1739273247260-997207278.webp', '/uploads/1739273247261-119858224.webp', '184 cc', '12.01 PS @ 7500 rpm', '5 Gears', '/uploads/1739273247264-946104297.pdf', '2025-02-11 11:27:27');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `model` varchar(255) NOT NULL,
  `enteredModel` varchar(255) NOT NULL,
  `yearOfPurchase` varchar(10) NOT NULL,
  `serviceType` enum('Paid','Free') NOT NULL,
  `registrationNumber` varchar(50) NOT NULL,
  `bookingDate` date NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactNumber` varchar(20) NOT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `model`, `enteredModel`, `yearOfPurchase`, `serviceType`, `registrationNumber`, `bookingDate`, `name`, `email`, `contactNumber`, `message`, `created_at`) VALUES
(1, 'Honda Unicorn', '1234', '2019', 'Paid', 'up662387698', '2025-02-12', 'Krishna', 'krishn.manthanit@gmail.com', '9864739642', 'hii this a message for checking', '2025-02-11 11:40:44'),
(2, 'Honda Activa 6G', '1234', '', 'Paid', 'up662387698', '2025-02-14', 'Krishna', 'krishn.manthanit@gmail.com', '9864739642', 'testing', '2025-02-12 05:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `contact_requests`
--

CREATE TABLE `contact_requests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `reason` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_requests`
--

INSERT INTO `contact_requests` (`id`, `name`, `email`, `contact`, `message`, `reason`, `created_at`) VALUES
(1, 'honda_db', '54676567@gmail.com', '9865663643', 'hii', 'Support', '2025-02-12 05:27:52');

-- --------------------------------------------------------

--
-- Table structure for table `finance_requests`
--

CREATE TABLE `finance_requests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `loan_amount` decimal(10,2) NOT NULL,
  `model` varchar(255) NOT NULL,
  `message` text DEFAULT NULL,
  `agreed` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `finance_requests`
--

INSERT INTO `finance_requests` (`id`, `name`, `email`, `contact`, `loan_amount`, `model`, `message`, `agreed`, `created_at`) VALUES
(1, 'krishna', 'krish@gmail.com', '9264941513', 12000.00, 'model1', 'hii this is my testing', 1, '2025-02-12 05:34:02');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `uploaded_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image_path`, `uploaded_at`) VALUES
(1, 'uploads\\1739336949846-661481609.webp', '2025-02-12 05:09:09'),
(2, 'uploads\\1739336949851-467477688.webp', '2025-02-12 05:09:09'),
(3, 'uploads\\1739336949853-14483913.webp', '2025-02-12 05:09:09'),
(4, 'uploads\\1739336949857-297392633.webp', '2025-02-12 05:09:09'),
(5, 'uploads\\1739336949859-591555100.webp', '2025-02-12 05:09:09'),
(6, 'uploads\\1739336949863-195229878.webp', '2025-02-12 05:09:09'),
(7, 'uploads\\1739336949869-761529016.webp', '2025-02-12 05:09:09');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `filepath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `filename`, `filepath`) VALUES
(50, '1739333927998.webp', 'uploads/1739333927998.webp'),
(51, '1739333927999.webp', 'uploads/1739333927999.webp'),
(52, '1739333928004.webp', 'uploads/1739333928004.webp'),
(53, '1739333928008.webp', 'uploads/1739333928008.webp'),
(54, '1739333928009.webp', 'uploads/1739333928009.webp'),
(55, '1739333928013.webp', 'uploads/1739333928013.webp'),
(56, '1739333928016.webp', 'uploads/1739333928016.webp'),
(57, '1739333928017.webp', 'uploads/1739333928017.webp'),
(58, '1739333928020.webp', 'uploads/1739333928020.webp'),
(59, '1739333928023.webp', 'uploads/1739333928023.webp'),
(60, '1739333928024.webp', 'uploads/1739333928024.webp'),
(61, '1739333928029.webp', 'uploads/1739333928029.webp'),
(62, '1739333928030.webp', 'uploads/1739333928030.webp'),
(63, '1739333928297.webp', 'uploads/1739333928297.webp'),
(64, '1739333928298.webp', 'uploads/1739333928298.webp'),
(65, '1739333928300.webp', 'uploads/1739333928300.webp');

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `name`, `email`, `contact`, `created_at`) VALUES
(1, 'Krishna', 'krishn.manthanit@gmail.com', '9865663643', '2025-02-12 05:41:24'),
(2, 'Krishna', 'kudeep@manthanitsolutions.in', '9865663643', '2025-02-12 05:59:25');

-- --------------------------------------------------------

--
-- Table structure for table `opt_in`
--

CREATE TABLE `opt_in` (
  `id` int(11) NOT NULL,
  `registration` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `notifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`notifications`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `opt_in`
--

INSERT INTO `opt_in` (`id`, `registration`, `name`, `mobile`, `notifications`, `created_at`) VALUES
(1, 'UP57RJ1223', 'Krishna', '9013256201', '{\"all\":true,\"rcs\":true,\"sms\":true,\"obd\":false,\"email\":true,\"whatsapp\":true}', '2025-02-12 05:42:44'),
(2, 'UP57RJ1223', 'FPI', '56', '{\"all\":false,\"rcs\":false,\"sms\":false,\"obd\":false,\"email\":false,\"whatsapp\":false}', '2025-02-12 05:42:57');

-- --------------------------------------------------------

--
-- Table structure for table `scooters`
--

CREATE TABLE `scooters` (
  `id` int(11) NOT NULL,
  `nameImg` varchar(255) DEFAULT NULL,
  `bikeIcon` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `engine` varchar(50) DEFAULT NULL,
  `power` varchar(50) DEFAULT NULL,
  `transmission` varchar(50) DEFAULT NULL,
  `document` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `scooters`
--

INSERT INTO `scooters` (`id`, `nameImg`, `bikeIcon`, `image`, `engine`, `power`, `transmission`, `document`, `created_at`) VALUES
(9, '/uploads/1739270542658-871798612.webp', '/uploads/1739270542658-923925388.webp', '/uploads/1739270542659-875454644.jpg', '124 cc', '8.17 BHP', 'Automatic', '/uploads/1739270542662-296486292.pdf', '2025-02-11 10:42:22'),
(10, '/uploads/1739270599553-226525375.webp', '/uploads/1739270599553-677893385.webp', '/uploads/1739270599554-384976621.webp', '109.51cc', '5.71kw @8000rpm', 'Automatic', '/uploads/1739270599556-118659117.pdf', '2025-02-11 10:43:19'),
(11, '/uploads/1739270672618-198708571.webp', '/uploads/1739270672618-358640488.webp', '/uploads/1739270672619-844316446.webp', '123.92 cc', '6.09 kW @ 6250 rpm', '4 stroke, SI Engine', '/uploads/1739270672621-675300501.pdf', '2025-02-11 10:44:32'),
(12, '/uploads/1739270717414-349488399.webp', '/uploads/1739270717415-778565788.webp', '/uploads/1739270717416-861381919.webp', '109.51 cc', '5.77kW @ 8000 rpm', 'Automatic', '/uploads/1739270717418-733855203.pdf', '2025-02-11 10:45:17'),
(13, '/uploads/1739270745283-824448193.webp', '/uploads/1739270745283-809670407.webp', '/uploads/1739270745283-906369919.webp', '109.51 cc', '5.77kW @ 8000 rpm', 'Automatic', '/uploads/1739270745284-830364102.pdf', '2025-02-11 10:45:45'),
(14, '/uploads/1739270769699-311021501.webp', '/uploads/1739270769700-800914089.webp', '/uploads/1739270769701-326004603.webp', '109.51 cc', '5.77kW @ 8000 rpm', 'Automatic', '/uploads/1739270769703-996866391.pdf', '2025-02-11 10:46:09');

-- --------------------------------------------------------

--
-- Table structure for table `warranty`
--

CREATE TABLE `warranty` (
  `id` int(11) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year_of_purchase` year(4) NOT NULL,
  `registration_number` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `warranty`
--

INSERT INTO `warranty` (`id`, `model`, `year_of_purchase`, `registration_number`, `name`, `email`, `contact_number`, `message`, `created_at`) VALUES
(1, 'honda-cb-shine', '2019', 'up662387698', 'Krishna', 'krishna.manthanit@gmail.com', '9864739642', 'hii testing', '2025-02-12 05:31:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amc`
--
ALTER TABLE `amc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_requests`
--
ALTER TABLE `contact_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance_requests`
--
ALTER TABLE `finance_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opt_in`
--
ALTER TABLE `opt_in`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scooters`
--
ALTER TABLE `scooters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warranty`
--
ALTER TABLE `warranty`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `registration_number` (`registration_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amc`
--
ALTER TABLE `amc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bikes`
--
ALTER TABLE `bikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_requests`
--
ALTER TABLE `contact_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `finance_requests`
--
ALTER TABLE `finance_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `opt_in`
--
ALTER TABLE `opt_in`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `scooters`
--
ALTER TABLE `scooters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `warranty`
--
ALTER TABLE `warranty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
