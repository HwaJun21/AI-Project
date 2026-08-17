import { useMemo, useState } from "react";
import { tasks } from "../data/mockTasks";
import GanttChart from "../components/GanttChart";

const TODAY = new Date("2026-08-17T00:00:00");
const ZOOM_LEVELS = [24, 32, 48, 64, 96, 128, 160];
const DEFAULT_ZOOM_INDEX = 3;

export default function TaskWorkflow() {
  const [zoomIndex, setZoomIndex] = useState(DEFAULT_ZOOM_INDEX);

  const allTasks = useMemo(
    () =>
      [...tasks].sort((a, b) =>
        (a.plannedStart || "").localeCompare(b.plannedStart || "")
      ),
    []
  );

  const dayWidth = ZOOM_LEVELS[zoomIndex];
  const zoomPercent = Math.round((dayWidth / ZOOM_LEVELS[DEFAULT_ZOOM_INDEX]) * 100);
  const canZoomOut = zoomIndex > 0;
  const canZoomIn = zoomIndex < ZOOM_LEVELS.length - 1;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600">
            Task Workflow
          </p>
          <h1 className="font-display text-3xl font-bold text-navy-950">
            전체 작업 일정 (Gantt)
          </h1>
          <p className="mt-1 text-sm text-navy-950/50">
            전체 {allTasks.length}개 작업의 선후행 관계와 일정을 한눈에 확인합니다.
          </p>
        </div>

        {/* 확대/축소 컨트롤 */}
        <div className="flex items-center gap-1 rounded-lg border border-navy-950/15 bg-white p-1">
          <button
            onClick={() => setZoomIndex((i) => Math.max(i - 1, 0))}
            disabled={!canZoomOut}
            className="flex h-8 w-8 items-center justify-center rounded-md font-display text-lg text-navy-950 hover:bg-navy-950/5 disabled:opacity-30"
            aria-label="축소"
            title="축소"
          >
            −
          </button>
          <span className="w-14 text-center font-mono text-xs text-navy-950/60">
            {zoomPercent}%
          </span>
          <button
            onClick={() => setZoomIndex((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1))}
            disabled={!canZoomIn}
            className="flex h-8 w-8 items-center justify-center rounded-md font-display text-lg text-navy-950 hover:bg-navy-950/5 disabled:opacity-30"
            aria-label="확대"
            title="확대"
          >
            +
          </button>
          <button
            onClick={() => setZoomIndex(DEFAULT_ZOOM_INDEX)}
            className="ml-1 rounded-md border border-navy-950/15 px-2 py-1.5 font-mono text-[10px] text-navy-950/60 hover:bg-navy-950/5"
          >
            초기화
          </button>
        </div>
      </div>

      <GanttChart tasks={allTasks} today={TODAY} dayWidth={dayWidth} maxHeight="70vh" />
    </div>
  );
}
