export class UnityVersion {
    constructor(private first: Number, private second: Number, private third: Number, private fourth: Number) {

    }

    static Parse(text: String): UnityVersion {
        const pattern = /^(\d+)\.(\d+)\.(\d+)f(\d+)$/m;

        const match = text.match(pattern);
        if (match == null) {
            throw new Error("文字列がUnityのバージョンパターンに一致しません。");
        }

        let numbers: Number[] = new Array(4);
        for (let i = 0; i < match.length; i++) {
            numbers[i] = parseInt(match[i + 1]);
        }

        return new UnityVersion(numbers[0], numbers[1], numbers[2], numbers[3]);
    }
}