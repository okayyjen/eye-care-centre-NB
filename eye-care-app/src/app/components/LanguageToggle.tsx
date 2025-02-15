"use client";

import { usePathname, useParams, useRouter } from "next/navigation";

const LanguageToggle = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = params.locale || "en";
  const newLocale = currentLocale === "en" ? "fr" : "en";

  const handleToggleLanguage = () => {
    const newPath = `/${newLocale}${pathname.replace(`/${currentLocale}`, "")}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={handleToggleLanguage}
      className="px-4 py-2 border rounded-md hover:bg-gray-200 transition"
    >
      {currentLocale === "en" ? "Français" : "English"}
    </button>
  );
};

export default LanguageToggle;
