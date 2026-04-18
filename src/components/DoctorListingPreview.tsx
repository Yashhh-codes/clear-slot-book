import { motion } from "framer-motion";
import { Star, Clock, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 284,
    location: "Apex Hospital, Bandra",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    delay: 0,
  },
  {
    id: 2,
    name: "Dr. Vikram Malhotra",
    specialty: "General Physician",
    rating: 4.8,
    reviews: 512,
    location: "Swasthya Care, Andheri",
    availability: "Next: Tomorrow 10 AM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    delay: 0.1,
  },
  {
    id: 3,
    name: "Dr. Kavita Reddy",
    specialty: "Dermatologist",
    rating: 4.9,
    reviews: 198,
    location: "Clear Skin Clinic, Powai",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=150&h=150&fit=crop&crop=face",
    delay: 0.2,
  },
];

export default function DoctorListingPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto h-[480px] perspective-1000">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10 space-y-4">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, x: 40, y: 10, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
            transition={{ 
              delay: doctor.delay + 0.5, 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ scale: 1.02, x: -5 }}
            className="flex gap-4 p-4 bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white dark:border-white/10 rounded-2xl shadow-xl shadow-black/5 group cursor-default"
          >
            <div className="relative shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-14 h-14 rounded-xl object-cover ring-2 ring-white/50 dark:ring-white/10"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white dark:border-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-foreground text-sm line-clamp-1">{doctor.name}</h4>
                    <CheckCircle2 size={12} className="text-primary shrink-0" />
                  </div>
                  <p className="text-xs text-primary font-bold">{doctor.specialty}</p>
                </div>
                <div className="flex items-center gap-1 bg-warning/10 px-1.5 py-0.5 rounded text-[10px] font-bold text-warning-foreground">
                  <Star size={10} className="fill-warning text-warning" />
                  {doctor.rating}
                </div>
              </div>
              
              <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground/80 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin size={10} /> {doctor.location.split(',')[0]}
                </span>
                <span className="flex items-center gap-1 text-success">
                  <Clock size={10} /> {doctor.availability}
                </span>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-white dark:border-black bg-muted" />
                  ))}
                  <div className="w-5 h-5 rounded-full border border-white dark:border-black bg-muted flex items-center justify-center text-[8px] font-bold text-muted-foreground">+80</div>
                </div>
                <button className="text-[10px] font-bold text-primary flex items-center gap-0.5 group-hover:underline">
                  View Profile <ChevronRight size={10} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Widget Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -bottom-6 -right-6 w-48 p-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl shadow-primary/30 z-20"
      >
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Instant Confirmation</p>
        <p className="text-sm font-bold mt-1">Found 15k+ Experts</p>
        <div className="mt-3 flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={12} className="fill-white text-white" />
          ))}
        </div>
        <p className="text-[10px] mt-2 font-medium opacity-90">Verified by 2M+ patients</p>
      </motion.div>
    </div>
  );
}
