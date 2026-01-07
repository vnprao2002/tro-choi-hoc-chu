export const playSound = async (type: "success" | "error" | "complete" | "countdown") => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

    switch (type) {
      case "success": {
        const osc1 = audioContext.createOscillator()
        const osc2 = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc1.connect(gain)
        osc2.connect(gain)
        gain.connect(audioContext.destination)

        osc1.frequency.value = 523.25
        osc2.frequency.value = 659.25
        osc2.startTime = 0.1

        gain.gain.setValueAtTime(0.3, audioContext.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

        osc1.start()
        osc2.start(audioContext.currentTime + 0.1)
        osc1.stop(audioContext.currentTime + 0.2)
        osc2.stop(audioContext.currentTime + 0.3)
        break
      }
      case "error": {
        const osc1 = audioContext.createOscillator()
        const osc2 = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc1.connect(gain)
        osc2.connect(gain)
        gain.connect(audioContext.destination)

        osc1.frequency.value = 300
        osc2.frequency.value = 200
        osc2.startTime = 0.1

        gain.gain.setValueAtTime(0.3, audioContext.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

        osc1.start()
        osc2.start(audioContext.currentTime + 0.1)
        osc1.stop(audioContext.currentTime + 0.2)
        osc2.stop(audioContext.currentTime + 0.3)
        break
      }
      case "complete": {
        const frequencies = [523.25, 659.25, 783.99]
        frequencies.forEach((freq, index) => {
          const osc = audioContext.createOscillator()
          const gain = audioContext.createGain()

          osc.connect(gain)
          gain.connect(audioContext.destination)

          osc.frequency.value = freq
          gain.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15)
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.2)

          osc.start(audioContext.currentTime + index * 0.15)
          osc.stop(audioContext.currentTime + index * 0.15 + 0.2)
        })
        break
      }
      case "countdown": {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc.connect(gain)
        gain.connect(audioContext.destination)

        osc.frequency.value = 800
        gain.gain.setValueAtTime(0.2, audioContext.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

        osc.start()
        osc.stop(audioContext.currentTime + 0.1)
        break
      }
    }
  } catch (error) {
    console.error("Audio error:", error)
  }
}

