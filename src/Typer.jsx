import { useState, useRef, useEffect } from 'react'

const words = [
	"the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
	"it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
	"this", "but", "his", "by", "from", "they", "we", "say", "her", "she"
]

const TypingTest = () => {
	const [randomWords, setRandomWords] = useState('')

	useEffect(() => {
		const randomWordsArray = []
		for (let i = 0; i < 25; i++) {
			randomWordsArray.push(words[Math.floor(Math.random() * words.length)])
		}
		setRandomWords(randomWordsArray.join(' '))
	}, [])

	console.log(randomWords)

	return (
		<div>
			Typing Test
		</div>
	)
}

export default TypingTest;