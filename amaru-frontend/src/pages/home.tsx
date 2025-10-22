"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Cloud, Droplets, Wind, Thermometer, Zap } from "lucide-react"
import { Button } from "../component/ui/button"
import { Input } from "../component/ui/input"
import { Card } from "../component/ui/card"

export default function AmaruWeatherApp() {
  const [location, setLocation] = useState("San Francisco, CA")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data - ready for API integration
  const currentWeather = {
    temp: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    feelsLike: 70,
  }

  const forecast = [
    { day: "Mon", high: 75, low: 62, condition: "Sunny" },
    { day: "Tue", high: 73, low: 60, condition: "Cloudy" },
    { day: "Wed", high: 68, low: 58, condition: "Rain" },
    { day: "Thu", high: 70, low: 59, condition: "Partly Cloudy" },
    { day: "Fri", high: 74, low: 61, condition: "Sunny" },
  ]

  const aiPredictions = [
    { icon: Droplets, text: "Rain expected in 2 hours", severity: "warning" },
    { icon: Thermometer, text: "Temperature drop detected", severity: "info" },
    { icon: Wind, text: "Wind speeds increasing tonight", severity: "info" },
    { icon: Zap, text: "Storm system approaching", severity: "alert" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setLocation(searchQuery)
      setSearchQuery("")
    }
  }

  const useMyLocation = () => {
    // Ready for geolocation API integration
    setLocation("Current Location")
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] text-cyan-50 relative overflow-hidden">
      {/* Hexagonal background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300d9ff' strokeWidth='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-cyan-500/30 bg-[#0a0e27]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50" />
                  <Cloud className="w-8 h-8 text-cyan-400 relative" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
                  <span className="text-cyan-400">AMARU</span>
                  <span className="text-xs md:text-sm block text-cyan-300/70 font-normal tracking-widest">
                    ARTIFICIAL METEOROLOGICAL ANALYSIS & RESPONSE UNIT
                  </span>
                </h1>
              </div>
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors text-sm tracking-wide">
                  DASHBOARD
                </a>
                <a href="#" className="text-cyan-300/70 hover:text-cyan-400 transition-colors text-sm tracking-wide">
                  MAPS
                </a>
                <a href="#" className="text-cyan-300/70 hover:text-cyan-400 transition-colors text-sm tracking-wide">
                  ALERTS
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm group-hover:blur-md transition-all" />
                <div className="relative flex gap-2 bg-[#0f1535]/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-2">
                  <div className="flex-1 flex items-center gap-2 px-3">
                    <Search className="w-5 h-5 text-cyan-400" />
                    <Input
                      type="text"
                      placeholder="Enter city, coordinates, or use location..."
                      value={searchQuery}
                      onChange={(e: { target: { value: React.SetStateAction<string> } }) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent border-none text-cyan-50 placeholder:text-cyan-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={useMyLocation}
                    variant="ghost"
                    size="icon"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                  >
                    <MapPin className="w-5 h-5" />
                  </Button>
                  <Button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-[#0a0e27] font-semibold shadow-lg shadow-cyan-500/50"
                  >
                    SEARCH
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Weather Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Weather */}
              <Card className="relative overflow-hidden bg-[#0f1535]/60 backdrop-blur-md border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-sm text-cyan-300/70 tracking-widest mb-1">CURRENT LOCATION</h2>
                      <p className="text-2xl md:text-3xl font-bold text-cyan-50">{location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-1">{currentWeather.temp}°</div>
                      <p className="text-cyan-300/70 text-sm tracking-wide">{currentWeather.condition}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-500/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-300/70 tracking-wide">FEELS LIKE</span>
                      </div>
                      <p className="text-2xl font-bold text-cyan-50">{currentWeather.feelsLike}°</p>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-500/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-300/70 tracking-wide">HUMIDITY</span>
                      </div>
                      <p className="text-2xl font-bold text-cyan-50">{currentWeather.humidity}%</p>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-500/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Wind className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-300/70 tracking-wide">WIND</span>
                      </div>
                      <p className="text-2xl font-bold text-cyan-50">{currentWeather.windSpeed} mph</p>
                    </div>
                    <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 hover:bg-cyan-500/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-300/70 tracking-wide">CONDITION</span>
                      </div>
                      <p className="text-sm font-semibold text-cyan-50 leading-tight">{currentWeather.condition}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* 5-Day Forecast */}
              <Card className="bg-[#0f1535]/60 backdrop-blur-md border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                <div className="p-6">
                  <h3 className="text-sm text-cyan-300/70 tracking-widest mb-4">5-DAY FORECAST</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {forecast.map((day, index) => (
                      <div
                        key={index}
                        className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all hover:scale-105 cursor-pointer"
                      >
                        <p className="text-xs text-cyan-300/70 text-center mb-2 tracking-wide">{day.day}</p>
                        <div className="flex justify-center mb-2">
                          <Cloud className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-cyan-50">{day.high}°</p>
                          <p className="text-xs text-cyan-300/50">{day.low}°</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Predictions Panel */}
            <div className="space-y-6">
              <Card className="bg-[#0f1535]/60 backdrop-blur-md border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                <div className="p-6">
                  <h3 className="text-sm text-cyan-300/70 tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    AI PREDICTIONS & ALERTS
                  </h3>
                  <div className="space-y-3">
                    {aiPredictions.map((prediction, index) => {
                      const Icon = prediction.icon
                      const severityColors = {
                        alert: "border-red-500/50 bg-red-500/10 text-red-300",
                        warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-300",
                        info: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
                      }
                      return (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 hover:scale-[1.02] transition-transform cursor-pointer ${
                            severityColors[prediction.severity as keyof typeof severityColors]
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className="w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-sm leading-relaxed">{prediction.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>

              {/* System Status */}
              <Card className="bg-[#0f1535]/60 backdrop-blur-md border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                <div className="p-6">
                  <h3 className="text-sm text-cyan-300/70 tracking-widest mb-4">SYSTEM STATUS</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300/70">API Connection</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400">ONLINE</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300/70">AI Model</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400">ACTIVE</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300/70">Last Update</span>
                      <span className="text-xs text-cyan-300">2 min ago</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/30 bg-[#0a0e27]/80 backdrop-blur-md mt-12">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-cyan-300/50 tracking-wide">
                © 2025 AMARU - Artificial Meteorological Analysis & Response Unit
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-cyan-300/70 hover:text-cyan-400 transition-colors tracking-wide">
                  About
                </a>
                <a href="#" className="text-sm text-cyan-300/70 hover:text-cyan-400 transition-colors tracking-wide">
                  Docs
                </a>
                <a href="#" className="text-sm text-cyan-300/70 hover:text-cyan-400 transition-colors tracking-wide">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
