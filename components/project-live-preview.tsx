"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Maximize2, X } from "lucide-react"

interface ProjectLivePreviewProps {
  title: string
  liveUrl: string
  children: React.ReactNode
}

export function ProjectLivePreview({ title, liveUrl, children }: ProjectLivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] bg-zinc-900 border-zinc-700">
        <DialogHeader className="flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-white">{title} - Live Preview</DialogTitle>
          <div className="flex items-center gap-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-600 bg-background hover:bg-zinc-800 hover:text-accent-foreground h-9 px-3 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Open in New Tab
            </a>
          </div>
        </DialogHeader>
        
        <div className="relative flex-1 bg-white rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
                <p>Loading live preview...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={liveUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title={`${title} Live Preview`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
        
        <div className="text-xs text-zinc-400 text-center">
          Preview is loading the live website. Some features may be limited in iframe mode.
        </div>
      </DialogContent>
    </Dialog>
  )
}
