CREATE TABLE public.descontos_ufv (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL CHECK (char_length(nome) BETWEEN 2 AND 150),
  matricula text CHECK (matricula IS NULL OR char_length(matricula) <= 40),
  curso text CHECK (curso IS NULL OR char_length(curso) <= 150),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 200),
  terceirizado boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.descontos_ufv TO anon, authenticated;
GRANT ALL ON public.descontos_ufv TO service_role;
ALTER TABLE public.descontos_ufv ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Qualquer pessoa pode solicitar desconto" ON public.descontos_ufv
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.limitar_descontos_ufv()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF (SELECT count(*) FROM public.descontos_ufv) >= 100 THEN
    RAISE EXCEPTION 'LIMITE_ATINGIDO';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER trg_limitar_descontos_ufv BEFORE INSERT ON public.descontos_ufv
  FOR EACH ROW EXECUTE FUNCTION public.limitar_descontos_ufv();