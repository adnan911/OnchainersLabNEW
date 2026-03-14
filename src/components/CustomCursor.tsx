import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };

    let raf: number;
    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cur.style.width = "14px"; cur.style.height = "14px";
      ring.style.width = "46px"; ring.style.height = "46px";
    };
    const onLeave = () => {
      cur.style.width = "8px"; cur.style.height = "8px";
      ring.style.width = "32px"; ring.style.height = "32px";
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button");
    links.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      links.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
