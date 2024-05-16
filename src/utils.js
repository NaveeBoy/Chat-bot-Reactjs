import moment from "moment/moment"

// Array of random responses
const randomResponses = [
    "Hmm, interesting.",
    "I see...",
    "Tell me more!",
    "Fascinating!",
    "That's quite intriguing!",
    "I'm not sure what to say about that.",
    "Interesting point of view!",
    "Hmm, I'll have to think about that.",
    "I'm learning something new today!",
];

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return `Hi! How are you today?`

    else if (text.includes('how are you') || text.includes('how\'s it going'))
        return `I'm doing well, thank you! How about yourself?`

    else if (text.includes('date'))
        return `Today's date is ${moment().format('MMMM Do YYYY')}`

    else if (text.includes('time'))
        return `The current time is ${moment().format('h:mm:ss a')}`

    else if (text.includes('google link')|| text.includes('google'))
        return `Sure, here is a link to Google: https://www.google.com`

    else if (text.includes('interest'))
        return `The bank interest rate is 8.7% annually.`

    else if (text.includes('thank you'))
        return `You're welcome!`

    else if (text.includes('weather'))
        return `I'm sorry, I can't provide weather information at the moment.`

    else if (text.includes('joke'))
        return `Why don't scientists trust atoms? Because they make up everything!`

    else if (text.includes('movie recommendation'))
        return `Have you seen "Inception"? It's a mind-bending thriller!`

    else if (text.includes('goodbye') || text.includes('bye'))
        return `Goodbye! Have a great day!`

    // Return a random response if no specific condition is met
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}
