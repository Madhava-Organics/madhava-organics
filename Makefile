# Makefile for running the project

.PHONY: help install dev preview stop

# Default target
help:
	@echo "Available targets:"
	@echo "  make install          - Install dependencies"
	@echo "  make dev              - Run development server (http://localhost:3000)"
	@echo "  make preview          - Preview production build (http://localhost:3000)"
	@echo "  make stop             - Stop any running dev servers"
	@echo "  make build            - Build the project for production"
	@echo "  make clean            - Remove build artifacts and dependencies"
	@echo "  make clean-build      - Remove build artifacts and build"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Build the project
build: install
	@echo "Building the project..."
	npm run build

# Clean build artifacts
clean-build: clean build

# Clean everything (build artifacts and node_modules)
clean:
	@echo "Cleaning everything..."
	rm -rf node_modules
	rm -f package-lock.json
	rm -rf dist

# Run development server
dev: install
	@echo "Starting development server on http://localhost:3000..."
	npm run dev

# Preview production build
preview:
	@echo "Starting preview server on http://localhost:3000..."
	@echo "Note: You need to build the project first (use Makefile.build)"
	npm run preview

# Stop running servers (kills processes on port 3000)
stop:
	@echo "Stopping servers on port 3000..."
	@lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No process found on port 3000"
