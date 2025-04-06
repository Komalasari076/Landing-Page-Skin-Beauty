import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQItem({ id, question, answer }) {
  const [open, setOpen] = useState(null);

  function handleToggleFAQ(id) {
    setOpen(open === id ? null : id);
  }

  return (
    <div className="border-b-2 border-gray-200 last:border-b-0 py-3 tracking-wide">
      <button
        className="w-full flex justify-between items-center gap-6 py-2 text-left font-medium text-gray-900 cursor-pointer"
        onClick={() => handleToggleFAQ(id)}
      >
        <p className="text-sm font-semibold">{question}</p>
        {open === id ? (<ChevronUp className="w-5 h-5" />) : (<ChevronDown className="w-5 h-5" />)}
      </button>
      {open === id && <p className="text-sm text-gray-700 pb-4">{answer}</p>}
    </div>
  );
}
