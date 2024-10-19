'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Camera, Upload } from "lucide-react"
import Navbar from '@/components/navbar'

export default function PhotoAnalysisUI() {
  const [step, setStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {

      setIsLoading(true)
      // Simulate file upload
      setTimeout(() => {
        setIsLoading(false)
        setStep(1)
      }, 2000)
    }
  }

  const handleScan = () => {
    setIsLoading(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsLoading(false)
      setStep(1)
    }, 2000)
  }

  const handleNextStep = () => {
    if (step < 3) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            setStep((prevStep) => prevStep + 1)
            return 0
          }
          return prevProgress + 10
        })
      }, 200)
    } else {
      setStep(4) // Move to results page
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
    <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 flex items-center justify-center bg-black">
        {step === 0 && (
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold mb-4">Upload or Scan Photo</h1>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => {
                const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
                if (fileInput) {
                  fileInput.click();
                }
              }} disabled={isLoading}>
                <Upload className="mr-2 h-4 w-4" /> Upload Photo
              </Button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button onClick={handleScan} disabled={isLoading}>
                <Camera className="mr-2 h-4 w-4" /> Scan Photo
              </Button>
            </div>
            {isLoading && (
              <div className="mt-4">
                <Progress value={50} className="w-[300px]" />
                <p className="mt-2">Processing...</p>
              </div>
            )}
          </div>
        )}

        {step > 0 && step < 4 && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Step {step} of 3</h2>
            <Progress value={progress} className="w-[300px]" />
            <p>Processing step {step}...</p>
            <Button onClick={handleNextStep}>Next Step</Button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Analysis Results</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">Accuracy: 95%</p>
              <p className="text-lg">Detected Objects: 3</p>
              <p className="text-lg">Processing Time: 1.2s</p>
            </div>
            <Button onClick={() => setStep(0)}>Analyze Another Photo</Button>
          </div>
        )}
      </main>
    </div>
  )
}
