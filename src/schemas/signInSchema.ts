import {z} from 'zod'

export const signInSchema = z.object({
    // i am using the term identifier for email/username so do not get confused 
    identifier:z.string(),
    password: z.string(),
})


