"use server";
import { rewriteResumeBulletPoints } from "@/ai/flows/rewrite-bullet-points";

export async function getAiEnhancedBulletPoint(bulletPoint: string) {
    try {
        const result = await rewriteResumeBulletPoints({ bulletPoint });
        return { rewrittenBulletPoint: result.rewrittenBulletPoint };
    } catch (error) {
        console.error(error);
        return { error: "Failed to rewrite bullet point. Please try again." };
    }
}
