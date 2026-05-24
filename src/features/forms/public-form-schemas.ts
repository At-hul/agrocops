import { z } from 'zod'

const phone = z.string().min(10, 'Enter a valid phone number')
const honeypot = z.string().max(0, 'Spam detected').optional()

export const publicLeadSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone,
  crop_type: z.string().optional(),
  message: z.string().optional(),
  honeypot,
})

export const farmerRegistrationSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone,
  village: z.string().min(2, 'Village is required'),
  district: z.string().min(2, 'District is required'),
  crops: z.string().optional(),
  farm_size: z.string().optional(),
  honeypot,
})

export const eventRegistrationSchema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone,
  village: z.string().optional(),
  district: z.string().optional(),
  crops: z.string().optional(),
  attendee_count: z.coerce.number().min(1).default(1),
  honeypot,
})

export const newsletterSchema = z.object({
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  phone: z.string().optional(),
  honeypot,
}).refine((value) => Boolean(value.email || value.phone), {
  message: 'Enter email or phone',
  path: ['email'],
})

export const successStorySubmissionSchema = z.object({
  farmer_name: z.string().min(2, 'Farmer name is required'),
  phone: z.string().optional(),
  village: z.string().optional(),
  district: z.string().optional(),
  crop: z.string().optional(),
  story: z.string().min(10, 'Story is required'),
  image_url: z.string().optional(),
  honeypot,
})
