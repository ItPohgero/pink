export function useRandom(e: number = 10) {
    return (Math.random() + 1).toString(e).substring(7)
}
