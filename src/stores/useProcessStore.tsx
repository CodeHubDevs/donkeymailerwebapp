import create from 'zustand'

const useProcessStore = create((set) => ({
  campaign: {
    id: null,
    dbId: null,
    name: null,
    type: null,
    destination: null
  },
  templateId: '',
  recipientId: '',
  setCampaign: (campaign: any) => set((state) => ({ ...state, campaign })),
  setTemplateId: (templateId: string) =>
    set(() => ({
      templateId
    })),
  setRecipientId: (recipientId: string) =>
    set(() => ({
      recipientId
    }))
}))

export default useProcessStore
