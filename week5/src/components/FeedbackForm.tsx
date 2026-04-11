import React, {useState} from "react";
import { sendFeedback } from "../services/api";

export function FeedbackForm() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseId, setResponseId] = useState<number | null>(null);

    const submitFeedback =async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
        const data = await sendFeedback(title, message);

        setResponseId(data.id);
        setIsSubmitted(true);
    } catch (error) {
        console.log("Error",error);
    }
};

    if(isSubmitted === true) {
        return(
            <p>Thank you for your feedback! Your message was saved with ID: {responseId}</p>
        )
    }

    return (
        <form className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg border">
            <h2 className="text-2xl font-bold mb-2 text-center">Feedback</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <textarea
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold">
                Submit
            </button>
        </form>
    )
}