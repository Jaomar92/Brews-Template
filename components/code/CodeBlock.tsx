"use client";
import { useState } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  label?: string;
}

export default function CodeBlock({
  code,
  language = "bash",
  showLineNumbers = false,
  label,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      {label && (
        <div className="pb-3 bg-background px-2 text-sm text-muted-foreground">
          {label}
        </div>
      )}
      <div className="relative rounded-lg border shadow-sm">
        <button
          className="absolute right-4 top-4 p-2 rounded-md bg-muted/80 hover:bg-muted transition-colors"
          onClick={copyToClipboard}
          aria-label="Copy code"
        >
          {copied ? (
            <FaClipboardCheck className="h-4 w-4" />
          ) : (
            <FaClipboard className="h-4 w-4" />
          )}
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            borderRadius: "0.5rem",
            padding: "1.5rem 1rem",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
