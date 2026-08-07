# Scalable E-Commerce Platform

A scalable e-commerce backend platform built with a TypeScript monorepo architecture.

The project demonstrates a production-oriented microservice architecture with independent services, shared packages, centralized database management, and Prisma-powered PostgreSQL integration.

Project created as part of the roadmap.sh backend projects:

https://roadmap.sh/projects/scalable-ecommerce-platform

---

# Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Services](#services)
- [Shared Packages](#shared-packages)
- [Database Architecture](#database-architecture)
- [Environment Configuration](#environment-configuration)
- [Getting Started](#getting-started)
- [Available Commands](#available-commands)
- [Development Workflow](#development-workflow)
- [Git Strategy](#git-strategy)
- [Validation](#validation)
- [Roadmap Progress](#roadmap-progress)
- [Future Improvements](#future-improvements)

---

# Overview

Scalable E-Commerce Platform is a backend system designed using a modular microservice architecture.

The main goal of this project is to build a scalable foundation similar to real-world e-commerce platforms where each business domain is isolated into an independent service.

The project uses a monorepo approach where multiple applications and shared packages coexist while maintaining clear separation of responsibilities.

Main architectural principles:

- Independent services
- Shared reusable packages
- Type-safe development
- Centralized database layer
- Scalable project structure
- Production-oriented workflow

---

# Architecture

The project follows a service-oriented architecture.

High-level overview:

~~~text
                         Client Applications

                                  |
                                  |

                           API Gateway Layer

                                  |
                                  |

        -------------------------------------------------

        |              |             |          |        |

        v              v             v          v        v


     User         Product          Cart      Order   Payment
   Service       Service        Service    Service  Service


                                  |

                                  v


                         Notification Service


                                  |

                                  v


                     Shared Database Package


                                  |

                                  v


                          PostgreSQL Database
~~~

Each service is responsible for a specific business domain.

Shared functionality is extracted into reusable packages.

---

# Tech Stack

## Runtime

- Node.js
- TypeScript

## Backend Framework

- Fastify

## Database

- PostgreSQL
- Prisma ORM
- pg

## Monorepo

- npm workspaces

## Development Tools

- ESLint
- Prettier
- TypeScript Compiler
- tsx

---

# Project Structure

~~~text
scalable-e-commerce-platform/

├── apps/
│
│   ├── user-service/
│   │
│   ├── product-service/
│   │
│   ├── cart-service/
│   │
│   ├── order-service/
│   │
│   ├── payment-service/
│   │
│   └── notification-service/
│
├── packages/
│
│   ├── database/
│   │
│   ├── logger/
│   │
│   └── config/
│
├── package.json
├── tsconfig.json
├── eslint.config.js
├── .gitignore
└── README.md
~~~

---

# Services

## User Service

Responsible for user-related functionality.

Current responsibilities:

- User domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Authentication
- User profiles
- Account management
- Permissions

---

## Product Service

Responsible for product catalog functionality.

Current responsibilities:

- Product domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Product management
- Categories
- Inventory management
- Product search

---

## Cart Service

Responsible for shopping cart functionality.

Current responsibilities:

- Cart domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Cart management
- Cart items
- Checkout preparation

---

## Order Service

Responsible for order processing functionality.

Current responsibilities:

- Order domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Order lifecycle management
- Order history
- Order status tracking

---

## Payment Service

Responsible for payment-related functionality.

Current responsibilities:

- Payment domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Payment processing
- Transactions
- External payment providers

---

## Notification Service

Responsible for communication workflows.

Current responsibilities:

- Notification domain ownership
- Database initialization
- Prisma Client integration

Future responsibilities:

- Email notifications
- Push notifications
- Event-driven communication

---

# Shared Packages

## Database Package

Location:

~~~text
packages/database
~~~

The database package is responsible for:

- PostgreSQL connection management
- Prisma Client generation
- Database schema ownership
- Database migrations


Structure:

~~~text
packages/database/

├── prisma/
│
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│
│   ├── index.ts
│   └── client.ts
│
├── package.json
└── tsconfig.json
~~~

---

## Logger Package

Location:

~~~text
packages/logger
~~~

Purpose:

Centralized logging functionality shared between services.

---

## Config Package

Location:

~~~text
packages/config
~~~

Purpose:

Shared application configuration management.

---

# Database Architecture

The project uses Prisma ORM with PostgreSQL.

Database ownership belongs to:

~~~text
packages/database
~~~

All services consume the shared Prisma Client.

Database flow:

~~~text
Service

   |

   v

@ecommerce/database

   |

   v

Prisma Client

   |

   v

PostgreSQL
~~~

---

# Prisma Commands

Generate Prisma Client:

~~~bash
npm run --workspace @ecommerce/database prisma:generate
~~~

Create and apply migrations:

~~~bash
npm run --workspace @ecommerce/database prisma:migrate
~~~

---

# Environment Configuration

Database configuration example:

~~~env
DATABASE_URL="postgresql://postgres:postgres@localhost:5434/ecommerce?schema=public"
~~~

Environment files:

~~~text
packages/database/.env
packages/database/.env.example
~~~

The `.env` file should never be committed.

---

# Getting Started

## Requirements

Install:

- Node.js 20+
- npm 11+
- PostgreSQL


---

## Install Dependencies

Run from project root:

~~~bash
npm install
~~~

---

## Database Setup

Generate Prisma Client:

~~~bash
npm run --workspace @ecommerce/database prisma:generate
~~~

Run database migrations:

~~~bash
npm run --workspace @ecommerce/database prisma:migrate
~~~

---

## Run Validation

Check TypeScript and ESLint:

~~~bash
npm run check
~~~

Build the project:

~~~bash
npm run build
~~~

---

# Available Commands

## Root Commands

Type checking:

~~~bash
npm run typecheck
~~~

Lint:

~~~bash
npm run lint
~~~

Formatting:

~~~bash
npm run format
~~~

Full validation:

~~~bash
npm run check
~~~

Build:

~~~bash
npm run build
~~~

---

## Workspace Commands

Example:

~~~bash
npm run --workspace @ecommerce/user-service typecheck
~~~

Build specific service:

~~~bash
npm run --workspace @ecommerce/user-service build
~~~

---

# Development Workflow

The project follows a feature-based Git workflow.

Branch structure:

~~~text
main

 |

dev

 |

feature/*
~~~

Every feature is developed in an isolated branch.

Development process:

1. Create feature branch from dev
2. Implement changes
3. Run validation commands
4. Commit changes
5. Push branch
6. Open Pull Request
7. Merge into dev

---

# Git Strategy

Branch naming convention:

~~~text
feature/database-schema-foundation

feature/prisma-client-integration

feature/user-service-prisma-migration

feature/project-documentation
~~~

Commit convention:

~~~text
feat: add prisma integration

fix: resolve database connection issue

docs: update project documentation
~~~

---

# Validation

Before merging any feature, the project must pass:

## TypeScript Validation

~~~bash
npm run check
~~~

Includes:

- Type checking
- ESLint validation


## Build Validation

~~~bash
npm run build
~~~

Ensures all packages compile successfully.

---

# Roadmap Progress

## Completed

## Project Foundation

Completed:

- Monorepo initialization
- npm workspace configuration
- TypeScript configuration
- ESLint configuration
- Prettier configuration


## Service Layer

Implemented services:

- User Service
- Product Service
- Cart Service
- Order Service
- Payment Service
- Notification Service


## Database Layer

Completed:

- PostgreSQL integration
- Shared database package
- Prisma ORM setup
- Prisma schema
- Database migrations
- Prisma Client generation


## Prisma Migration

Completed:

- User Service Prisma integration
- Product Service Prisma integration
- Cart Service Prisma integration
- Order Service Prisma integration
- Payment Service Prisma integration
- Notification Service Prisma integration

---

# Future Improvements

## API Layer

Planned:

- REST API endpoints
- OpenAPI documentation
- Request validation
- API versioning


## Authentication

Planned:

- JWT authentication
- Refresh tokens
- Role-based access control


## Messaging

Planned:

- Event-driven architecture
- Message broker integration
- Async service communication


## Infrastructure

Planned:

- Docker containers
- CI/CD pipeline
- Kubernetes deployment
- Cloud infrastructure


## Observability

Planned:

- Centralized logging
- Metrics collection
- Distributed tracing


## Testing

Planned:

- Unit testing
- Integration testing
- End-to-end testing

---

# License

This project is intended for educational and portfolio purposes.