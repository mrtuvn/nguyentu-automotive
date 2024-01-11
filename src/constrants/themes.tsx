"use client";
import React, { useState } from "react";

type Theme = "light" | "dark" | "system";
export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");
  const themeOptions: string[] = ["light", "dark", "system"];

  return (
    <section>
      <ThemeOptions
        themeOptions={themeOptions}
        selectedTheme={selectedTheme}
        onThemeClick={(theme) => setSelectedTheme(theme)}
      />
      {/* <p className="mt-10">
        <strong>{selectedTheme}</strong>
      </p> */}
    </section>
  );
}

interface ThemeOptionsProps<T extends React.ReactNode> {
  themeOptions: T[];
  selectedTheme: T;
  onThemeClick: (theme: T) => void;
}

function ThemeOptions<T>({
  themeOptions,
  selectedTheme,
  onThemeClick,
}: ThemeOptionsProps<T>) {
  return (
    <ul className="flex gap-2 list-none rounded p-2 border-solid border-white">
      {themeOptions.map((theme, index) => (
        <li key={index}>
          <button
            onClick={() => onThemeClick(theme)}
            className={
              theme === selectedTheme ? "{`font-bold text-underline`}" : ""
            }
          >
            {theme}
          </button>
        </li>
      ))}
    </ul>
  );
}
