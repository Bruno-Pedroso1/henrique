fluxo: 
    Superadministrador (nós) adicionamos uma empresa/filiais da empresa, criamos um usuário para o dono dela (role: admin, permission: master), a partir disto ele pode cadastrar seus serviços prestados com suas respectivas caracteristicas, ele pode fazer com que outros usuários se tornem funcionários desta empresa (role: admin), com isso os funcionários podem adicionar/modificar suas agendas, horarios, valores, serviços.
    Clientes ao acessar o site (tela inicial após login) verão as empresas com quem já solicitaram agendamento de serviço, caso ele queira outra empresa/serviço, ele poderá filtrar todas as empresas cadastradas no sistema para o que ele deseja. O usuário necessita fazer o pagamento do serviço antes de fato o mesmo ser agendado, no momento que é confirmado o pagamento do agendamento, ele cadastra no calendário, e se for de preferência do cliente, diretamente no google calendar, ao clicar em cima de um evento (criado no calendário do sistema), caso for cliente, mostrará informações sobre o valor, a data de agendamento, opção para reagendar/cancelar, taxas cobradas em caso de cancelamento (em caso de cancelamento o usuário terá o estorno em créditos para gastar em qualquer serviço prestado pela mesma empresa), caso o usuário seja um funcionário, mostrará informações a respeito do cliente em vez da empresa.
    Um usuário com permission master (dono), terá como criar voucher para sua empresa, válidos em qualquer uma das filiais da mesma, os vouchers são créditos ex: o cliente compra 1000 reais em créditos por valores como 800 reais.
    Além dos donos da empresa poderem adicionar integrações (como inteligencias artificais, sistemas de notificação, modobank), métodos de pagamento e outras coisas mostradas no banco de dados abaixo.

Criação do bd:
    create table countries (
    id serial primary key,
    name varchar(40) not null unique,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table states (
    id serial primary key,
    name varchar(40) not null,
    id_country int not null,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_country) references countries(id)
);

create table cities (
    id serial primary key,
    name varchar(40) not null,
    id_state int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_state) references states(id)
);

create table addresses (
    id serial primary key,
    zip_code varchar(10) not null,
    district varchar(50) not null,
    street varchar(50) not null,
    number int not null,
    complement varchar(100) not null,
    id_city int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_city) references cities(id)
);

create table companies (
    id serial primary key,
    company_document varchar(20) unique not null,
    business_type varchar(40) not null,
    logo varchar(500) unique not null,
    business_name varchar(100) unique not null,
    phone varchar(16) not null unique,
    email varchar(80) not null unique,
    id_addresses int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_addresses) references addresses(id)
);

create table branches (
    id serial primary key,
    company_document varchar(20) unique not null,
    email varchar(80) unique not null,
    trading_name varchar(100) not null,
    business_name varchar(100) not null unique,
    id_company int not null,
    id_addresses int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_company) references companies(id),
    foreign key (id_addresses) references addresses(id)
);

create table integrations (
    id serial primary key,
    type varchar(100) not null ,
    token_api varchar(500) not null,
    id_branch int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_branch) references branches(id)
);

create table services(
    id serial primary key,
    image varchar(500) not null,
    name varchar(40) not null,
    description varchar(40) not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_branch int not null,
    foreign key (id_branch) references branches(id)
);

create table payment_methods(
    id serial primary key,
    id_branch int not null,
    id_integration int not null,
    type varchar(100) not null,
    description varchar(255) not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_branch) references branches(id),
    foreign key (id_integration) references integrations(id)
);

create table users (
    id serial primary key,
    name varchar(100) not null,
    photo varchar(500),
    tax_identification_number varchar(18) not null unique,
    phone varchar(16) not null unique,
    password_hash varchar(500),
    email varchar(80) not null unique,
    role varchar(10) not null,
    token varchar(500),
    id_addresses int,
    permission varchar(10),
    id_company int,
    specialization varchar(25),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_addresses) references addresses(id),
    foreign key (id_company) references companies(id)
);

create table user_branch (
    id serial primary key,
    id_branch int not null,
    id_user int not null,
    credits float,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table schedule (
    id serial primary key,
    service_price float not null,
    cancellation_fee float not null,
    time_to_reschedule int not null,
    id_branch int not null,
    id_user int not null,
    id_services int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_branch) references branches(id),
    foreign key (id_user) references users(id),
    foreign key (id_services) references services(id)
);

create table payments (
    id serial primary key,
    total_value float not null,
    status varchar(25) not null,
    id_user int not null,
    id_payment_method int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_user) references users(id),
    foreign key (id_payment_method) references payment_methods(id)
);

create table schedules (
    id serial primary key,
    start_time time not null,
    end_time time not null,
    week_day int not null,
    id_schedule int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_schedule) references schedule(id)
);

create table voucher (
    id serial primary key,
    credits_value float not null,
    price float not null,
    id_branch int not null,
    foreign key (id_branch) references branches(id)
);

create table scheduling (
    id serial primary key,
    data_scheduling date not null,
    status varchar(25) not null,
    time_scheduling time not null,
    id_schedule int not null,
    id_payment int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_schedule) references schedule(id),
    foreign key (id_payment) references payments(id)
);

create table payment_voucher(
    id serial primary key,
    id_payment int not null,
    id_voucher int not null,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (id_payment) references payments(id),
    foreign key (id_voucher) references voucher(id)
);

