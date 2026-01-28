import { MapPin, Calendar, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

export default function HeroSection({ profile }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-start gap-8 pb-8"
    >
      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg">
          {profile.avatar ? (
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-400">
              {profile.name?.charAt(0) || 'Y'}
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white" />
      </motion.div>

      {/* Info */}
      <div className="flex-1 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">{profile.name || 'Your Name'}</h1>
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mt-1 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{profile.location || 'Your Location'}</span>
            </div>
            <p className="mt-2 text-slate-700 font-medium">
              {profile.title || 'Software Engineer'} <span className="text-slate-400">\</span> {profile.subtitle || 'Content Creator'}
            </p>
          </div>

          {profile.badge && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex"
            >
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 text-sm font-medium hover:bg-emerald-100 transition-colors cursor-pointer">
                🏆 {profile.badge}
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {profile.calendlyLink && (
            <Button 
              asChild
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 h-auto font-medium shadow-sm"
            >
              <a href={profile.calendlyLink} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
                <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
              </a>
            </Button>
          )}
          {profile.email && (
            <Button 
              variant="outline"
              asChild
              className="rounded-xl px-5 py-2.5 h-auto font-medium border-slate-200 hover:bg-slate-50"
            >
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
          )}
          {profile.communityLink && (
            <Button 
              variant="ghost"
              asChild
              className="rounded-xl px-5 py-2.5 h-auto font-medium text-slate-600 hover:bg-slate-100"
            >
              <a href={profile.communityLink} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" />
                Join Community
                <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
}