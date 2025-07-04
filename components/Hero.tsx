import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundLines } from "./ui/background-lines";
import MouseScrollDown from "./ui/mouse-scroll-down";
import ScrambledText from "./ui/ScrambledText";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("heroSection");
  return (
    <div>
      <section className="relative h-auto overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <BackgroundLines
          className="h-auto bg-transparent "
          svgOptions={{ duration: 15 }}
        >
          <div className="max-w-7xl mx-auto h-auto">
            {/* Announcement Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 flex justify-center mb-8"
            >
              <Badge
                variant="outline"
                className="
                  px-2 sm:px-4 py-2 mt-8 
                  text-xs sm:text-sm md:text-base  
                  font-medium
                  bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700
                  hover:bg-purple-50 transition-colors duration-300
                  whitespace-nowrap                    
                  overflow-hidden                     
                "
              >
                <span className="mr-2 text-sm sm:text-base md:text-lg">✨</span>{" "}
                {/* make icon size responsive too */}
                {t("badgeText")}
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent">
                  {t("mainHeading.line1")}
                </span>
                <br />
                <span className="text-gray-800">
                  {t("mainHeading.line2")}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              
              className="text-center mb-16"
            >
              <ScrambledText>
               {t("description")}
              </ScrambledText>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#7d6bc7] hover:to-[#5577b3] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {t("cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-[#9081DC] hover:bg-purple-50 transition-all duration-300"
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">{t("rating")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>{t("studentsCount")}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-gray-500 mb-16"
            >
              {t("noCardText")}
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 shadow-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  {t("features.mockSessions")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                <Clock className="h-4 w-4 text-[#628AC8]" />
                <span className="text-sm font-medium text-gray-700">
                  {t("features.realTimeFeedback")}
                </span>
              </div>
            </motion.div>
          </div>
          {/* Hero Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#9081DC] to-[#628AC8] rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      {t("videoSection.heading")}
                    </h3>
                    <p className="text-purple-100 text-lg mb-6">
                      {t("videoSection.subheading")}
                      
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-300" />
                        <span>                      {t("videoSection.items.pronunciation")}
</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-300" />
                        <span>{t("videoSection.items.speed")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-300" />
                        <span>{t("videoSection.items.interactive")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-4 lg:p-6 border border-white/20">
                      <div className="aspect-video bg-white/20 rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/aNfqLXJ5Jsw?si=eV2BswzhCmAlUj7Z"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </BackgroundLines>

        <MouseScrollDown />
      </section>
    </div>
  );
};

export default Hero;
