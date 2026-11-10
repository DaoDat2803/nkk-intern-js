export function calculateAverage(scores) {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}