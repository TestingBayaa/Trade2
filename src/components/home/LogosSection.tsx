import { motion } from "framer-motion";

const logos = [
  { name: "Vercel", svg: "M12 1L24 22H0L12 1Z" },
  { name: "Stripe", svg: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" },
  { name: "Notion", svg: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.02c-.42-.326-.98-.7-2.055-.607L3.01 2.721c-.466.046-.56.28-.374.466l1.823 1.021zm.793 3.358v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.632c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.62c-.094-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.225-.186zM2.473 1.008l13.402-1C17.554-.066 17.974.046 18.7.606l3.733 2.614c.467.327.607.42.607.98v15.177c0 .793-.28 1.26-1.261 1.26l-15.457.887c-.746.046-1.12-.094-1.493-.56l-2.427-3.125c-.42-.513-.606-.933-.606-1.447V2.341c0-.653.28-1.193.933-1.333z" },
  { name: "Linear", svg: "M3.6 1.8c0-.99.81-1.8 1.8-1.8h13.2c.99 0 1.8.81 1.8 1.8v20.4c0 .99-.81 1.8-1.8 1.8H5.4c-.99 0-1.8-.81-1.8-1.8V1.8zm3.6 0v20.4h9.6V1.8H7.2z" },
  { name: "Figma", svg: "M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 4a4 4 0 0 0 4 4V16a4 4 0 0 0-4 0zm-4-4a4 4 0 0 1-4 4h4V12zm0 0V8a4 4 0 0 0-4 4h4zm0 0h4a4 4 0 0 0-4-4v4z" },
  { name: "Supabase", svg: "M10.8 21.6c-.3.6-1.2.4-1.2-.3V12H2.4c-.9 0-1.3-1.1-.6-1.7l11-10c.6-.6 1.6-.1 1.4.7l-1.8 8.2h7.2c.9 0 1.3 1.1.6 1.7l-9.4 10.7z" },
];

export function LogosSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          TRUSTED BY TEAMS AT
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={logo.svg} />
              </svg>
              <span className="font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}