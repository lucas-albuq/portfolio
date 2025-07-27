import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    // Adiciona o inner sempre que o cursor for criado
    let inner = document.createElement("div");
    inner.className = "custom-cursor-inner";
    cursor.appendChild(inner);

    let isLinkHover = false;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const down = () => {
      cursor.classList.add("active");
    };
    const up = () => {
      cursor.classList.remove("active");
    };

    const checkLink = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (
        el && (
          el.tagName === "A" ||
          el.closest("a") ||
          el.tagName === "BUTTON" ||
          el.closest("button")
        )
      ) {
        if (!isLinkHover) {
          isLinkHover = true;
          cursor.classList.add("link-hover");
        }
      } else {
        if (isLinkHover) {
          isLinkHover = false;
          cursor.classList.remove("link-hover");
        }
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkLink);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkLink);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cursor.remove();
    };
  }, []);

  return null;
}