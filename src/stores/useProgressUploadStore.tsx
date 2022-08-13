import create from 'zustand'

const useProgressUploadStore = create((set) => ({
  progress: 0,
  setProgress: (progress: number) => set((state) => ({ ...state, progress }))
}))

export default useProgressUploadStore
