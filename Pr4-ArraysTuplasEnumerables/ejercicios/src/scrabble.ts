/**
 * This type represenst the points of each letter in the Scrabble game
 */
export type Score = [string[], number]

/**
 * This function calculates the score of a list of words based on the Scrabble game
 * @param words - Words wich score will be calculated
 * @returns The score of the words,wich would be undefined if the word contains invalid characters
 * ```typescript
 * getScore([]) returns []
 * getScore(["kilo"]) returns undefined
 * getScore(["hola", "mundo"]) returns [7, 8]
 * ```
 */
export function getScore(words: string[]): (number | undefined)[] {
  let scores: Score[] = [
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2], 
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'Y'], 4],
    [['1', 'Q'], 5], // el 1 equivale a una CH
    [['J', '2', 'Ñ', '3', 'X'], 8],  // el 2 equivale a una LL, el 3 equivale a una RR
    [['Z'], 10]
  ]
  let points: (number | undefined)[] = []
  words.forEach(word => {
    word = word.toUpperCase()
    word = word.replace(/Á/g, "A").replace(/É/g, "E").replace(/Í/g, "I").replace(/Ó/g, "O").replace(/Ú/g, "U")
    let score: number = 0
    if (word.match(/[K, W]/g) || word.match(/[^A-Z]/g)) {
      points.push(undefined)
      return
    }
    word = word.replace(/CH/g, '1').replace(/LL/g, '2').replace(/RR/g, '3')
    word.split('').forEach(letter => {
      let scoreIndex: number = scores.findIndex(score => score[0].includes(`${letter}`))
      score += scores[scoreIndex][1]
    })
    points.push(score)
  })
  return points
}
