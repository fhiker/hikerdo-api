import type { ErrorResponseSchema } from '@/features/shared/models/error-respone.schema';
import type { z } from '@hono/zod-openapi';
import type { Context } from 'hono';

export const unauthorizedResponse = (c: Context, message?: string) => {
  const url = new URL(c.req.url);
  c.status(401);
  return c.json<z.infer<typeof ErrorResponseSchema>, 401>({
    errors: [
      {
        status: 401,
        code: 'UNAUTHORIZED',
        title: 'Unauthorized',
        details: message ?? 'You need to be authenticated to access this resource',
        links: {
          about: `https://${url.origin}/docs/errors/UNAUTHORIZED`,
          type: `https://${url.origin}/docs/errors`,
        },
      },
    ],
  });
};
