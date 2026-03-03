'use client';
import { useRef, useEffect } from 'react';
import AgentMessage from './AgentMessage';
import UserCodeInput from './UserCodeInput';

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Example avatars (replace with your user’s profile avatar if available)
const AVATARS = {
  assistant: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Robot/Flat/robot_flat.png",
  user: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Bust%20in%20Silhouette/Flat/bust_in_silhouette_flat.png"
};

export default function MobileChatUI({
  messages,
  onUserSend,
  isLoading,
}: {
  messages: { role: 'user' | 'assistant'; content: string; timestamp?: number }[]; // timestamp is optional UNIX ms
  onUserSend: (code: string, language: string) => void;
  isLoading?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl font-bold text-xl flex items-center justify-center">⚡</div>
          <div>
            <div className="font-bold text-xl tracking-tighter">BlitzAgent</div>
            <div className="text-[10px] text-cyan-400">Groq • Instant AI</div>
          </div>
        </div>
        {/* Theme Toggle */}
        <ThemeToggle />
      </header>

      {/* Chat Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>            {/* Avatar */}
            {msg.role === 'assistant' && (
              <img src={AVATARS.assistant} alt="AI" className="w-7 h-7 rounded-full mr-2 shadow" />
            )}
            <div className={`max-w-[80%] px-5 py-3 rounded-3xl text-sm break-words shadow group relative ${
              msg.role === 'user'
                ? 'bg-white text-zinc-950'
                : 'bg-zinc-900 border border-zinc-800'
            }`}>  
              <AgentMessage content={msg.content} />
              {/* Timestamp & Tap-to-copy (mobile) */}
              <div className="flex items-center justify-end gap-2 mt-1 text-[10px] text-zinc-400 select-none">
                {msg.timestamp && (
                  <span>{formatTime(new Date(msg.timestamp))}</span>
                )}
                <button
                  onClick={() => navigator.clipboard.writeText(msg.content)}
                  className="ml-2 px-2 py-1 rounded hover:bg-cyan-800 hover:text-white active:bg-cyan-700 transition text-cyan-400"
                  aria-label="Copy message"
                >
                  Copy
                </button>
              </div>
            </div>
            {msg.role === 'user' && (
              <img src={AVATARS.user} alt="Me" className="w-7 h-7 rounded-full ml-2 shadow" />
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-3xl flex items-center gap-3 text-zinc-300">
              <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              BlitzAgent is thinking...
            </div>
          </div>
        )}
      </div>

      {/* User Input */}
      <footer className="sticky bottom-0 w-full bg-zinc-950 border-t border-zinc-800 px-2 py-3">
        <UserCodeInput onSubmit={onUserSend} />
        <span className="text-[10px] text-center block text-zinc-500 mt-2">
          ⚡ Fast 200ms Groq LLM • Mobile optimized
        </span>
      </footer>
    </div>
  );
}

// Basic theme toggle for light/dark mode, works with Tailwind's dark mode system
function ThemeToggle() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
      }}
      className="ml-2 px-2 py-1 rounded bg-zinc-700 text-white hover:bg-cyan-700 transition text-xs"
      aria-label="Toggle theme"
    >
      Toggle Theme
    </button>
  );
}