import { useEffect, useRef, useState } from "react"
import hljs from "highlight.js"
import "highlight.js/styles/vs.css"

export default function CodeBlock({
  code,
  language = "javascript",
  width,
}) {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  const resolvedWidth =
    typeof width === "number" ? `${width}px` : width

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { }
  }

  return (
    <div className="flex justify-center my-4">
      <div
        className="relative"
        style={resolvedWidth ? { width: resolvedWidth } : undefined}
      >
        <button
          onClick={handleCopy}
          className="absolute -top-5 right-0 flex items-center justify-center text-xs text-neutral/50 px-3 border-3 border-base-300 border-b-0 rounded-t-xl bg-base-100 font-bold pt-1 cursor-pointer"        >
          {copied ? "Copied" : "Copy"}
        </button>

        <pre className="overflow-auto border-3 border-base-300 rounded-xl rounded-tr-none bg-base-200">
          <code ref={codeRef} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}