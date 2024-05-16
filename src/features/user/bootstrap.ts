import type { Env, Vars } from '@/types';
import type { OpenAPIHono } from '@hono/zod-openapi';
import { handler as getUserHandler, route as getUserRoute } from './endpoints/get-user';

export default function (
  app: OpenAPIHono<{
    Bindings: Env;
    Variables: Vars;
  }>,
) {
  app.openapi(getUserRoute, getUserHandler);
}
