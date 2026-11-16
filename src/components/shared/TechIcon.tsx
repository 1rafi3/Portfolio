"use client";

import React from "react";

interface ITechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "h-6 w-6" }: ITechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s\.\-_\(\)&]/g, "");

  switch (normalized) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );
    case "nextjs":
    case "next":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568l-5.632-7.904v7.904h-1.872V6.432h1.76l5.744 8.048V6.432h1.872v11.136h-1.872zM9.072 13.92L7.2 11.28V17.568H5.328V6.432H7.2l1.872 2.64v4.848z" />
        </svg>
      );
    case "tailwindcss":
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "html5":
    case "html":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.785-2.924-.787-.193-2.094H6.26l.368 4.215 5.372 1.49 5.38-1.49.704-7.715H8.531z" />
        </svg>
      );
    case "css3":
    case "css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.785-2.924-.787-.193-2.094H6.26l.368 4.215 5.372 1.49 5.38-1.49.704-7.715H8.531z" />
        </svg>
      );
    case "javascript":
    case "js":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="#F7DF1E" />
          <path d="M6.915 18.232c.39.67.97 1.13 1.83 1.13.91 0 1.5-.47 1.5-1.57v-6.6h2.46v6.64c0 2.23-1.32 3.29-3.48 3.29-1.91 0-3.08-.98-3.66-2.28l1.35-.61zm8.39.29c.56.91 1.47 1.49 2.76 1.49 1.17 0 1.95-.56 1.95-1.37 0-.91-.73-1.27-1.95-1.78l-.68-.29c-1.95-.82-3.24-1.85-3.24-4.01 0-2.3 1.76-3.83 4.38-3.83 1.93 0 3.24.7 4.01 2.05l-1.84 1.18c-.45-.73-1.09-1.07-2.11-1.07-.98 0-1.66.45-1.66 1.17 0 .84.56 1.18 1.66 1.64l.68.29c2.32.98 3.55 1.96 3.55 4.14 0 2.44-1.89 4.03-4.8 4.03-2.58 0-4.14-1.1-4.86-2.52l1.9-1.12z" fill="#000" />
        </svg>
      );
    case "typescript":
    case "ts":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="#3178C6" />
          <path d="M13.71 17.86c.42.72 1.05 1.22 1.97 1.22.98 0 1.62-.51 1.62-1.69v-7.11h2.65v7.15c0 2.4-1.42 3.54-3.75 3.54-2.06 0-3.32-1.05-3.94-2.45l1.45-.66zm-7.61-4.84h3.3v1.88h-3.3v4.61H3.6v-4.61H.3v-1.88h3.3V8.53h2.5v4.49z" fill="#fff" />
        </svg>
      );
    case "nodejs":
    case "node":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 1.5l10.392 6v12L12 25.5 1.608 19.5v-12L12 1.5zm0 3.464L4.208 9.464v7.072L12 21.036l7.792-4.5V9.464L12 4.964z" />
          <circle cx="12" cy="12" r="3" fill="#339933" />
        </svg>
      );
    case "expressjs":
    case "express":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 18.277H19.56l-3.313-5.207-3.314 5.207H8.494l5.545-8.272L8.718 2.308h4.44l3.088 4.912 3.087-4.912h4.44l-5.32 7.697L24 18.277zM.555 18.277h4.092l2.368-4.148-2.368-4.148H.555l2.368 4.148L.555 18.277z" />
        </svg>
      );
    case "jwt":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#000000" />
          <path d="M7 16h2v-8H7v8zm4 0h2v-8h-2v8zm4 0h2v-8h-2v8z" fill="#D63AFF" />
        </svg>
      );
    case "mongodb":
    case "mongo":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 0s-7.5 7.15-7.5 12.87c0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5C19.5 7.15 12 0 12 0zm.75 18.72V5.28c2.9.64 5.25 3.1 5.25 6.09 0 3.44-2.6 6.27-6 6.64v.71z" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 13.5c-.3-1.8-1.5-3.3-3.2-4.1-.8-.4-1.7-.5-2.6-.4-.7.1-1.4.4-2 .8-.7-.9-1.8-1.5-3-1.7-1.5-.2-3 .3-4.2 1.3-.9.8-1.5 1.9-1.7 3.1-.2 1.2.1 2.5.8 3.5.5.7 1.2 1.3 2 1.7.3.2.7.2 1 0 .3-.2.4-.6.3-.9-.3-.5-.7-1.1-.8-1.7-.2-1 .1-2 .7-2.8.7-.9 1.8-1.4 3-1.3.9.1 1.7.6 2.2 1.3.2.3.6.5 1 .4.4-.1.7-.4.8-.8.3-.7.8-1.2 1.5-1.4.6-.2 1.3-.1 1.9.2 1.1.6 1.9 1.7 2.1 2.9.1.5.5.9 1 .9h.2c.5-.1.9-.5.8-1z"
            fill="#00758F"
          />
          <path
            d="M17.5 15.5c-.5 0-1 .2-1.3.6-.3.4-.4.9-.2 1.4.3.7.8 1.3 1.5 1.7 1 .5 2.1.6 3.1.2 1-.4 1.8-1.2 2.1-2.2.1-.5-.1-1-.6-1.3-.5-.2-1-.1-1.3.4-.2.5-.6.9-1.1 1.1-.5.2-1.1.1-1.6-.1-.4-.2-.7-.5-.9-.9-.1-.2-.4-.4-.7-.4z"
            fill="#F29111"
          />
          <path
            d="M2.5 15c.5 2.5 2.5 4.5 5.5 5.5 3 .9 6.5.6 9.5-.8.5-.2.7-.8.5-1.3-.2-.5-.8-.7-1.3-.5-2.4 1.1-5.2 1.3-7.6.6-2.3-.7-3.9-2.3-4.3-4.2-.1-.5-.6-.9-1.1-.8-.5.1-.9.6-.8 1.1z"
            fill="#00758F"
          />
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M8.851 18.56s-.917.225-1.558.337c-2.14.37-3.92.518-3.92.518s.772.336 2.378.336c1.884 0 4.095-.224 5.979-.785 0 0-.84.225-1.636.337-2.73.37-5.074.224-5.074.224s.882.336 2.89.336c2.816 0 5.626-.336 8.358-.897 0 0-1.89.449-3.948.673-3.654.37-6.552.224-6.552.224s1.26.37 3.906.37c3.906 0 7.392-.449 10.458-1.232 0 0-3.15.561-6.174.785-4.41.37-7.938.187-7.938.187s1.722.411 4.788.411c4.536 0 8.862-.524 12.558-1.424l-.672-1.344s-3.486 1.008-8.232 1.12c-3.696.074-6.174-.486-6.174-.486z" fill="#007396" />
          <path d="M13.25 1.5c-1.2 2.7-3.2 4.6-2.5 7.1.6 2.1 2.8 3.5 2.1 5.8-.6 1.8-2.5 2.8-3.2 4.4 1.4-.4 2.8-1.3 3.5-2.6 1.1-2.1.2-4.1-.7-5.9-.9-1.9-.9-3.5 0-5.3.8-1.5 1.8-2.6 1.8-3.5h-1z" fill="#EA2D2E" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M11.91 0c-5.71 0-5.34 2.48-5.34 2.48l.01 2.57h5.45v.77H4.49S0 5.34 0 11.08c0 5.74 3.92 5.53 3.92 5.53l2.34-.01v-3.32s-.13-3.95 3.9-3.95h5.4c0 0 3.73.06 3.73-3.62V3.62S19.78 0 11.91 0zm-2.9 1.7a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#3776AB" />
          <path d="M12.09 24c5.71 0 5.34-2.48 5.34-2.48l-.01-2.57h-5.45v-.77h7.54s4.49.48 4.49-5.26c0-5.74-3.92-5.53-3.92-5.53l-2.34.01v3.32s.13 3.95-3.9 3.95h-5.4c0 0-3.73-.06-3.73 3.62v2.1S4.22 24 12.09 24zm2.9-1.7a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#FFD43B" />
        </svg>
      );
    case "c":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#A8B9CC">
          <path d="M11.99 0C5.37 0 0 5.37 0 12s5.37 12 11.99 12C18.63 24 24 18.63 24 12S18.63 0 11.99 0zm4.5 16.5c-1.3 1.3-3.1 2-5 2-3.9 0-7-3.1-7-7s3.1-7 7-7c1.9 0 3.7.7 5 2l-2.1 2.1c-.8-.8-1.8-1.1-2.9-1.1-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2.1-.3 2.9-1.1l2.1 2.1z" />
        </svg>
      );
    case "cplusplus":
    case "cpp":
    case "c++":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00599C">
          <path d="M11.99 0C5.37 0 0 5.37 0 12s5.37 12 11.99 12C18.63 24 24 18.63 24 12S18.63 0 11.99 0zm3 13.5h-1.5v1.5h-1v-1.5H9v-1h1.49v-1.5h1v1.5h1.5v1zm4.5 0h-1.5v1.5h-1v-1.5h-1.5v-1h1.5v-1.5h1v1.5h1.5v1z" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.07 1.9.45.52.52.666 1.256.45 1.9l2.66 2.66c.645-.216 1.38-.07 1.9.45.78.78.78 2.047 0 2.827-.78.78-2.047.78-2.827 0-.57-.57-.714-1.393-.435-2.096l-2.485-2.485v6.52c.216.645.07 1.38-.45 1.9-.78.78-2.047.78-2.827 0-.78-.78-.78-2.047 0-2.827.57-.57 1.393-.714 2.096-.435V9.07c-.703.279-1.526.135-2.096-.435-.52-.52-.666-1.256-.45-1.9L6.115 3.98.452 9.643c-.603.604-.603 1.582 0 2.188l10.479 10.48c.604.603 1.582.603 2.188 0l10.427-10.428c.603-.604.603-1.582 0-2.188z" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "vscode":
    case "visualstudiocode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63L2.83 5.9a.997.997 0 00-1.34.09l-1.2 1.2a.997.997 0 000 1.41l3.52 3.52-3.52 3.52a.997.997 0 000 1.41l1.2 1.2a.997.997 0 001.34.09l4.215-3.23 9.46 8.63a1.494 1.494 0 001.705.29l4.94-2.377A1.5 1.5 0 0024 20.35V3.65a1.5 1.5 0 00-.85-1.363zm-5.15 14.773l-6.19-5.36 6.19-5.36v10.72z" />
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
          <path d="M13.5 0C6.044 0 0 6.044 0 13.5S6.044 27 13.5 27 27 20.956 27 13.5 20.956 0 13.5 0zm6.543 8.358l-2.617 1.833c-.225-.333-.51-.628-.847-.866l1.644-2.738c.677.46 1.285 1.054 1.82 1.771zm-9.351 1.704a2.997 2.997 0 014.004.936c.264.417.391.897.377 1.378l2.977-.852a5.975 5.975 0 00-1.703-2.905l-1.64 2.731a3.023 3.023 0 00-4.015-1.288zm-3.69 7.424l-3.21-2.247a10.457 10.457 0 011.66-3.255l2.618 1.833a6.002 6.002 0 00-1.068 3.669zm6.047.88a2.997 2.997 0 01-3.667-2.036l-2.617 1.833a6.001 6.001 0 007.411 3.524l-1.127-3.321z" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#F24E1E" />
          <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262" />
          <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="#1ABCFE" />
        </svg>
      );
    case "openai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.28 9.82a6 6 0 00-.52-4.91 6.04 6.04 0 00-6.46-2.9 6.06 6.06 0 00-4.6-2.01 6.03 6.03 0 00-5.77 4.2 6.02 6.02 0 00-4.18 3.01 6.04 6.04 0 00.74 7.07 6.01 6.01 0 00.51 4.9 6.04 6.04 0 006.47 2.91 6.04 6.04 0 004.6 2.01 6.03 6.03 0 005.77-4.2 6.03 6.03 0 004.18-3.02 6.04 6.04 0 00-.74-7.07zm-9.78 12.37a4.49 4.49 0 01-2.48-.74l.15-.09 3.7-2.14a.79.79 0 00.4-.69v-5.23l1.57.91v4.44a4.5 4.5 0 01-3.34 3.54zm-8.86-4.51a4.49 4.49 0 01-.48-2.54l.16.1 3.7 2.13a.78.78 0 00.79 0l4.53-2.61v1.82l-3.84 2.22a4.5 4.5 0 01-4.86-1.12zm-1.1-9.92a4.49 4.49 0 012-1.8l-.01.18V10.4a.79.79 0 00.39.68l4.53 2.62v1.82l-3.84-2.22a4.5 4.5 0 01-3.07-4.47zm14.1 3.57L12.1 8.71a.78.78 0 00-.79 0L6.78 11.33v-1.82l3.84-2.22a4.5 4.5 0 016.41 1.7 4.45 4.45 0 01.61 2.34zm2.14-2.91a4.5 4.5 0 01.48 2.54l-.16-.09-3.7-2.14a.78.78 0 00-.79 0l-4.53 2.61V9.45l3.84-2.22a4.5 4.5 0 014.86 1.12zm1.1 9.93a4.49 4.49 0 01-2 1.79l.01-.18v-4.26a.79.79 0 00-.39-.68l-4.53-2.62V9.52l3.84 2.22a4.5 4.5 0 013.07 4.47z" />
        </svg>
      );
    case "gemini":
    case "googlegemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A73E8" />
              <stop offset="0.5" stopColor="#8AB4F8" />
              <stop offset="1" stopColor="#C58AF9" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "xampp":
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="5" fill="#FB7A24" />
          <path
            d="M12 9.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm0 4.2a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8z"
            fill="#FFFFFF"
          />
          <path
            d="M7.4 6.2a1.6 1.6 0 00-1.6 1.6v1.4a1.6 1.6 0 001.6 1.6h1.2V6.2H7.4zm9.2 0h-1.2v4.6h1.2a1.6 1.6 0 001.6-1.6V7.8a1.6 1.6 0 00-1.6-1.6zM7.4 13.2H6.2a1.6 1.6 0 00-1.6 1.6v1.4a1.6 1.6 0 001.6 1.6h2.4a1.6 1.6 0 001.6-1.6v-1.8H7.4v-1.2zm9.2 0v1.2h-2.8v1.8a1.6 1.6 0 001.6 1.6h2.4a1.6 1.6 0 001.6-1.6v-1.4a1.6 1.6 0 00-1.6-1.6z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "netbeans":
    case "apachenetbeans":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#1B6AC6" />
          <path d="M12 2v10l9-4.8L12 2z" fill="#4696EC" />
          <path d="M12 12v10l9-5.2V7.2L12 12z" fill="#2478D6" />
          <path d="M3 7.2l9 4.8v10L3 16.8V7.2z" fill="#14539A" />
          <path d="M12 5.5l5.5 3.2-5.5 3.2-5.5-3.2L12 5.5z" fill="#90C2F9" opacity="0.9" />
        </svg>
      );
    case "dsa":
    case "datastructures":
    case "datastructuresalgorithms":
    case "datastructuresalgorithmsdsa":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="5.5" x2="6" y2="12.5" stroke="#00E5FF" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="5.5" x2="18" y2="12.5" stroke="#00E5FF" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="6" y1="12.5" x2="4" y2="18.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="6" y1="12.5" x2="8.5" y2="18.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="12.5" x2="15.5" y2="18.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="12.5" x2="20" y2="18.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="5" r="3" fill="#00E5FF" />
          <circle cx="12" cy="5" r="1.4" fill="#030712" />
          <circle cx="6" cy="12.5" r="2.5" fill="#38BDF8" />
          <circle cx="6" cy="12.5" r="1.1" fill="#030712" />
          <circle cx="18" cy="12.5" r="2.5" fill="#38BDF8" />
          <circle cx="18" cy="12.5" r="1.1" fill="#030712" />
          <circle cx="4" cy="18.5" r="1.8" fill="#818CF8" />
          <circle cx="8.5" cy="18.5" r="1.8" fill="#818CF8" />
          <circle cx="15.5" cy="18.5" r="1.8" fill="#818CF8" />
          <circle cx="20" cy="18.5" r="1.8" fill="#818CF8" />
        </svg>
      );
    case "cp":
    case "competitiveprogramming":
    case "competitiveprogrammingcp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M7 4h10v5c0 2.8-2.2 5-5 5s-5-2.2-5-5V4z" fill="#F59E0B" />
          <path d="M7 5H5a2 2 0 00-2 2v1a3 3 0 003 3h1V9H6a1 1 0 01-1-1V7a1 1 0 011-1h1V5z" fill="#D97706" />
          <path d="M17 5h2a2 2 0 012 2v1a3 3 0 01-3 3h-1V9h1a1 1 0 001-1V7a1 1 0 00-1-1h-1V5z" fill="#D97706" />
          <path d="M11 14h2v4h-2z" fill="#D97706" />
          <path d="M6 18h12v2.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V18z" fill="#B45309" />
          <path
            d="M10 7.5L8.5 9 10 10.5M14 7.5L15.5 9 14 10.5M12.5 7L11.5 11"
            stroke="#030712"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="2.5" r="1" fill="#FDE047" />
        </svg>
      );
    case "oop":
    case "objectorientedprogramming":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="7" y="2" width="10" height="5" rx="1.5" stroke="#00E5FF" strokeWidth="1.5" fill="#00E5FF" fillOpacity="0.1" />
          <path d="M12 7v4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 11h12" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 11v3M18 11v3" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="2" y="14" width="8" height="6.5" rx="1.5" stroke="#38BDF8" strokeWidth="1.4" fill="#38BDF8" fillOpacity="0.1" />
          <rect x="14" y="14" width="8" height="6.5" rx="1.5" stroke="#A78BFA" strokeWidth="1.4" fill="#A78BFA" fillOpacity="0.1" />
          <circle cx="6" cy="17.25" r="1.2" fill="#38BDF8" />
          <circle cx="18" cy="17.25" r="1.2" fill="#A78BFA" />
        </svg>
      );
    case "dbms":
    case "databasemanagementsystem":
    case "databasemanagementsystems":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00E5FF" strokeWidth="1.5" fill="#00E5FF" fillOpacity="0.15" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#00E5FF" strokeWidth="1.5" />
          <path d="M8 12.5c1.1.4 2.5.6 4 .6s2.9-.2 4-.6" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </svg>
      );
    case "codeforces":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2.5" y="11" width="4.5" height="11" rx="1.5" fill="#FFD43B" />
          <rect x="9.75" y="5" width="4.5" height="17" rx="1.5" fill="#318CE7" />
          <rect x="17" y="2" width="4.5" height="20" rx="1.5" fill="#E83A38" />
        </svg>
      );
    case "leetcode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.666-1.607L9.4 7.89l4.908-5.348a1.375 1.375 0 00-.825-2.542z"
            fill="#B3B1B0"
          />
          <path
            d="M9.833 10.924a1.415 1.415 0 00-1.045 1.95 5.6 5.6 0 003.228 3.14 1.416 1.416 0 001.765-.826 1.416 1.416 0 00-.827-1.765 2.766 2.766 0 01-1.593-1.549 1.414 1.414 0 00-1.528-.95z"
            fill="#FFA116"
          />
          <path
            d="M21.905 13.911l-9.014-2.415a1.375 1.375 0 00-1.685 1.015 1.375 1.375 0 001.015 1.685l9.014 2.415a1.375 1.375 0 001.685-1.015 1.375 1.375 0 00-1.015-1.685z"
            fill="#FFA116"
          />
        </svg>
      );
    case "hackerrank":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#00EA64" />
          <path
            d="M14.8 6h-2.1v4.4H11.3V6H9.2v12h2.1v-4.6h1.4V18h2.1V6z"
            fill="#030712"
          />
        </svg>
      );
    case "beecrowd":
    case "uri":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10.5" fill="#1C1E26" stroke="#00E5FF" strokeWidth="1.5" />
          <path
            d="M7 8.5c0-1.1.9-2 2-2h4.5a3.5 3.5 0 012.5 5.9A3.8 3.8 0 0113.5 18H9a2 2 0 01-2-2V8.5zm3.5.5v3h3a1.5 1.5 0 000-3h-3zm0 5v3h3.5a1.5 1.5 0 000-3h-3.5z"
            fill="#00E5FF"
          />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      );
  }
}
