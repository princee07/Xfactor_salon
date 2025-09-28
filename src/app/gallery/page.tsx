
"use client";
import { ParallaxScroll } from "../../ui/parallax-scroll";

const images = Array.from({ length: 20 }, (_, i) => `/gallery/${i + 1}.png`);

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50">
            <main className="flex-1">
                <ParallaxScroll images={images} />
            </main>

        </div>
    );
}