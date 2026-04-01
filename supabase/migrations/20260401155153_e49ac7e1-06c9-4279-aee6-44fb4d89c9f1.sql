
-- Create essays table
CREATE TABLE public.essays (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image_url TEXT,
  linkedin_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.essays ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read essays" ON public.essays
  FOR SELECT USING (true);

-- Only authenticated users can manage essays
CREATE POLICY "Authenticated users can insert essays" ON public.essays
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update essays" ON public.essays
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete essays" ON public.essays
  FOR DELETE TO authenticated USING (true);

-- Storage bucket for essay images
INSERT INTO storage.buckets (id, name, public) VALUES ('essay-images', 'essay-images', true);

-- Storage policies
CREATE POLICY "Anyone can view essay images" ON storage.objects
  FOR SELECT USING (bucket_id = 'essay-images');

CREATE POLICY "Authenticated users can upload essay images" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'essay-images');

CREATE POLICY "Authenticated users can update essay images" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'essay-images');

CREATE POLICY "Authenticated users can delete essay images" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'essay-images');
