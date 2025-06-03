"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoSection({
  iconMt,
  imageSrc = "/images/missing.png",
  imageAlt = "",
  cardDescription,
  cardContent,
  children,
  overflow,
  imageBorder,
  imageBackground = "bg-transparent",
  imageShadow,
  imageWidth = "w=20",
  imageHeight = "h-20",
}: {
  iconMt?: string;
  imageSrc?: string;
  imageAlt?: string;
  cardDescription: string;
  cardContent: React.ReactNode;
  children?: React.ReactNode;
  overflow?: string;
  imageBorder?: string;
  imageBackground?: string;
  imageShadow?: string;
  imageWidth?: string;
  imageHeight?: string;
}) {
  return (
    <Card className="w-full border-4 border-black">
      <CardHeader className="flex flex-col items-center">
        <div
          className={`${imageWidth} ${imageHeight} rounded-full ${imageBorder} ${overflow} border-gray-200 flex items-center justify-center mb-4 ${iconMt} ${imageShadow} ${imageBackground}`}
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <Image
              alt={imageAlt}
              src={imageSrc}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <CardDescription className="flex items-start text-4xl font-bold text-gray-700 mt-2 tracking-wide">
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center px-6 py-4">
        <div className="text-lg text-gray-600 leading-relaxed">
          {cardContent}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
