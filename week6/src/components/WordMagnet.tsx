import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Magnet } from '../types/Magnet';

export default function WordMagnet({ magnet }: { magnet: Magnet }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: magnet.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    position: magnet.status === 'fridge' ? 'absolute' as const : 'relative' as const,
    left: magnet.x,
    top: magnet.y,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white text-black px-3 py-1 rounded shadow-md text-sm cursor-grab active:cursor-grabbing"
    >
      {magnet.word}
    </div>
  );
}