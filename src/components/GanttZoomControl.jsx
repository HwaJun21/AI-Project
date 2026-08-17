export const ZOOM_LEVELS = [24, 32, 48, 64, 96, 128, 160];
export const DEFAULT_ZOOM_INDEX = 3;

export default function GanttZoomControl({ zoomIndex, onChange }) {
  const zoomPercent = Math.round(
    (ZOOM_LEVELS[zoomIndex] / ZOOM_LEVELS[DEFAULT_ZOOM_INDEX]) * 100
  );
  const canZoomOut = zoomIndex > 0;
  const canZoomIn = zoomIndex < ZOOM_LEVELS.length - 1;

  return (
    <div className="flex items-center gap-1 rounded-lg border border-navy-950/15 bg-white p-1">
      <button
        onClick={() => onChange(Math.max(zoomIndex - 1, 0))}
        disabled={!canZoomOut}
        className="flex h-8 w-8 items-center justify-center rounded-md font-display text-lg text-navy-950 hover:bg-navy-950/5 disabled:opacity-30"
        aria-label="축소"
        title="날짜 칸 축소"
      >
        −
      </button>
      <span className="w-14 text-center font-mono text-xs text-navy-950/60">
        {zoomPercent}%
      </span>
      <button
        onClick={() => onChange(Math.min(zoomIndex + 1, ZOOM_LEVELS.length - 1))}
        disabled={!canZoomIn}
        className="flex h-8 w-8 items-center justify-center rounded-md font-display text-lg text-navy-950 hover:bg-navy-950/5 disabled:opacity-30"
        aria-label="확대"
        title="날짜 칸 확대"
      >
        +
      </button>
      <button
        onClick={() => onChange(DEFAULT_ZOOM_INDEX)}
        className="ml-1 rounded-md border border-navy-950/15 px-2 py-1.5 font-mono text-[10px] text-navy-950/60 hover:bg-navy-950/5"
      >
        초기화
      </button>
    </div>
  );
}
