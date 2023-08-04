import { z } from 'zod';

const conditionFormSchema = z.object({
  book: z.string(),
  weather: z.string(),
  mood: z.string(),
  other: z.string(),
});

const partialConditionForm = conditionFormSchema.partial();

export default partialConditionForm;
