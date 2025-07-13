-- Table: rebates
create table if not exists rebates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  amount numeric,
  eligibility text,
  active boolean default true
);

-- Table: products
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  brand text,
  price numeric,
  rebate_id uuid references rebates(id)
);

-- Table: applications
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  user_email text not null,
  status text default 'submitted',
  product_id uuid references products(id),
  rebate_id uuid references rebates(id),
  created_at timestamp with time zone default current_timestamp
);
