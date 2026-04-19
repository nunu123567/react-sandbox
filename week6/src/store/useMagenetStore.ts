import { create } from 'zustand';
import type { Magnet } from '../types/Magnet';

interface MagnetState {
  magnets: Magnet[];

  moveMagnet: (id: string, x: number, y: number) => void;
  setStatus: (id: string, status: 'bank' | 'fridge') => void;
  loadExpansionPack: () => void;
}

export const useMagnetStore = create<MagnetState>((set) => ({
  magnets: [
    { id: '1', word: 'summer', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'night', status: 'bank', x: 0, y: 0 },
    { id: '3', word: 'is', status: 'bank', x: 0, y: 0 },
    { id: '4', word: 'hot', status: 'bank', x: 0, y: 0 },
    { id: '5', word: 'and', status: 'bank', x: 0, y: 0 },
    { id: '6', word: 'code', status: 'bank', x: 0, y: 0 },
    { id: '7', word: 'bug', status: 'bank', x: 0, y: 0 },
  ],

  moveMagnet: (id, x, y) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, x, y } : m
      ),
    })),

  setStatus: (id, status) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, status } : m
      ),
    })),

  loadExpansionPack: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: crypto.randomUUID(), word: 'beautiful', status: 'bank', x: 0, y: 0 },
        { id: crypto.randomUUID(), word: 'dream', status: 'bank', x: 0, y: 0 },
        { id: crypto.randomUUID(), word: 'forest', status: 'bank', x: 0, y: 0 },
      ],
    })),
}));