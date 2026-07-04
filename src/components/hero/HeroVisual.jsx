import { motion } from "framer-motion";
import Scene from "../three/Scene";

export default function HeroVisual() {
    return (
        <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">

            {/* Cyan Glow */}

            <div className="absolute left-8 top-20 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Purple Glow */}

            <div className="absolute bottom-10 right-0 h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[140px]" />

            {/* Three.js */}

            <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[620px] h-[620px] max-w-full">
                <Scene />
            </div>
            </div>

        </div>
    )
}