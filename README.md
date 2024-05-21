# Hikerdo-API

Project for hikerdo app utilizing Hono, Zod, DrizzleORM, OpenAPI, hono-event-emitter, specifically tailored to run on cloudflare workers.

## Development

1. Run `wrangler dev` to start a local instance of the API.
2. Open `http://localhost:8787/docs` in your browser to see the Swagger interface where you can try the endpoints.
3. Changes made in the `src/` folder will automatically trigger the server to reload, you only need to refresh the Swagger interface.

## Database

### Migrations:
https://orm.drizzle.team/kit-docs/commands#generate-migrations

- To generate new migration: `pnpm migration:generate`
- To apply migrations to the DB: `pnpm migration:migrate`

Dangerous: 
- To push current schema to database without using migrations: `drizzle-kit push`

## REST API

- Swager UI: is available at root URL "/docs"
