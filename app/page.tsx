"use client";

import { useState } from "react";
import { isAiRscAvailable } from "./actions";

export default function Home() {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  async function handleCheck() {
    const isAvailable = await isAiRscAvailable();
    setIsAvailable(isAvailable);
  }

  return (
    <div>
      <button onClick={handleCheck}>Check</button>
      {isAvailable !== null && (isAvailable ? "Available" : "Unavailable")}
    </div>
  );
}
