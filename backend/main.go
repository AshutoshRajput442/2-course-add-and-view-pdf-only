package main

import (
	"backend/config"
	"backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Database
	config.ConnectDB()

	// Create a Gin router
	router := gin.Default()

	// Enable CORS for frontend (http://localhost:5173)
	router.Use(cors.Default())

	// Serve uploaded files
	router.Static("/uploads", "./uploads")

	// API Routes
	router.POST("/add-course", handlers.AddCourse)
	router.GET("/get-courses", handlers.GetCourses)

	// Start the server
	router.Run(":8080")
}
