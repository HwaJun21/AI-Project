import { useMemo, useState } from "react";
import { tasks } from "../data/mockTasks";
import GanttChart from "../components/GanttChart";
import GanttZoomControl, {
  ZOOM_LEVELS,
  DEFAULT_ZOOM_INDEX,
} from "../components/GanttZoomControl";

const TODAY = new Date("2026-08-17T00:00:00");

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

        <GanttZoomControl zoomIndex={zoomIndex} onChange={setZoomIndex} />
      </div>

      <GanttChart tasks={allTasks} today={TODAY} dayWidth={dayWidth} maxHeight="70vh" />
    </div>
  );
}
