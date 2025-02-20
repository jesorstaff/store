import { create } from 'zustand'
import { fetchCatalog } from '@/api/db.ts'
import { ICatalog } from '@/interfaces'

interface ICatalogState {
    catalog: ICatalog[]
    fetchCatalogStore: () => Promise<void>
}

const useStore = create<ICatalogState>((set) => ({
    catalog: [], // Начальное состояние
    fetchCatalogStore: async () => {
        try {
            const data = await fetchCatalog()
            set({ catalog: data })
        } catch (error) {
            console.error('Ошибка при загрузке каталога:', error) // Обработка ошибок
        }
    },
}))

export default useStore

// const useStore = create<ICatalogState>((set) => ({
//     // bears: 0,
//     // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     // removeAllBears: () => set({ bears: 0 }),
//     // updateBears: (newBears) => set({ bears: newBears }),

//     catalog: [],
//     fetchCatalog: async () => ({
//         const data = await fetchCatalog()
//         set({ catalog: data })
//     })
// }))
