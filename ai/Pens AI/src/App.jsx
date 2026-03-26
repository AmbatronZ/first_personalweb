import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo 👋, saya AI. Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Tambahkan pesan user
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // (sementara) tambahkan balasan dummy
    setMessages([
      ...newMessages,
      { role: "assistant", content: "Oke, saya menerima pesanmu: " + input },
    ]);

    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold shadow">
        🤖 AI Chat
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-3 rounded-2xl ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-300 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t flex gap-2 bg-white">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
