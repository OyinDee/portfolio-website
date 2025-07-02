"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { ProjectLivePreview } from "./project-live-preview"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  liveUrl?: string
}

export function ProjectCard({ title, category, image, liveUrl }: ProjectCardProps) {
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [iframeError, setIframeError] = useState(false)

  return (
    <div className="block h-full group">
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden hover:border-cyan-500/50 transition-all h-full">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          {liveUrl && !iframeError ? (
            <>
              {/* Loading indicator */}
              {isIframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                  <div className="w-6 h-6 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent"></div>
                </div>
              )}
              
              {/* Live preview iframe */}
              <iframe
                src={liveUrl}
                title={title}
                className="w-full h-full transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                style={{ 
                  transform: 'scale(0.5)', 
                  transformOrigin: 'top left', 
                  width: '200%', 
                  height: '200%',
                  opacity: isIframeLoading ? 0 : 1
                }}
                onLoad={() => setIsIframeLoading(false)}
                onError={() => {
                  setIsIframeLoading(false)
                  setIframeError(true)
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </>
          ) : (
            <>
              {/* Fallback to image */}
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </>
          )}
          
          {/* Overlay buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
            <div className="flex gap-2">
              {liveUrl && (
                <ProjectLivePreview title={title} liveUrl={liveUrl}>
                  <Button
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Full Preview
                  </Button>
                </ProjectLivePreview>
              )}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-3 sm:p-4">
            <div className="text-xs text-cyan-400 mb-1">{category}</div>
            <h3 className="font-medium text-sm sm:text-base">{title}</h3>
          </div>
        </div>
      </Card>
    </div>
  )
}
