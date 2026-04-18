import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Users, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import DoctorListingPreview from "@/components/DoctorListingPreview";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "MedBook — Find & Book Verified Doctors in Under 30 Seconds" },
      { name: "description", content: "Search by specialty, location, or symptoms and get instant appointment confirmation with 15,000+ verified doctors." },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden">
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] bg-teal/10 rounded-full blur-[100px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck size={14} /> Verified Health Experts
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-6">
                    Find & Book <span className="text-primary italic">Verified</span> Doctors in Under 30 Seconds
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                    Search by specialty, location, or symptoms and get instant appointment confirmation.
                  </p>

                  <div className="mb-8">
                    <SearchBar />
                  </div>

                  {/* Trust Signals Row */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-4 border-t border-border/40"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex text-warning">
                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-current" />)}
                      </div>
                      <span className="text-sm font-bold text-foreground">4.8 Rating</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-primary" />
                      <span className="text-sm font-bold text-foreground">2M+ Patients</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Stethoscope size={18} className="text-primary" />
                      <span className="text-sm font-bold text-foreground">15K+ Doctors</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Visual (Doctor Listing Preview) */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-lg"
                >
                  <DoctorListingPreview />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Placeholder for other sections if needed, but keeping it minimal as per instructions */}
      </main>

      <Footer />
    </div>
  );
}
