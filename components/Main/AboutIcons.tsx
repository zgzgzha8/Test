import IconBrandTelegram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function AboutIcons() {
    return (
        <div class="flex gap-2 justify-center">
            <a
                class="hover:opacity-75"
                target="_blank"
                title="انستغرام منصة الشتاء"
                href="https://www.instagram.com/nm9h"
            >
                <IconBrandInstagram />
            </a>
            <a
                class="hover:opacity-75"
                target="_blank"
                title="سورس منصة الشتاء"
                href="https://github.com/Hyodu/winter"
            >
                <IconBrandGithub />
            </a>
        </div>
    );
}