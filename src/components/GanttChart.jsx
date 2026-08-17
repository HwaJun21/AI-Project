import { useMemo } from "react";

const DAY_WIDTH = 64;
const ROW_HEIGHT = 56;
const LABEL_WIDTH = 240;

const statusBarClass = {
  완료: "bg-teal-500",
  진행중: "bg-navy-800",
  예정: "bg-slate-300",
  지연: "bg-rose-600",
};

function toDate(v) {
  return new Date(v);
}

function startOfDay(d) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

function daysBetween(a, b) {
  return (b.getTime() - a.getTime()) / 86400000;
}

export default function GanttChart({ tasks, highlightOwner, today }) {
  const { rangeStart, days, rows, rowById } = useMemo(() => {
    if (tasks.length === 0) {
      return { rangeStart: startOfDay(today), days: [], rows: [], rowById: {} };
    }

    const allDates = tasks.flatMap((t) => [toDate(t.plannedStart), toDate(t.plannedEnd)]);
    const minDate = startOfDay(new Date(Math.min(...allDates, today)));
    minDate.setDate(minDate.getDate() - 1);
    const maxDate = new Date(Math.max(...allDates, today));
    maxDate.setDate(maxDate.getDate() + 1);

    const dayCount = Math.ceil(daysBetween(minDate, maxDate)) + 1;
    const days = Array.from({ length: dayCount }, (_, i) => {
      const d = new Date(minDate);
      d.setDate(d.getDate() + i);
      return d;
    });

    const xFor = (v) => daysBetween(minDate, toDate(v)) * DAY_WIDTH;

    const rows = tasks.map((t, i) => {
      const x1 = xFor(t.plannedStart);
      const x2 = xFor(t.plannedEnd);
      const top = i * ROW_HEIGHT;
      return {
        task: t,
        x: x1,
        width: Math.max(x2 - x1, 12),
        top,
        centerY: top + ROW_HEIGHT / 2,
        isOwner: t.owner === highlightOwner,
      };
    });

    return {
      rangeStart: minDate,
      days,
      rows,
      rowById: Object.fromEntries(rows.map((r) => [r.task.id, r])),
    };
  }, [tasks, highlightOwner, today]);

  if (tasks.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-2xl border border-navy-950/10 bg-white text-sm text-navy-950/40">
        조회 조건에 해당하는 작업이 없습니다.
      </div>
    );
  }

  const totalWidth = days.length * DAY_WIDTH;
  const totalHeight = rows.length * ROW_HEIGHT;
  const todayX = daysBetween(rangeStart, startOfDay(today)) * DAY_WIDTH + DAY_WIDTH / 2;

  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <div style={{ minWidth: LABEL_WIDTH + totalWidth }}>
          {/* 날짜 헤더 */}
          <div className="flex border-b border-navy-950/10">
            <div
              style={{ width: LABEL_WIDTH }}
              className="sticky left-0 z-20 flex-none border-r border-navy-950/10 bg-slate-50 px-4 py-2.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-navy-950/40">
                작업
              </p>
            </div>
            <div className="flex bg-slate-50">
              {days.map((d, i) => {
                const isToday = startOfDay(d).getTime() === startOfDay(today).getTime();
                return (
                  <div
                    key={i}
                    style={{ width: DAY_WIDTH }}
                    className={`flex-none border-r border-navy-950/5 px-1 py-2.5 text-center ${
                      isToday ? "bg-teal-500/10" : ""
                    }`}
                  >
                    <p
                      className={`font-mono text-[10px] ${
                        isToday ? "font-semibold text-teal-600" : "text-navy-950/40"
                      }`}
                    >
                      {d.getMonth() + 1}/{d.getDate()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 본문: 라벨 + 타임라인 */}
          <div className="flex">
            <div
              style={{ width: LABEL_WIDTH }}
              className="sticky left-0 z-20 flex-none divide-y divide-navy-950/5 border-r border-navy-950/10 bg-white"
            >
              {rows.map(({ task, isOwner }) => (
                <div
                  key={task.id}
                  style={{ height: ROW_HEIGHT }}
                  className="flex flex-col justify-center px-4"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-navy-950/40">{task.id}</span>
                    {task.critical && (
                      <span className="rounded-full bg-rose-600/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-rose-600">
                        CP
                      </span>
                    )}
                  </div>
                  <p
                    className={`truncate text-xs font-medium ${
                      isOwner ? "text-navy-950" : "text-navy-950/45"
                    }`}
                    title={task.task}
                  >
                    {task.task}
                  </p>
                  <p className="truncate text-[10px] text-navy-950/40">
                    {task.owner}
                    {!isOwner && " · 관련 작업"}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative" style={{ width: totalWidth, height: totalHeight }}>
              {/* 격자 */}
              <div className="absolute inset-0 flex">
                {days.map((d, i) => (
                  <div
                    key={i}
                    style={{ width: DAY_WIDTH }}
                    className={`flex-none border-r border-navy-950/5 ${
                      startOfDay(d).getTime() === startOfDay(today).getTime()
                        ? "bg-teal-500/5"
                        : ""
                    }`}
                  />
                ))}
              </div>

              {/* 오늘 표시선 */}
              {todayX >= 0 && todayX <= totalWidth && (
                <div
                  className="absolute top-0 z-10 border-l-2 border-dashed border-amber-500"
                  style={{ left: todayX, height: totalHeight }}
                />
              )}

              {/* 선후행 커넥터 */}
              <svg
                className="pointer-events-none absolute inset-0 z-[1]"
                width={totalWidth}
                height={totalHeight}
              >
                <defs>
                  <marker
                    id="gantt-arrow"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M0,0 L10,5 L0,10 z" fill="#0B1220" fillOpacity="0.4" />
                  </marker>
                </defs>
                {rows.flatMap(({ task, x, centerY }) =>
                  (task.predecessor || [])
                    .map((pid) => rowById[pid])
                    .filter(Boolean)
                    .map((pr) => {
                      const x1 = pr.x + pr.width;
                      const y1 = pr.centerY;
                      const x2 = x;
                      const y2 = centerY;
                      const mid = x1 + Math.max((x2 - x1) / 2, 16);
                      const path = `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
                      return (
                        <path
                          key={`${pr.task.id}->${task.id}`}
                          d={path}
                          fill="none"
                          stroke="#0B1220"
                          strokeOpacity="0.35"
                          strokeWidth="1.5"
                          markerEnd="url(#gantt-arrow)"
                        />
                      );
                    })
                )}
              </svg>

              {/* 작업 바 */}
              {rows.map(({ task, x, width, top, isOwner }) => (
                <div
                  key={task.id}
                  title={`${task.task}\n${task.plannedStart?.replace("T", " ")} ~ ${task.plannedEnd?.replace("T", " ")}\n선행: ${
                    task.predecessor?.join(", ") || "없음"
                  } / 후행: ${task.successor?.length ? task.successor.join(", ") : "없음"}`}
                  className={`absolute z-[2] flex items-center rounded-lg px-2 text-[10px] font-medium text-white shadow-sm ${
                    statusBarClass[task.status]
                  } ${isOwner ? "" : "opacity-40"} ${
                    task.critical ? "ring-2 ring-rose-600/50" : ""
                  }`}
                  style={{ left: x, top: top + 10, width, height: ROW_HEIGHT - 20 }}
                >
                  <span className="truncate">{task.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-navy-950/5 px-4 py-3 text-[11px] text-navy-950/50">
        <Legend swatch="bg-teal-500" label="완료" />
        <Legend swatch="bg-navy-800" label="진행중" />
        <Legend swatch="bg-slate-300" label="예정" />
        <Legend swatch="bg-rose-600" label="지연" />
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded ring-2 ring-rose-600/50" /> Critical Path
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded bg-navy-950 opacity-40" /> 다른 담당자의 선후행 작업
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-0 border-l-2 border-dashed border-amber-500" /> 오늘
        </span>
        <span>화살표 = 선행 → 후행 관계</span>
      </div>
    </div>
  );
}

function Legend({ swatch, label }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`h-2.5 w-2.5 rounded ${swatch}`} /> {label}
    </span>
  );
}
