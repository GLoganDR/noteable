create table tags(
    id serial primary key,
    name varchar(255) unique,
    create_at timestamp default now()
);