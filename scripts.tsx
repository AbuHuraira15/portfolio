import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abu Huraira" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
      { title: "Abu Huraira — CSE Student & Developer" },
      { name: "description", content: "Portfolio of Abu Huraira, a Computer Science & Engineering student building full-stack web apps and ML projects." },
      { property: "og:title", content: "Abu Huraira — CSE Student & Developer" },
      { property: "og:description", content: "Portfolio of Abu Huraira, a Computer Science & Engineering student building full-stack web apps and ML projects." },
    ],
  }),
  component: Index,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b1020", color: "#e7ecf5", fontFamily: "system-ui, sans-serif" }}>
      <p>Loading portfolio… <a href="/portfolio.html" style={{ color: "#56e0c4" }}>Open here</a></p>
    </div>
  );
}