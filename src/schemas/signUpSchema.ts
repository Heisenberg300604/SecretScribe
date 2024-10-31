import { z } from 'zod'

// Zod is a TypeScript-first schema declaration and validation library for JavaScript and TypeScript.
// Zod provides a range of built-in validation options (e.g., string length, number ranges, arrays, and enums) and also allows you to write custom validations.
// provides a range of methods that make it a powerful tool for data validation, transformation, and error handling in JavaScript and TypeScript projects.

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast of 2 characters ! ")
    .max(20, 'Username must be no more than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const signUpSchema = z.object({
    username: usernameValidation,

    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
});