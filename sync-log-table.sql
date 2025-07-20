create table if not exists doe_sync_logs (
  id uuid primary key default uuid_generate_v4(),
  application_id uuid references applications(id) on delete cascade,
  attempted_at timestamp default now(),
  status text,
  response jsonb
);