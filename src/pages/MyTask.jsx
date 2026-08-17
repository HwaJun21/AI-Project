import { useMemo, useState } from "react";
import { tasks as initialTasks } from "../data/mockTasks";
import StatusBadge from "../components/StatusBadge";

const owners = [...new Set(initialTasks.map((t) => t.owner))];

export default function MyTask() {
  const [tasks, setTasks] = useState(initialTasks);
  const [ownerFilter, setOwnerFilter] = useState(owners[0]);

  const myTasks = useMemo(
    () => tasks.filter((t) => t.owner === ownerFilter),
    [tasks, ownerFilter]
  );

  const updateActual = (id, field, value) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const isOverdue = (t) =>
    t.status !== "완료" &&
    t.plannedEnd &&
    new Date(t.plannedEnd) < new Date("2026-08-17T00:00");

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
            해당 담당자에게 지정된 작업이 없습니다.
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
