import { useEffect } from "react";

export default function useMouseMove() {
   useEffect(() => {
      const handleMouseMove = (e:any) => {
         document.documentElement.style.setProperty(
            "--move-x",
            `${(e.clientX - window.innerWidth / 2) * -0.005}deg`
         );
         document.documentElement.style.setProperty(
            "--move-y",
            `${(e.clientY - window.innerHeight / 2) * 0.01}deg`
         );
      };

      document.addEventListener("mousemove", handleMouseMove);

      return  () => {
         document.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);
}
