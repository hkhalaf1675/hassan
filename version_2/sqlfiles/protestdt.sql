drop database if exists protestdt;
create database if not exists protestdt;
use protestdt;

create table if not exists eventdata(
	load_target char(100) not null,
    load_type char(100) not null,
    load_date date not null
);

