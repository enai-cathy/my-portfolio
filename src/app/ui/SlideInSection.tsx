"use client"
import {motion} from "framer-motion";

type SlideInProps = {
    direction: "left" | "right"
    children: React.ReactNode;
};

export default function SlideInSection({ direction, children }: SlideInProps) {
    return(
        <motion.div
        initial={{opacity: 0, x: direction === "left"? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.8, ease:"easeOut"}}
        viewport={{once:true}}>
            {children}
        </motion.div>
    );
}