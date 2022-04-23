package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/template/html"
	"nated.io/nate/nated.ca/middleware"
	"nated.io/nate/nated.ca/routes"
)

func main() {
	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(cors.New())

	nated := app.Group("/", middleware.Log)
	nated.Static("/assets", "./assets")
	nated.Get("/", routes.Home)

	app.Listen(":8080")
}
