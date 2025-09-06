import { ReactNode, SVGProps } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  illustration: React.ComponentType<SVGProps<SVGSVGElement>>;
  illustrationAlt: string;
  illustrationWidth: number;
  illustrationHeight: number;
  title: string;
  subtitle?: string;
}

export function AuthLayout({
  children,
  illustration: Illustration,
  illustrationAlt,
  illustrationWidth,
  illustrationHeight,
  title,
  subtitle
}: AuthLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 px-8 pt-12 pb-8 text-center">
        <div className="mb-4 flex justify-center">
          <Illustration
            aria-label={illustrationAlt}
            width={illustrationWidth}
            height={illustrationHeight}
            className="mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            {subtitle}
          </h3>
        )}
      </div>
      <div className="px-8 py-6">
        {children}
      </div>
    </div>
  );
}
