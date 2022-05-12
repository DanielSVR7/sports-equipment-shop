USE [master]
GO

/****** Object:  Database [sports_equipment_shop]    Script Date: 12.05.2022 22:31:24 ******/
CREATE DATABASE [sports_equipment_shop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'sports_equipment_shop', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\sports_equipment_shop.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'sports_equipment_shop_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\sports_equipment_shop_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sports_equipment_shop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [sports_equipment_shop] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET ARITHABORT OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [sports_equipment_shop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [sports_equipment_shop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET  DISABLE_BROKER 
GO

ALTER DATABASE [sports_equipment_shop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [sports_equipment_shop] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [sports_equipment_shop] SET  MULTI_USER 
GO

ALTER DATABASE [sports_equipment_shop] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [sports_equipment_shop] SET DB_CHAINING OFF 
GO

ALTER DATABASE [sports_equipment_shop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [sports_equipment_shop] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [sports_equipment_shop] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [sports_equipment_shop] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [sports_equipment_shop] SET QUERY_STORE = OFF
GO

ALTER DATABASE [sports_equipment_shop] SET  READ_WRITE 
GO

