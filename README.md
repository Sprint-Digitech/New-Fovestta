# Fovestta HRMS

Marketing website for Fovestta, built with [Next.js](https://nextjs.org) (App Router).

## Running the code

Run `npm install` to install dependencies.

Run `npm run dev` to start the development server at http://localhost:3000.

Run `npm run build` to create a production build, and `npm start` to serve it.

## Admin dashboard setup

The site has an admin dashboard at `/admin` for viewing demo requests and support
tickets, and an editable SEO panel, backed by Supabase.

1. **Create a Supabase project** at [supabase.com](https://supabase.com) if you
   don't have one yet.
2. **Run the schema**: open the Supabase SQL Editor and run the contents of
   [`lib/supabase/schema.sql`](lib/supabase/schema.sql). This creates the
   `demo_requests`, `support_tickets`, and `seo_settings` tables.
3. **Get your keys**: in your Supabase project, go to
   Project Settings -> API. You need the **Project URL** and the
   **`service_role` secret key** (not the `anon` public key -- the service
   role key is required for the admin dashboard and form submissions to work,
   and must never be exposed to the browser).
4. **Set environment variables**. Copy `.env.example` to `.env.local` and fill in:
   - `SUPABASE_URL` -- your project URL
   - `SUPABASE_SERVICE_ROLE_KEY` -- the service role secret key from step 3
   - `ADMIN_PASSWORD` -- the password used to log in at `/admin-auth`
   - `ADMIN_SESSION_SECRET` -- a random secret for signing the admin login
     session; generate one with `openssl rand -base64 32`
5. **Set the same variables in Vercel** (Project Settings -> Environment
   Variables) so the deployed site can connect to Supabase and admin login
   works in production.

Once configured, the Demo and Support forms on the live site save real
submissions to Supabase, and `/admin` shows them (protected by the admin
password).
