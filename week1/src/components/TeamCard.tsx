import React, {useState} from 'react';

interface CardProps {
    name: string;
    role: string;
}

export function TeamCard ({name, role}:CardProps) {
    const [votes , setVotes] = useState(0);

    return (
        <div className = "bg-white rounded-2x1 shadow-lg p-8 max-w-sm border border-gray-100 text-center">
            <h2 className = "text-2x1 font-bold text-slate-800">{name}</h2>
            <p className ="text-slate-500 font-medium mb-6">{role}</p>
            <button
            onClick={() => setVotes((prev) => prev + 1)}
            className="w-full bg-pink-400 text-white-600 font-bold py-3 rounded-x1 hover:bg-pink-100 flex justify-center gap-2 transition-colors"
            >
                <span>Vote</span>
                <span>{votes}</span>
            </button>
        </div>
    );
}
