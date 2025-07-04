"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ArrowRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  data: FAQItem[];
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Heading */}
        <div className="lg:sticky lg:top-20">
          <div className="space-y-6">
            <div className="text-sm font-medium text-gray-500 mb-3 tracking-[0.2em] uppercase">F.A.Q</div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Frequently
              <br />
              Asked
              <br />
              {" "} <span className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Find answers to common questions about our services, policies, and processes.
            </p>
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-0">
          {data.map((faq, index) => (
            <div key={faq.id}>
              <Collapsible open={openItem === faq.id} onOpenChange={() => toggleItem(faq.id)}>
                <CollapsibleTrigger className="w-full">
                  <motion.div
                    className="flex items-center justify-between w-full py-8 text-left hover:bg-gray-50/50 transition-colors duration-200 group"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <span className="text-xl font-semibold text-gray-900 pr-6 group-hover:text-gray-700 transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItem === faq.id ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </motion.div>
                  </motion.div>
                </CollapsibleTrigger>

                <CollapsibleContent forceMount>
                  <AnimatePresence>
                    {openItem === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 20,
                          opacity: { duration: 0.15 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-12">
                          <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CollapsibleContent>
              </Collapsible>

              {/* Dividing Line */}
              {index < data.length - 1 && <div className="border-b border-gray-100"></div>}
            </div>
          ))}

          <motion.div
            className="pt-12"
            whileHover={{ x: 4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <button className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors duration-200 group">
              See more questions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
