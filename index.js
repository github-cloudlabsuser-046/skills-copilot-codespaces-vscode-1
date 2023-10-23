import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownEditor;

function reverseAndCapitalize(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const sentence = 'hello world';
const reversedAndCapitalized = reverseAndCapitalize(sentence);
console.log(reversedAndCapitalized); // Output: "World hello"
const data = [
    { id: 1, name: "John Doe", age: 32 },
    { id: 2, name: "Jane Doe", age: 28 },
    { id: 3, name: "Bob Smith", age: 45 },
    { id: 4, name: "Mary Johnson", age: 38 },
];

const names = data.map((item) => item.name);
console.log(names); // Output: ["John Doe", "Jane Doe", "Bob Smith", "Mary Johnson"]
const data2 = [
    [
        { id: 1, name: "John", age: 32 },
        { id: 2, name: "Jane", age: 28 },
    ],
    [
        { id: 3, name: "Bob", age: 45 },
        { id: 4, name: "Mary", age: 38 },
    ],
];

const names2 = data2.flatMap((arr) => arr.map((obj) => obj.name));
console.log(names2); // Output: ["John", "Jane", "Bob", "Mary"]
