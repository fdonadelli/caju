-- public.accountbenefits definition

-- Drop table

-- DROP TABLE public.accountbenefits;

CREATE TABLE public.accountbenefits (
	id_account varchar NULL,
	id_benefit_type varchar(255) NULL,
	amount float8 NULL
);

-- public.accounts definition

-- Drop table

-- DROP TABLE public.accounts;

CREATE TABLE public.accounts (
	id varchar NULL,
	holdername varchar NULL
);

-- public.benefits definition

-- Drop table

-- DROP TABLE public.benefits;

CREATE TABLE public.benefits (
	id varchar NULL,
	"idType" varchar NULL,
	mcc varchar NULL,
	description varchar NULL
);
