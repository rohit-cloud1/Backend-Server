import faqData from "./chatBotQ.js";

// Simple text match
function findAnswer(userQuestion) {
    const qWords = userQuestion.toLowerCase().split(/\s+/);

    // Highest matched question
    let bestMatch = null;
    let maxMatches = 0;

    faqData.forEach(item => {
        const itemWords = item.question.toLowerCase().split(/\s+/);
        // Count how many words from user question appear in itemWords
        const matches = qWords.filter(w => itemWords.includes(w)).length;

        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = item;
        }
    });

    if (bestMatch && maxMatches > 0) {
        return bestMatch.answer;
    } else {
        return "Mujhe maaf kijiye, lekin main aisi baaton mein madad nahi kar sakta. Aapko kisi aur cheez mein madad chahiye?.";
    }
}

// API Route

const chatBot = (req, res) => {
    const { question } = req.body;
    const answer = findAnswer(question);
    res.json({ answer });
}

export default chatBot;