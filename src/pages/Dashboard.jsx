import { tasks } from "../data/mockTasks";
import StatusBadge from "../components/StatusBadge";

const phases = [...new Set(tasks.map((t) => t.phase))];

function kpi(tasks) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "완료").length;
  const delayed = tasks.filter((t) => t.status === "지연").length;
  const critical = tasks.filter((t) => t.critical).length;
  return { total, done, delayed, critical };
}

export default function Dashboard() {
  const { total, done, delayed, critical } = kpi(tasks);
  const overallRate = Math.round((done / total) * 100);
  const criticalChain = tasks.filter((t) => t.critical);

  const taskById = Object.fromEntries(tasks.map((t) => [t.id, t]));
  const riskTask =
    tasks.find((t) => t.critical && t.status === "지연") ||
    tasks.find((t) => t.status === "지연");
  const riskSuccessors = riskTask?.successor
    ?.map((id) => taskById[id]?.id)
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600">
        Dashboard
      </p>
      <h1 className="font-display text-3xl font-bold text-navy-950">
        마이그레이션 관제 현황
      </h1>

      {/* KPI */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi label="전체 작업" value={total} />
        <Kpi label="완료" value={done} tone="teal" />
        <Kpi label="지연" value={delayed} tone="rose" />
        <Kpi label="Critical Path" value={critical} tone="navy" />
      </div>

      {/* 전체 진척률 */}
      <div className="mt-6 rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-sm font-semibold text-navy-950">
            전체 진척률
          </h2>
          <span className="font-mono text-sm text-teal-600">{overallRate}%</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy-950/5">
          <div
            className="h-full rounded-full bg-teal-500"
            style={{ width: `${overallRate}%` }}
          />
        </div>

        <div className="mt-6 space-y-3">
          {phases.map((phase) => {
            const phaseTasks = tasks.filter((t) => t.phase === phase);
            const phaseDone = phaseTasks.filter((t) => t.status === "완료").length;
            const rate = Math.round((phaseDone / phaseTasks.length) * 100);
            return (
              <div key={phase}>
                <div className="flex justify-between text-xs text-navy-950/60">
                  <span>{phase}</span>
                  <span className="font-mono">{rate}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-navy-950/5">
                  <div
                    className="h-full rounded-full bg-navy-800"
                    style={{ width: `${rate}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Critical Path 체인 */}
        <div className="rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm lg:col-span-3">
          <h2 className="font-display text-sm font-semibold text-navy-950">
            Critical Path 체인
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {criticalChain.map((t, i) => (
              <div key={t.id} className="flex items-center gap-2">
                <div
                  className={`rounded-lg border px-3 py-2 text-xs ${
                    t.status === "지연"
                      ? "border-rose-600/40 bg-rose-600/5"
                      : "border-navy-950/10"
                  }`}
                >
                  <p className="font-mono text-[10px] text-navy-950/40">{t.id}</p>
                  <p className="font-medium text-navy-950">{t.task}</p>
                </div>
                {i < criticalChain.length - 1 && (
                  <span className="text-navy-950/20">──▶</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI 상황 요약 (Human-in-the-loop: AI 추천, 사람이 승인) */}
        <div className="rounded-2xl border border-navy-950/10 bg-navy-950 p-6 text-white shadow-sm lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            <h2 className="font-display text-sm font-semibold">
              AI 리스크 요약
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {riskTask ? (
              <>
                {riskTask.critical ? "Critical Path 상 " : ""}
                <strong className="text-amber-500">{riskTask.id}</strong>
                {"("}
                {riskTask.task}
                {")"}가 지연되어
                {riskSuccessors?.length
                  ? ` 후행 작업(${riskSuccessors.join(", ")}) `
                  : " "}
                일정에 영향이 예상됩니다. 담당자 {riskTask.owner}님 리소스
                재배정을 검토해 주세요.
              </>
            ) : (
              "현재 지연된 작업이 없습니다. 전체 일정이 계획대로 진행 중입니다."
            )}
          </p>
          <div className="mt-4 flex gap-2">
            <button className="rounded-lg bg-teal-500 px-3 py-1.5 font-mono text-xs font-medium text-navy-950">
              승인 및 알림 발송
            </button>
            <button className="rounded-lg border border-white/20 px-3 py-1.5 font-mono text-xs text-white/70">
              반려
            </button>
          </div>
          <p className="mt-3 text-[10px] text-white/30">
            AI는 리스크를 예측·제안하며, 최종 승인은 담당자가 수행합니다.
          </p>
        </div>
      </div>

      {/* 지연 작업 목록 */}
      <div className="mt-6 rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm">
        <h2 className="font-display text-sm font-semibold text-navy-950">
          지연 작업
        </h2>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy-950/10 text-xs text-navy-950/40">
              <th className="pb-2 font-normal">Task ID</th>
              <th className="pb-2 font-normal">작업</th>
              <th className="pb-2 font-normal">담당자</th>
              <th className="pb-2 font-normal">계획 종료</th>
              <th className="pb-2 font-normal">상태</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((t) => t.status === "지연")
              .map((t) => (
                <tr key={t.id} className="border-b border-navy-950/5">
                  <td className="py-3 font-mono text-xs text-navy-950/50">{t.id}</td>
                  <td className="py-3">{t.task}</td>
                  <td className="py-3 text-navy-950/60">{t.owner}</td>
                  <td className="py-3 font-mono text-xs text-navy-950/50">
                    {t.plannedEnd?.replace("T", " ")}
                  </td>
                  <td className="py-3">
                    <StatusBadge status={t.status} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Kpi({ label, value, tone = "default" }) {
  const toneClass = {
    default: "text-navy-950",
    teal: "text-teal-600",
    rose: "text-rose-600",
    navy: "text-navy-800",
  }[tone];
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white p-5 shadow-sm">
      <p className="text-xs text-navy-950/40">{label}</p>
      <p className={`mt-1 font-display text-3xl font-bold ${toneClass}`}>{value}</p>
    </div>
  );
}
