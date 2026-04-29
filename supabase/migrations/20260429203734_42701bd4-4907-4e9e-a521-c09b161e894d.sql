-- Add display_order column to control manual ordering of essays
ALTER TABLE public.essays
ADD COLUMN display_order INTEGER NOT NULL DEFAULT 0;

-- Initialize display_order based on current published_at order (newest first = lowest order)
WITH ordered AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY published_at DESC) AS rn
  FROM public.essays
)
UPDATE public.essays e
SET display_order = ordered.rn
FROM ordered
WHERE e.id = ordered.id;

CREATE INDEX idx_essays_display_order ON public.essays(display_order);