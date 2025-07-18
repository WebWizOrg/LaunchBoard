/**
 * @fileOverview Rewrites resume bullet points using an AI assistant to improve clarity and impact.
 *
 * - rewriteResumeBulletPoints - A function that takes a resume bullet point and rewrites it for clarity and impact.
 * - RewriteResumeBulletPointsInput - The input type for the rewriteResumeBulletPoints function.
 * - RewriteResumeBulletPointsOutput - The return type for the rewriteResumeBulletPoints function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteResumeBulletPointsInputSchema = z.object({
  bulletPoint: z
    .string()
    .describe('The resume bullet point to be rewritten.'),
});
export type RewriteResumeBulletPointsInput = z.infer<
  typeof RewriteResumeBulletPointsInputSchema
>;

const RewriteResumeBulletPointsOutputSchema = z.object({
  rewrittenBulletPoint: z
    .string()
    .describe('The rewritten resume bullet point.'),
});
export type RewriteResumeBulletPointsOutput = z.infer<
  typeof RewriteResumeBulletPointsOutputSchema
>;

export async function rewriteResumeBulletPoints(
  input: RewriteResumeBulletPointsInput
): Promise<RewriteResumeBulletPointsOutput> {
  return rewriteResumeBulletPointsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteResumeBulletPointsPrompt',
  input: {schema: RewriteResumeBulletPointsInputSchema},
  output: {schema: RewriteResumeBulletPointsOutputSchema},
  prompt: `You are an AI assistant specializing in rewriting resume bullet points to improve their clarity and impact.

  Please rewrite the following bullet point to be more effective:

  Bullet Point: {{{bulletPoint}}}`,
});

const rewriteResumeBulletPointsFlow = ai.defineFlow(
  {
    name: 'rewriteResumeBulletPointsFlow',
    inputSchema: RewriteResumeBulletPointsInputSchema,
    outputSchema: RewriteResumeBulletPointsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
