import { z } from 'zod';

export const addressFormSchema = z.object({
  zip: z.number({ required_error: 'CEP é obrigatório' }).gte(0).lte(99999999),
  street: z
    .string({ required_error: 'Rua é obrigatório' })
    .min(1, { message: 'Rua é obrigatório' }),
  number: z
    .number({
      required_error: 'Número é obrigatório',
      invalid_type_error: 'Número é obrigatório',
    })
    .min(0),
  compliment: z.string().optional(),
  neighborhood: z
    .string({ required_error: 'Bairro é obrigatório' })
    .min(1, { message: 'Rua é obrigatório' }),

  city: z
    .string({ required_error: 'Cidade é obrigatório' })
    .min(1, { message: 'Rua é obrigatório' }),
  state: z
    .string({ required_error: 'UF é obrigatório' })
    .length(2, { message: 'UF inválida' }),
});

export type AddressFormData = z.infer<typeof addressFormSchema>;
