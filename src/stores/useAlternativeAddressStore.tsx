import create from 'zustand'

const useAlternativeAddressStore = create((set) => ({
  alternativeAddress: '',
  setAlternativeAddress: (alternativeAddress: string) =>
    set(() => ({
      alternativeAddress
    }))
}))

export default useAlternativeAddressStore
