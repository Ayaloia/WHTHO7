"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useMouseHovered } from "react-use";

export function SkewedCard({
    children,
    className,
    rotateMultiple = 4,
}: {
    children: React.ReactNode;
    className?: string | undefined;
    rotateMultiple?: number;
}) {
    const ref = useRef(null);
    const { elX, elY, elW, elH } = useMouseHovered(ref, { whenHovered: true });
    return (
        // 参考了 GitHub 官网的实现，不过这里重复用了 while/when Hover，可能会有性能问题
        <motion.div
            ref={ref}
            className={`w-full h-full ${className} m-t-4 border-gray rounded-xl bg-card-bg border-1 p-4 overflow-hidden`}
            initial={{ transform: "perspective(700px) rotateX(0) rotateY(0)" }}
            whileHover={{
                transformOrigin: "center",
                transform: `perspective(700px) rotateX(${
                    (elY / elH - 0.5) * rotateMultiple
                }deg) rotateY(${(elX / elW - 0.5) * -rotateMultiple}deg)`,
                transition: { duration: 0 },
            }}>
            {children}
        </motion.div>
    );
}
