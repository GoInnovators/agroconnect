# API Development Guide for `/app/api/v1`

This guide is for contributors to the project, explaining how to create and manage API routes in the `/app/api/v1` directory using Next.js. The project uses Next.js App Router, and all API routes are defined under `/app/api/v1`.

## Prerequisites

- Node.js (version 14 or higher) installed.
- Familiarity with JavaScript, Next.js, and RESTful APIs.
- Access to the project repository and a code editor (e.g., VS Code).
- The project’s development environment set up (run `npm install` if you haven’t already).

## Overview

In this project, API routes are located in the `/app/api/v1` directory. Each file or dynamic route in this directory defines an endpoint under the `/api/v1` base path. For example, a file at `/app/api/v1/users/route.js` corresponds to the endpoint `/api/v1/users`.

## Creating an API Route

1. **Add a new route**:

   - Create a new file or folder in `/app/api/v1`. For example, to create an endpoint `/api/v1/example`, create a file named `route.js` in `/app/api/v1/example/`.
   - Define the route handler in `route.js`. Here’s a sample:

     ```javascript
     // app/api/v1/example/route.js
     import { NextResponse } from "next/server";

     export async function GET() {
       return NextResponse.json({ message: "Hello from /api/v1/example!" });
     }
     ```

2. **Handle multiple HTTP methods**:

   - You can define handlers for different HTTP methods (GET, POST, etc.) in the same file. Example:

     ```javascript
     // app/api/v1/example/route.js
     import { NextResponse } from "next/server";

     export async function GET() {
       return NextResponse.json({ message: "This is a GET request" });
     }

     export async function POST(request) {
       const body = await request.json();
       const { name } = body;
       return NextResponse.json({ message: `Hello, ${name || "Guest"}!` });
     }
     ```

3. **Dynamic routes**:

   - To create dynamic routes (e.g., `/api/v1/users/[id]`), create a folder with square brackets, like `/app/api/v1/users/[id]/route.js`. Example:

     ```javascript
     // app/api/v1/users/[id]/route.js
     import { NextResponse } from "next/server";

     export async function GET(request, { params }) {
       const { id } = params;
       return NextResponse.json({ userId: id, message: `Fetching user ${id}` });
     }
     ```

## Testing API Routes

1. **Run the development server**:

   - Ensure the development server is running:
     ```bash
     npm run dev
     ```
   - The API will be available at `http://localhost:3000/api/v1`.

2. **Test endpoints**:

   - Use a browser, Postman, or `curl` to test your endpoints. For example:
     - GET request: `http://localhost:3000/api/v1/example`
     - POST request:
       ```bash
       curl -X POST http://localhost:3000/api/v1/example -H "Content-Type: application/json" -d '{"name":"Alice"}'
       ```
     - Dynamic route: `http://localhost:3000/api/v1/users/123`

3. **Expected responses**:
   - Ensure your API returns appropriate status codes (e.g., 200 for success, 400 for bad requests, 405 for method not allowed).
   - Example response for a GET request to `/api/v1/example`:
     ```json
     { "message": "This is a GET request" }
     ```

## Best Practices

- **Error handling**: Always include error handling in your routes. Example:
  ```javascript
  export async function POST(request) {
    try {
      const body = await request.json();
      if (!body.name) {
        return NextResponse.json(
          { error: "Name is required" },
          { status: 400 }
        );
      }
      return NextResponse.json({ message: `Hello, ${body.name}!` });
    } catch (error) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  }
  ```
- **Organize routes**: Keep related routes in subdirectories (e.g., `/app/api/v1/auth/` for authentication-related endpoints).
- **Use TypeScript (if applicable)**: If the project uses TypeScript, ensure your route files have a `.ts` extension and include proper type annotations.
- **Environment variables**: Store sensitive data (e.g., database credentials) in a `.env.local` file and access them via `process.env`.
- **Testing**: Write unit tests for your API routes using a framework like Jest, located in the `/tests` directory (if applicable).

## Contributing

- Ensure your API routes follow the project’s coding standards.
- Test your endpoints thoroughly before submitting a pull request.
- Update this README if you add new endpoints or change the API structure significantly.

## Troubleshooting

- **Route not found**: Ensure the file is named `route.js` and is in the correct directory under `/app/api/v1`.
- **Method not allowed**: Verify that the exported function (e.g., `GET`, `POST`) matches the HTTP method you’re testing.
- **Server errors**: Check the terminal output for errors and ensure all dependencies are installed (`npm install`).

For further details on Next.js API routes, refer to the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).
