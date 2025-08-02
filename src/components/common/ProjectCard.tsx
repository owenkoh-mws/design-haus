import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/global'
import { cn } from '@/utils/helpers/cn'
import { Calendar, User, Clock } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        'group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] will-change-transform dark:bg-neutral-900 dark:shadow-neutral-800/10',
        className
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        
        {/* Category badge */}
        {project.category.color && (
          <div className="absolute top-3 left-3">
            <span 
              className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
              style={{ backgroundColor: `${project.category.color}CC` }}
            >
              {project.category.name}
            </span>
          </div>
        )}
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="mb-3">
          <h3 className="text-base font-semibold leading-tight text-neutral-900 group-hover:text-accent-600 transition-colors sm:text-lg dark:text-white dark:group-hover:text-accent-400">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm leading-relaxed text-neutral-600 line-clamp-2 mb-4 dark:text-neutral-400">
          {project.description}
        </p>
        
        {/* Client and duration info */}
        <div className="space-y-2 mb-4">
          {project.client && (
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <User className="h-3 w-3 flex-shrink-0" />
              <span>{project.client.name}</span>
            </div>
          )}
          
          <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 flex-shrink-0" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 flex-shrink-0" />
              <span>{new Date(project.completedAt).getFullYear()}</span>
            </div>
          </div>
        </div>
        
        {/* Services/technologies tags */}
        <div className="flex flex-wrap gap-1">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {service}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              +{project.services.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}