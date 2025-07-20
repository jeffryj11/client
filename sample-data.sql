-- Create users
insert into users (id, email, full_name, role)
values
  ('00000000-aaaa-bbbb-cccc-000000000001', 'admin@example.com', 'Admin User', 'admin'),
  ('00000000-aaaa-bbbb-cccc-000000000002', 'applicant1@example.com', 'John Doe', 'applicant'),
  ('00000000-aaaa-bbbb-cccc-000000000003', 'applicant2@example.com', 'Jane Smith', 'applicant');

-- Create sample applications
insert into applications (id, user_id, program_type, status, created_at)
values
  ('app-0001', '00000000-aaaa-bbbb-cccc-000000000002', 'HOMES', 'submitted', now()),
  ('app-0002', '00000000-aaaa-bbbb-cccc-000000000003', 'HEAR', 'under_review', now());