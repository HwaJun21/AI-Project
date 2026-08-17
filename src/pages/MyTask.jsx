import { useMemo, useState } from "react";
import { tasks as initialTasks } from "../data/mockTasks";
import StatusBadge from "../components/StatusBadge";
import GanttChart from "../components/GanttChart";

const owners = [...new Set(initialTasks.map((t) => t.owner))];
const TODAY = new Date("2026-08-17T00:00:00");

function overlapsRange(t, from, to) {
  if (!t.plannedStart || !t.plannedEnd) return true;
  const start = new Date(t.plannedStart);
  const end = new Date(t.plannedEnd);
  if (from && end < new Date(`${from}T00:00`)) return false;
  if (to && start > new Date(`${to}T23:59`)) return false;
  return true;
}

export default function MyTask() {
  const [tasks, setTasks] = useState(initialTasks);
  const [ownerFilter, setOwnerFilter] = useState(owners[0]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const myTasks = useMemo(
    () =>
      tasks
        .filter((t) => t.owner === ownerFilter)
        .filter((t) => overlapsRange(t, dateFrom, dateTo)),
    [tasks, ownerFilter, dateFrom, dateTo]
  );

  // 담당자의 작업 + 그 작업의 직접 선행/후행 작업까지 포함해 간트에 노출
  const ganttTasks = useMemo(() => {
    const relatedIds = new Set();
    tasks.forEach((t) => {
      if (t.owner !== ownerFilter) return;
      relatedIds.add(t.id);
      (t.predecessor || []).forEach((id) => relatedIds.add(id));
      (t.successor || []).forEach((id) => relatedIds.add(id));
    });
    return tasks
      .filter((t) => relatedIds.has(t.id))
      .filter((t) => overlapsRange(t, dateFrom, dateTo))
      .sort((a, b) => (a.plannedStart || "").localeCompare(b.plannedStart || ""));
  }, [tasks, ownerFilter, dateFrom, dateTo]);

  const updateActual = (id, field, value) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const isOverdue = (t) =>
    t.status !== "완료" && t.plannedEnd && new Date(t.plannedEnd) < TODAY;

  const resetDateFilter = () => {
    setDateFrom("");
    setDateTo("");
  };

  const taskById = Object.fromEntries(tasks.map((t) => [t.id, t]));
  const relLabel = (ids) =>
    ids && ids.length
      ? ids.map((id) => taskById[id]?.task || id).join(", ")
      : "없음";

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600">
            My Task
          </p>
          <h1 className="font-display text-3xl font-bold text-navy-950">
            내 작업 목록
          </h1>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-navy-950/60">담당자</label>
            <select
              value={ownerFilter}
              onChange={(e) => setOwnerFilter(e.target.value)}
              className="rounded-lg border border-navy-950/15 bg-white px-3 py-2 font-body text-sm"
            >
              {owners.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-navy-950/40">조회 시작일</label>
            <input
              type="date"
              value={dateFrom}
              max={dateTo || undefined}
              onChange={(e) => setDateFrom(e.target.value)}
              className="rounded-lg border border-navy-950/15 bg-white px-3 py-1.5 font-mono text-xs"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-navy-950/40">조회 종료일</label>
            <input
              type="date"
              value={dateTo}
              min={dateFrom || undefined}
              onChange={(e) => setDateTo(e.target.value)}
              className="rounded-lg border border-navy-950/15 bg-white px-3 py-1.5 font-mono text-xs"
            />
          </div>
          {(dateFrom || dateTo) && (
            <button
              onClick={resetDateFilter}
              className="rounded-lg border border-navy-950/15 px-3 py-1.5 font-mono text-xs text-navy-950/60 hover:bg-navy-950/5"
            >
              기간 초기화
            </button>
          )}
        </div>
      </div>

      {/* 간트 차트: 선후행 작업 관계 */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-sm font-semibold text-navy-950">
            일정 · 선후행 관계 (Gantt)
          </h2>
          <span className="font-mono text-[10px] text-navy-950/40">
            좌우로 스크롤하여 전체 일정을 확인하세요
          </span>
        </div>
        <GanttChart tasks={ganttTasks} highlightOwner={ownerFilter} today={TODAY} />
      </div>

      <div className="space-y-4">
        {myTasks.map((t) => (
          <div
            key={t.id}
            className={`rounded-2xl border bg-white p-6 shadow-sm ${
              isOverdue(t) ? "border-rose-600/40" : "border-navy-950/10"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-navy-950/40">
                    {t.id}
                  </span>
                  {t.critical && (
                    <span className="rounded-full bg-rose-600/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-rose-600">
                      CRITICAL PATH
                    </span>
                  )}
                  {isOverdue(t) && (
                    <span className="animate-pulse rounded-full bg-rose-600 px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
                      지연
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-base font-semibold text-navy-950">
                  {t.task}
                </h3>
                <p className="mt-0.5 text-xs text-navy-950/50">
                  {t.phase} · {t.system} · {t.work} · {t.item}
                </p>
              </div>
              <StatusBadge status={t.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-navy-950/5 pt-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-navy-950/40">선행 작업</p>
                <p className="mt-1 text-xs text-navy-950/80">
                  {relLabel(t.predecessor)}
                </p>
              </div>
              <div>
                <p className="text-xs text-navy-950/40">후행 작업</p>
                <p className="mt-1 text-xs text-navy-950/80">
                  {relLabel(t.successor)}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-navy-950/5 pt-4 sm:grid-cols-4">
              <Field label="계획 시작">{fmt(t.plannedStart)}</Field>
              <Field label="계획 종료">{fmt(t.plannedEnd)}</Field>
              <div>
                <label className="text-xs text-navy-950/40">실제 시작</label>
                <input
                  type="datetime-local"
                  value={t.actualStart || ""}
                  onChange={(e) =>
                    updateActual(t.id, "actualStart", e.target.value)
                  }
                  className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 font-mono text-xs"
                />
              </div>
              <div>
                <label className="text-xs text-navy-950/40">실제 종료</label>
                <input
                  type="datetime-local"
                  value={t.actualEnd || ""}
                  onChange={(e) =>
                    updateActual(t.id, "actualEnd", e.target.value)
                  }
                  className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 font-mono text-xs"
                />
              </div>
            </div>
          </div>
        ))}
        {myTasks.length === 0 && (
          <p className="py-16 text-center text-navy-950/40">
            해당 조건에 지정된 작업이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-navy-950/40">{label}</p>
      <p className="mt-1 font-mono text-xs text-navy-950/80">{children}</p>
    </div>
  );
}

function fmt(v) {
  return v ? v.replace("T", " ") : "-";
}
