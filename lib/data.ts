import portfolioData from "@/data/portfolio-data.json"
import { projects, getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects"

// Export the portfolio data
export const data = portfolioData

// Export the projects data
export { projects, getAllProjects, getProjectBySlug, getRelatedProjects }

// Type definitions for the portfolio data
export type PortfolioData = typeof portfolioData

// Helper function to get navigation items
export function getNavItems() {
  return data.navigation
}

// Helper function to get personal information with fallback
export function getPersonalInfo() {
  return (
    data.personal || {
      name: "",
      title: "",
      location: "",
      avatar: "",
      email: "",
      phone: "",
      workingHours: "",
      availableForWork: false,
      badges: [],
      social: [],
    }
  )
}

// Helper function to get about information with fallback
export function getAboutInfo() {
  return (
    data.about || {
      bio: "",
      focus: [],
      languages: [],
      interests: [],
    }
  )
}

// Helper function to get experience information with fallback
export function getExperienceInfo() {
  return data.experience || []
}

// Helper function to get credentials information with fallback
export function getCredentialsInfo() {
  return (
    data.credentials || {
      certifications: [],
      education: [],
      skills: [],
    }
  )
}

// Helper function to get technical skills information with fallback
export function getTechnicalSkillsInfo() {
  return (
    data.technicalSkills || {
      backend: [],
      frontend: [],
      database: [],
      tools: [],
    }
  )
}

// Helper function to get meta information
export function getMetaInfo() {
  return data.meta
}
