import { z } from 'zod';

export const addressFormSchema = z.object({
  zip: z
    .string({ required_error: 'CEP é obrigatório' })
    .length(8, { message: 'CEP deve conter 8 caracteres' }),
  street: z
    .string({ required_error: 'Rua é obrigatório' })
    .length(2, { message: 'Rua é obrigatório' }),
  number: z
    .number({
      required_error: 'Número é obrigatório',
      invalid_type_error: 'Número é obrigatório',
    })
    .min(0),
  compliment: z.string().nullable(),
  neighborhood: z
    .string({ required_error: 'Bairro é obrigatório' })
    .length(2, { message: 'Bairro é obrigatório' }),
  city: z.string({ required_error: 'Cidade é obrigatório' }),
  state: z
    .string({ required_error: 'UF é obrigatório' })
    .length(2, { message: 'UF inválida' }),
});

export type AddressFormData = z.infer<typeof addressFormSchema>;
