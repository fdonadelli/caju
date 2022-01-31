INSERT INTO public.accounts (id, holdername) VALUES ('1', 'User 1');
INSERT INTO public.accounts (id, holdername) VALUES ('2', 'User 2');

INSERT INTO public.benefits (id, "idType", mcc, description) VALUES ('1', 'MEAL', '8115', 'Restaurante, bar');
INSERT INTO public.benefits (id, "idType", mcc, description) VALUES ('2', 'FOOD', '8215', 'Mercado');
INSERT INTO public.benefits (id, "idType", mcc, description) VALUES ('3', 'CULTURE', '8315', 'Livraria');


INSERT INTO public.accountbenefits (id_account, id_benefit_type, amount) VALUES ('1', 'MEAL', 500);
INSERT INTO public.accountbenefits (id_account, id_benefit_type, amount) VALUES ('1', 'FOOD', 500);
INSERT INTO public.accountbenefits (id_account, id_benefit_type, amount) VALUES ('1', 'CULTURE', 500);