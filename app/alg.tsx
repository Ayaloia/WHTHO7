export function ReservoirSampling<T>(arr: T[], k: number): T[] {
    let reservoir = arr.slice(0, k);
    for (let i = k; i < arr.length; i++) {
        const j = Math.floor(Math.random() * i);
        if (j < k) {
            reservoir[j] = arr[i];
        }
    }
    return reservoir;
}
