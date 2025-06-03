import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function InfoSection({
  iconMt,
  imageSrc = "/images/missing.png",
  imageAlt = "",
  cardDescription,
  cardContent,
  children,
}: {
  iconMt?: string;
  imageSrc?: string;
  imageAlt?: string;
  cardDescription: string;
  cardContent: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Card className="w-full border-4 border-black">
      <CardHeader className="flex flex-col items-center">
        <div
          className={`w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center mb-4 ${
            iconMt ?? ""
          } shadow-lg bg-white`}
        >
          <Image
            alt={imageAlt}
            src={imageSrc}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <CardDescription className="text-4xl font-bold text-gray-700 mt-2 tracking-wide">
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-center text-left px-6 py-4">
        <div className="text-lg text-gray-600 leading-relaxed">
          {cardContent}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
