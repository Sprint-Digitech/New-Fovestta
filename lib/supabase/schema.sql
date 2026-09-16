-- Fovestta admin dashboard schema
-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).
--
-- All access from the app goes through the service role key on the server
-- (never the anon key from the browser), so Row Level Security is enabled
-- with no policies attached -- this denies all access via the public API
-- and anon/authenticated keys, while the service role key bypasses RLS
-- entirely as intended.

create extension if not exists "pgcrypto";

create table if not exists demo_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text not null,
  employees_range text not null,
  business_email text not null,
  contact_number text not null,
  demo_date date not null,
  demo_time time not null,
  created_at timestamptz not null default now()
);

alter table demo_requests enable row level security;

create table if not exists support_tickets (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company_name text not null,
  fovestta_user_id text not null,
  issue_category text not null,
  priority_level text not null,
  subject text not null,
  description text not null,
  status text not null default 'open' check (status in ('open', 'resolved')),
  created_at timestamptz not null default now()
);

alter table support_tickets enable row level security;

create table if not exists seo_settings (
  id uuid primary key default gen_random_uuid(),
  page_path text not null unique,
  title text,
  description text,
  og_image_url text,
  updated_at timestamptz not null default now()
);

alter table seo_settings enable row level security;

create index if not exists demo_requests_created_at_idx on demo_requests (created_at desc);
create index if not exists support_tickets_created_at_idx on support_tickets (created_at desc);
create index if not exists support_tickets_status_idx on support_tickets (status);
