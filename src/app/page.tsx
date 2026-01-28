import { motion } from 'framer-motion';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import TechStack from '@/components/portfolio/TechStack';
import BeyondCoding from '@/components/portfolio/BeyondCoding';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import MembershipsSection from '@/components/portfolio/MembershipsSection';
import SocialLinksSection from '@/components/portfolio/SocialLinksSection';
import SpeakingSection from '@/components/portfolio/SpeakingSection';
import ContactSection from '@/components/portfolio/ContactSection';
import GallerySection from '@/components/portfolio/GallerySection';
import ThemeToggle from '@/components/portfolio/ThemeToggle';

// CUSTOMIZE YOUR PORTFOLIO DATA HERE
const portfolioData = {
  profile: {
    name: 'Your Name',
    location: 'Your City, Country',
    title: 'Software Engineer',
    subtitle: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    badge: 'Available for hire',
    email: 'hello@example.com',
    calendlyLink: 'https://calendly.com/your-link',
    communityLink: 'https://community.example.com',
  },
  about: `I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and modern web technologies. I work on projects including building modern web applications, mobile apps, and creating tech content.

I've helped startups and companies grow through innovative software solutions. I'm passionate about clean code, user experience, and building products that make a difference.

Currently diving deeper into AI and machine learning, focusing on integrating intelligent features into modern applications.`,
  featuredImage: {
    title: 'FEATURED',
    subtitle: 'Your Achievement Here',
    link: '#',
  },
  experiences: [
    { title: 'Senior Full-Stack Developer', company: 'Tech Company', year: '2024', type: 'work' },
    { title: 'Full-Stack Developer', company: 'Startup Inc', year: '2022', type: 'work' },
    { title: 'Junior Developer', company: 'Digital Agency', year: '2020', type: 'work' },
    { title: 'BS Computer Science', company: 'University', year: '2019', type: 'education' },
    { title: 'Hello World! 👋', company: 'First line of code', year: '2015', type: 'milestone' },
  ],
  techStack: {
    Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
  },
  beyondCoding: {
    paragraph1: "When not writing code, I focus on learning about emerging technologies, design systems, and startup culture.",
    paragraph2: "I share my knowledge through content creation, open source contributions, and community building."
  },
  projects: [
    { name: 'Project One', description: 'Full-stack web application', url: 'project-one.com', link: 'https://project-one.com' },
    { name: 'Project Two', description: 'Mobile app solution', url: 'project-two.com', link: 'https://project-two.com' },
    { name: 'Project Three', description: 'AI-powered platform', url: 'project-three.com', link: 'https://project-three.com' },
    { name: 'Project Four', description: 'E-commerce solution', url: 'project-four.com', link: 'https://project-four.com' },
  ],
  certifications: [
    { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', link: '#' },
    { name: 'Professional Scrum Master', issuer: 'Scrum.org', link: '#' },
    { name: 'Google Cloud Professional', issuer: 'Google', link: '#' },
    { name: 'Meta Frontend Developer', issuer: 'Meta', link: '#' },
  ],
  testimonials: [
    {
      quote: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
      author: "John Doe",
      role: "CTO at Tech Company"
    },
    {
      quote: "Working with them was a pleasure. They brought innovative solutions and helped us scale our platform significantly.",
      author: "Jane Smith",
      role: "Product Manager at Startup"
    },
    {
      quote: "A talented engineer with great communication skills. They made complex technical concepts easy to understand.",
      author: "Mike Johnson",
      role: "Senior Developer"
    },
  ],
  memberships: [
    { name: 'Tech Industry Association', link: '#' },
    { name: 'Software Engineering Guild', link: '#' },
  ],
  socialLinks: [
    { platform: 'linkedin', url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { platform: 'github', url: 'https://github.com/yourprofile', label: 'GitHub' },
    { platform: 'twitter', url: 'https://twitter.com/yourprofile', label: 'Twitter' },
    { platform: 'instagram', url: 'https://instagram.com/yourprofile', label: 'Instagram' },
  ],
  speaking: {
    description: "Available for speaking at conferences, meetups, and workshops about software development and emerging technologies.",
    email: 'hello@example.com',
  },
  contact: {
    email: 'hello@example.com',
    calendlyLink: 'https://calendly.com/your-link',
    communityLink: 'https://community.example.com',
  },
  gallery: [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero */}
        <HeroSection profile={portfolioData.profile} />

        {/* Main Content Grid */}
        <div className="mt-8 space-y-6">
          {/* About + Featured Image Row */}
          <AboutSection 
            about={portfolioData.about} 
            featuredImage={portfolioData.featuredImage}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tech Stack */}
              <TechStack techStack={portfolioData.techStack} showViewAll />

              {/* Beyond Coding + Projects Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BeyondCoding content={portfolioData.beyondCoding} />
                <ProjectsSection projects={portfolioData.projects} showViewAll />
              </div>

              {/* Certifications */}
              <CertificationsSection certifications={portfolioData.certifications} showViewAll />

              {/* Testimonials */}
              <TestimonialsSection testimonials={portfolioData.testimonials} />
            </div>

            {/* Right Column - Experience Timeline */}
            <div className="lg:col-span-1">
              <ExperienceTimeline experiences={portfolioData.experiences} />
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MembershipsSection memberships={portfolioData.memberships} />
            <SocialLinksSection links={portfolioData.socialLinks} />
            <SpeakingSection 
              email={portfolioData.speaking.email}
              description={portfolioData.speaking.description}
            />
          </div>

          {/* Contact */}
          <ContactSection contact={portfolioData.contact} />

          {/* Gallery */}
          <GallerySection images={portfolioData.gallery} />

          {/* Footer */}
          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-8 text-sm text-slate-400"
          >
            <p>© {new Date().getFullYear()} {portfolioData.profile.name}. Built with passion.</p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}