import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { useMagnetStore } from './store/useMagenetStore';
import WordMagnet from './components/WordMagnet';
import FridgeDoor from './components/FridgeDoor';

export default function App() {
  const { magnets, moveMagnet, setStatus, loadExpansionPack } = useMagnetStore();

  
  const bankMagnets = magnets.filter((m) => m.status === 'bank');
  const fridgeMagnets = magnets.filter((m) => m.status === 'fridge');

  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === 'fridge') {
      const rect = event.active.rect.current.translated;
      const fridgeRect = over.rect;

      if (!rect || !fridgeRect) return;

      
      const x = rect.left - fridgeRect.left;
      const y = rect.top - fridgeRect.top;

      setStatus(active.id as string, 'fridge');
      moveMagnet(active.id as string, x, y);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-8 bg-gray-100 min-h-screen font-sans">

        
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow mb-6 print:hidden">
          <div>
            <h1 className="text-xl font-bold text-blue-600">Fridge poetry</h1>
            <p className="text-sm text-gray-500">
              Drag words to fridge door and locate them freely.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={loadExpansionPack}
              className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold"
            >
              Load extra words 
            </button>

            <button
              onClick={() => window.print()}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold"
            >
              Print the poem 
            </button>
          </div>
        </div>

        <div className="flex gap-8">

         
          <div className="w-64 print:hidden bg-zinc-900 text-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-sm font-bold mb-4 border-b border-gray-700 pb-2">
              WORD BANK
            </h2>

            <div className="flex flex-wrap gap-3">
              {bankMagnets.map((m) => (
                <WordMagnet key={m.id} magnet={m} />
              ))}
            </div>
          </div>

         
          <div className="flex-1">
            <FridgeDoor>
              {fridgeMagnets.map((m) => (
                <WordMagnet key={m.id} magnet={m} />
              ))}
            </FridgeDoor>
          </div>

        </div>
      </div>
    </DndContext>
  );
}