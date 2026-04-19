import { useDroppable } from '@dnd-kit/core';

export default function FridgeDoor({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'fridge',
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-[500px] rounded-3xl border-4 relative transition-colors shadow-inner
      ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
    >
      {children}
    </div>
  );
}