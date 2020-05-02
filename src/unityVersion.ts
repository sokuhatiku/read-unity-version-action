export class UnityVersion {
  private constructor(
    private first: Number,
    private second: Number,
    private third: Number,
    private fourth: Number,
    private releaseType: string
  ) {}

  toString(): string {
    return `${this.first}.${this.second}.${this.third}${this.releaseType}${this.fourth}`
  }

  static Parse(text: String): UnityVersion {
    const pattern = /^(\d+)\.(\d+)\.(\d+)([fba])(\d+)$/m

    const match = text.match(pattern)
    if (match == null) {
      throw new Error(
        'version value did not match avaiable/supported version format.'
      )
    }

    const first = parseInt(match[1])
    const second = parseInt(match[2])
    const third = parseInt(match[3])
    const releaseType = match[4].toString()
    const fourth = parseInt(match[5])

    return new UnityVersion(first, second, third, fourth, releaseType)
  }
}
