import React from 'react'
import { create } from 'zustand'

type FeatureStore = {
   inViewCard: string | null,
   setinViewCard : (feature : string | null) => void;
}

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewCard : null,
  setinViewCard : (feature : string | null) => set({inViewCard : feature})
   
}))